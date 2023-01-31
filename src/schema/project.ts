const mongooseInstance = require('mongoose');
const { Schema } = mongooseInstance;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  imageLink: { type: String, required: true },
});

module.exports = mongooseInstance.model('project', projectSchema, 'project');