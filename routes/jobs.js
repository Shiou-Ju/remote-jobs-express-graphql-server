const schema = require("../schemas/graphqlSchema");
const { graphqlHTTP } = require("express-graphql");

const router = graphqlHTTP(async (request, response, graphQLParams) => ({
  schema,
  graphiql: true,
}));

module.exports = router;
