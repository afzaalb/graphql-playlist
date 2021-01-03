const _ = require("lodash");
const Author = require("../mongo/models/author");
const Book = require("../mongo/models/book");

const getAuthors = async () => {
  return await Author.find();
};

const getBooks = async () => {
  return await Book.find();
};

const getBooksByAuthorId = async (authorId) => {
  const books = await getBooks();
  return _.filter(books, { authorId });
};

const getAuthorById = async (id) => {
  const authors = await getAuthors();
  return _.find(authors, { id });
};

const getBookById = async (id) => {
  const books = await getBooks();
  return _.find(books, { id });
};

module.exports = {
  getBooks,
  getAuthors,
  getBookById,
  getAuthorById,
  getBooksByAuthorId,
};
