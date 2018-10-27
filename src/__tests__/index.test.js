'use strict';

const main = require('../index');

describe('Entry point', () => {
  it('exports the correct libs', () => {
    expect(main).toEqual({});
  });
});
