'use strict';

const Schema = require('../Schema');

describe('Schema.DataTypes', () => {
  it('contains correct values', () => {
    expect(Schema.DataTypes).toEqual({
      'Array': 'Array',
      'Binary': 'Binary',
      'Boolean': 'Boolean',
      'DateTime': 'DateTime',
      'Nil': 'Nil',
      'Number': 'Number',
      'Object': 'Object',
      'Set': 'Set',
      'String': 'String'
    });
  });
});

describe('Schema.ColumnFamilyTypes', () => {
  it('contains correct values', () => {
    expect(Schema.ColumnFamilyTypes).toEqual({'Base': 'Base', 'Hash': 'Hash'});
  });
});

describe('Schema.constructor()', () => {
  const schemaDef = {
    foo: {
      bar: {type: Schema.DataTypes.String}
    }
  };

  const options = {
    rowKey: ['foo.bar']
  };

  it('properly sets the schema definition', () => {
    const foo = new Schema(schemaDef);
    expect(foo.schemaDefinition).toEqual(schemaDef);
  });

  it('throws if attempted to mutate schema definition', () => {
    const foo = new Schema(schemaDef);
    expect(() => {
      foo.schema.foo = {};
    }).toThrow();
  });

  it('properly sets the options', () => {
    const foo = new Schema(schemaDef, options);
    expect(foo.options).toEqual(options);
  });

  it('throws if attempted to mutate schema definition', () => {
    const foo = new Schema(schemaDef, options);
    expect(() => {
      foo.options.rowKey = [];
    }).toThrow();
  });
});

