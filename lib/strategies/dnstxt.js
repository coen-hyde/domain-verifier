'use strict'

var dns = require('dns');
var _ = require('lodash');

module.exports = function(domain, token, cb) {
  dns.resolveTxt(domain, (err, records) => {
    cb(err, !!records && !!records.find((record) => record[0] === token));
  });
};
