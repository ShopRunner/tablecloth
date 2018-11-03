'use strict';

const main = require('../index');
const TableCloth = require('../lib/TableCloth');
const Schema = require('../lib/Schema');

describe('Entry-point', () => {
  it('exports the correct libs', () => {
    expect(main).toEqual({
      Schema,
      TableCloth
    });
  });
});
