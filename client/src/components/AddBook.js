import { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getBooksQuery, getAuthorsQuery, addBookMutation } from "../queries";

const AddBook = ({ getAuthorsQuery, addBookMutation }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("0");
  const { loading, authors } = getAuthorsQuery;

  const submitForm = (e) => {
    e.preventDefault();

    addBookMutation({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <form className="add-book-form" onSubmit={submitForm}>
      <fieldset>
        <legend style={{ fontWeight: 700 }}>Add Book</legend>
        <p className="field">
          <label>Book Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p className="field">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </p>
        <p className="field">
          <label>Author:</label>
          <select
            defaultValue={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          >
            <option value="0" disabled>
              {loading ? "Loading..." : "Select Author"}
            </option>
            {!loading &&
              authors &&
              authors.map((author) => (
                <option value={author.id} key={author.id}>
                  {author.name}
                </option>
              ))}
          </select>
        </p>
        <p>
          <button type="submit">Add Book</button>
        </p>
      </fieldset>
    </form>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
