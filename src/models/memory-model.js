'use strict';
/**
 * schema for the local memory model. Defines the schema from  and exports.
 * @module models/memory-model.js
 */
const uuid = require('uuid/v4');
/**
 * @param  {} schema
 * Is A CONSTRUCTOR for the data memory model. Containts SANITIZE COUNT POST DELETE and PUT
 * 
 */
class Model {

  constructor(schema) {
    this.schema = schema;
    this.database = [];
  }
  /**
  * Sanitize function ensures that if the entry is required and it is there it will go, otherwise it wil return undefined
   */
  sanitize(entry) {

    let valid = true;
    let record = {};

    Object.keys(this.schema).forEach( field => {
      if ( this.schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });
    
    return valid ? record : undefined;
  }
  
  /**
   * tells how long the database is.
   */
  count() {
    return this.database.length;
  }
  /**
   * runs a get function, and santizes entry first. Input requires ID as parameters
   */
  get(id) {
    const records = id ? this.database.filter( (record) => record._id === id ) : this.database;
    return Promise.resolve(records);
  }
 /**
   * runs a post function, and santizes entry first. Input requires Entry as parameters
   */
  post(entry) {
    entry._id = uuid();
    let record = this.sanitize(entry);
    if ( record._id ) { this.database.push(record); }
    return Promise.resolve(record);
  }
 /**
   * runs a delete function, and santizes entry first. Input requires ID as parameters
   */
  delete(id) {
    this.database = this.database.filter((record) => record._id !== id );
    return this.get(id);
  }
  /**
   * runs a put function, and santizes entry first. Input requires ID and Entry as parameters
   */
  put(id, entry) {
    let record = this.sanitize(entry);
    if( record._id ) { this.database = this.database.map((item) => (item._id === id) ? record : item  ); }
    return this.get(id);
  }
  
}
/**
 * Exports class Model to be used
 */
module.exports = Model;