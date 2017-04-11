const _ = require('lodash');
const base = require('./base.config.js');

module.exports = _.assign({}, base, {
  devServer: {
    stats: 'errors-only',
    noInfo: true
  }
})
