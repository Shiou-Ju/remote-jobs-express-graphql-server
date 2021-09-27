const { SchemaComposer } = require("graphql-compose");
const { jobQuery, jobMutation } = require("./Job");

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...jobQuery,
});

schemaComposer.Mutation.addFields({
  ...jobMutation,
});

const graphqlSchema = schemaComposer.buildSchema();
module.exports = graphqlSchema;
