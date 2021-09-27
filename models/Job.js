const { buildSchema } = require("graphql");

const Job = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = Job;
