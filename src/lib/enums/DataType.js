'use strict';
/* @flow */

const createEnum = require('../utils/createEnum');

module.exports = createEnum({
  String: 'String',
  Number: 'Number',
  DateTime: 'DateTime',
  Object: 'Object',
  Array: 'Array',
  Set: 'Set',
  Binary: 'Binary',
  Boolean: 'Boolean',
  Nil: 'Nil'
});
