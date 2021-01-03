const graphql = require("graphql");
const {
  getAuthors,
  getBooks,
  getBookById,
  getAuthorById,
} = require("../utils");
const { AuthorType, BookType } = require("../../graphql/types");
const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return getBookById(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return getAuthorById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return getBooks();
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return getAuthors();
      },
    },
  },
});

module.exports = RootQuery;
