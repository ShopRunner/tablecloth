'use strict';
/* @flow */

const Schema = require('./Schema');

class Model {
  constructor (tableName: string, schema: Schema) {
    this.schema = schema;
    this.tableName = tableName;
  }

  +schema: Object;

  +tableName: string;

  async find () {}

  async findOne () {}

  async create () {}

  async update () {}

  async delete () {}
}

module.exports = Model;
