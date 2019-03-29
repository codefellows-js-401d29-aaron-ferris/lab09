'use strict';
/**
 * categories model. Defines the schema for categories and exports.
 * @module models/categories/categories-model
 */
const Model = require('../memory-model.js');

const schema = {
  _id: {required:true},
  name: {required:true},
};
/**
 * Creates Categories Class
 * Class Categories is an extension of model from mongo-model.js, and has a schema with 2 properties, ID which is required, and name is that is not. This class is exported 
 */
class Categories extends Model {}

module.exports = new Categories(schema);
