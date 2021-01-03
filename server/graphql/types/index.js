const _ = require("lodash");
const graphql = require("graphql");
const { getAuthorById, getBooksByAuthorId } = require("../utils");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return getAuthorById(parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return getBooksByAuthorId(parent.id);
      },
    },
  }),
});

module.exports = {
  AuthorType,
  BookType,
};
