'use strict';
/**
 * players model. Defines the schema from players-schema for players and exports.
 * @module models/players/players-model.js
 * requires mongoose to run
 */
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

/**
 * players schema. Has name position thows bats and team.
 * Enum for postion limits the inputs to be positions. Enum for throws and bats are only L or R
 */
const players = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true, uppercase:true, enum:['P','C','1B','2B','3B','SS','LF','RF','CF'] },
  throws: { type:String, required:true, uppercase:true, enum:['R','L'] },
  bats: { type:String, required:true, uppercase:true, enum:['R','L'] },
  team: {type:String, required:true},
});

/**
 * exports the players model
 */
module.exports = mongoose.model('players', players);
