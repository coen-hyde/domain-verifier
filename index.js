'use strict'

var _ = require('lodash');
var strategies = require('./lib/strategies');

// TODO: Create generic verifier to verify multiple strategies
function verifier(options, cb) {
  cb();
}

verifier.dnstxt = strategies.dnstxt;

module.exports = verifier;
