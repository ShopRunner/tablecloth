'use strict';

const main = require('..');
const TableCloth = require('../lib/Database');
const Schema = require('../lib/Schema');

describe('Entry-point', () => {
  it('exports the correct libs', () => {
    expect(main).toEqual({
      Schema,
      TableCloth,
    });
  });
});
