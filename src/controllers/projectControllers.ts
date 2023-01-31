const Project = require('../schema/project.ts');

module.exports = {
  //#get the list of projects
  fetch: async (request, reply) => {
    try {
      const projects = await Project.find({}, { __v: 0, _id: 0 }).lean();
      reply.code(200).send(projects);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};