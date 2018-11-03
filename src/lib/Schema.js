'use strict';
/* @flow */

const dataTypeEnum = require('./enums/DataType');
const columnFamilyTypeEnum = require('./enums/ColumnFamilyType');

class Schema {
  constructor (schema: Object, options: ?Object) {
    this.schemaDefinition = Object.freeze(schema);
    this.options = Object.freeze(options) || null;
  }

  static DataTypes: Object;

  static ColumnFamilyTypes: Object;

  +schemaDefinition: Object;

  +options: Object | null;
}

Schema.DataTypes = dataTypeEnum;
Schema.ColumnFamilyTypes = columnFamilyTypeEnum;

module.exports = Schema;
