const Job = require("../models/Job");
const { graphqlHTTP } = require("express-graphql");

const root = {
  hello: () => {
    return "Hello world!";
  },
};

const router = graphqlHTTP({
  schema: Job,
  rootValue: root,
  graphiql: true,
});

module.exports = router;
