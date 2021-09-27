const { JobGQL } = require("../models/Job");

const jobQuery = {
  jobById: JobGQL.getResolver("findById"),
  jobByIds: JobGQL.getResolver("findByIds"),
  jobOne: JobGQL.getResolver("findOne"),
  jobMany: JobGQL.getResolver("findMany"),
  jobCount: JobGQL.getResolver("count"),
  jobConnection: JobGQL.getResolver("connection"),
  jobPagination: JobGQL.getResolver("pagination"),
};

const jobMutation = {
  jobCreateOne: JobGQL.getResolver("createOne"),
  jobCreateMany: JobGQL.getResolver("createMany"),
  jobUpdateById: JobGQL.getResolver("updateById"),
  jobUpdateOne: JobGQL.getResolver("updateOne"),
  jobUpdateMany: JobGQL.getResolver("updateMany"),
  jobRemoveById: JobGQL.getResolver("removeById"),
  jobRemoveOne: JobGQL.getResolver("removeOne"),
  jobRemoveMany: JobGQL.getResolver("removeMany"),
};

module.exports = { jobQuery, jobMutation };
