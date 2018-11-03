'use strict';

const Model = require('../Model');
const Schema = require('../Schema');

describe('Model.constructor()', () => {
  it('properly sets the options to properties', () => {
    const exampleSchema = new Schema();
    const exampleTableName = 'exampleTable';
    const exampleModel = new Model(exampleTableName, exampleSchema);
    expect(exampleModel.tableName).toEqual(exampleTableName);
    expect(exampleModel.schema).toBe(exampleSchema);
  });
});
