const express = require("express");

// mount router
const jobs = require("./routes/jobs");

const app = express();
app.use("/graphql",  jobs);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
