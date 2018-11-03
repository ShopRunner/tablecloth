'use strict';
/* @flow */
/* global $Keys */

const dataTypeEnum = require('./enums/DataType');
const columnFamilyTypeEnum = require('./enums/ColumnFamilyType');

type ColumnDefinition = {
  type: $Keys<typeof dataTypeEnum>
}

type ColumnFamilyDefinition = {
  type: $Keys<typeof columnFamilyTypeEnum>,
  columns: {
    [key: string]: ColumnDefinition
  }
}

type SchemaDefinition = {
  [key: string]: ColumnFamilyDefinition
}

class Schema {
  constructor (schema: SchemaDefinition, options: ?Object) {
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
