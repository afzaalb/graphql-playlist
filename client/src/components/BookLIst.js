import { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries";
import BookDetails from "./BookDetails";

const BookList = ({ data: gqlData }) => {
  const [selectedBookId, setSelectedBookId] = useState("");
  const { loading, books } = gqlData;

  if (loading) {
    return <div>Loading Books...</div>;
  }

  return (
    <div>
      <ul className="book-list">
        {books.map(({ name, id }) => (
          <li onClick={(e) => setSelectedBookId(id)} key={id}>
            {name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedBookId} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
