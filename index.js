'use strict';

/**
 * Start point for requests
 * @module /
 */

require('dotenv').config();
const mongoose = require('mongoose');


const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

/**
 * Start point for requests
 * @module /
 */mongoose.connect(process.env.MONGODB_URI, mongooseOptions);


require('./src/app.js').start(process.env.PORT);
