const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  remoteType: String,
  dateUpdated: String,
  experience: String,
  compensation: String,
  jobUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Job = mongoose.model("Job", jobSchema);
const JobGQL = composeWithMongoose(Job);

module.exports = {  Job,  JobGQL  };
