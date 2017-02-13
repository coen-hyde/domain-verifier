'use strict'

var _ = require('lodash');
var strategies = require('lib/strategies');

module.exports = function(options, cb) {
  _.defaults(options, {
    method: 'dns'
  });

  
}
