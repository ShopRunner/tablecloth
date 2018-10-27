'use strict';

const flow = require('rollup-plugin-flow');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  format: 'cjs',
  plugins: [flow({all: true})]
};