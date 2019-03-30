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
 * Takes in the mongo uri the port and the mongoose options
 */
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);


require('./src/app.js').start(process.env.PORT);
