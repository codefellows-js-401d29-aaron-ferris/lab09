'use strict';
/**
 * players model. Defines the schema from players-schema for players and exports.
 * @module models/players/players-model.js
 */
const Model = require('../mongo-model.js');
const schema = require('./players-schema.js');
/**
 * players model. Defines the schema from base model without any extra
 * @module models/players/players-model.js
 */
class Players extends Model {}

module.exports = new Players(schema);

