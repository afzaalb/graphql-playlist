const graphql = require("graphql");
const GraphQLSchema = graphql.GraphQLSchema;
const mutation = require("./mutation");
const rootQuery = require("./rootQuery");

const GraphSchema = new GraphQLSchema({
  query: rootQuery,
  mutation,
});

module.exports = GraphSchema;
