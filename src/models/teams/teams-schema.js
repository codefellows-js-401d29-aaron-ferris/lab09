'use strict';
/**
 * Teams schema. 
 * @module models/teams/teams-schema.js
 * requires mongoose to run
 */
const players = require('../players/players-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

/**
 * Teams schema. name protperty 
 */
const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });
/**
 * adds properties to team of players 
 */
teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

teams.pre('find', function() {
  try {
    this.populate('players');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

/**
 * exports the teams  model
 */

module.exports = mongoose.model('teams', teams);
