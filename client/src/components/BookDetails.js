import { getBookQuery } from "../queries";
import { graphql } from "react-apollo";

const BookDetails = ({ getBookDetail, bookId }) => {
  const { loading, book } = getBookDetail;

  if (!bookId) {
    return <p>No Book selected</p>;
  }

  if (loading) {
    return <p>Loading book...</p>;
  }

  return (
    <fieldset>
      <legend style={{ fontWeight: 700 }}>{book.name}</legend>
      <div>Book Id: {book.id}</div>
      <div>Written By: {book.author.name}</div>
      <div>
        Other Books by <b>{book.author.name}</b>
      </div>
      <ul>
        {book.author.books.map((b) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
    </fieldset>
  );
};

export default graphql(getBookQuery, {
  name: "getBookDetail",
  options: (props) => ({
    variables: {
      id: props.bookId,
    },
  }),
})(BookDetails);
