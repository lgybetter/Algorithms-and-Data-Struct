require('babel-core/register')({
  presets: ['stage-3', 'es2015-node6']
});

require('babel-polyfill');

require('./cycle-list/test.js');