'use strict';

const Schema = require('../Schema');
const TableCloth = require('../Database');

describe('TableCloth.model()', () => {
  it('returns a instantiated Model', () => {
    const exampleSchema = new Schema();
    const exampleTableName = 'exampleTable';
    const returnValue = TableCloth.model(exampleTableName, exampleSchema);
    expect(returnValue.schema).toBe(exampleSchema);
    expect(returnValue.tableName).toEqual(exampleTableName);
  });
});
