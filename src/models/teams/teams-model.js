'use strict';
/**
 * teams model. Defines the schema from players-schema for teams and exports.
 * @module models/teams/team-model.js
 */
const Model = require('../mongo-model.js');
const schema = require('./teams-schema.js');


/**
 * Creates a teams class that is the same structure as model.
 */
class Teams extends Model {}

/**
 * Exports the newly made teams from model and utilizes schema to make the structure of it's data 
 */
module.exports = new Teams(schema);

