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
  return await Book.find({ authorId });
};

const getAuthorById = async (id) => {
  return await Author.findById(id);
};

const getBookById = async (id) => {
  return await Book.findById(id);
};

module.exports = {
  getBooks,
  getAuthors,
  getBookById,
  getAuthorById,
  getBooksByAuthorId,
};
