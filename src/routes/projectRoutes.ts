
const projectControllers = require('../controllers/projectControllers.ts');

module.exports = (app) => {
  // get the list of notes
  app.get('/api/projects', projectControllers.fetch);
};