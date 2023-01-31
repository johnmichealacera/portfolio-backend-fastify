//import fastify & mongoose
const fastify = require('fastify')();
const mongoose = require('mongoose');
const cors = require('@fastify/cors');

//initialized Fastify App
const app = fastify;
const projectRoutes = require('./routes/projectRoutes.ts');

const fastifyEnv = require('@fastify/env')
const schema = {
  type: 'object',
  required: ['MONGO_DB_STRING_CONNECTION', 'PORTFOLIO_FRONTEND_URL'],
  properties: {
    MONGO_DB_STRING_CONNECTION: {
      type: 'string'
    },
    PORTFOLIO_FRONTEND_URL: {
      type: 'string'
    }
  }
}

const options = {
  confKey: 'config',
  schema,
  dotenv: true,
  data: process.env
}

fastify.register(fastifyEnv, options).ready((err) => {
    if (err) console.error(err)
    //connected fastify to mongoose
    try {
      mongoose.connect(fastify.config.MONGO_DB_STRING_CONNECTION);
    } catch (e) {
      console.error(e);
    }
});

fastify.register(cors, { 
  origin: 'https://jm-portfolio-qnov.onrender.com'
});

projectRoutes(app);

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});