'use strict'

var sinon = require('sinon');
var expect = require('expect.js');

var dns = require('dns');
var dnstxt = require('../../lib/strategies/dnstxt');

describe('Strategies:DNSTXT', function() {
  var token='wef0vihqw3rpoaxufg';

  describe('for domains without TXT records', function() {
    var stubbedDNS = null;

    beforeEach(function() {
      stubbedDNS = sinon.stub(dns, 'resolveTxt', (domain, cb) => cb(null, undefined));
    });

    afterEach(function() {
      stubbedDNS.restore();
    })

    it('should not return verified', function(done) {
      dnstxt('example.com', "bla", function(err, verified) {
        expect(err).to.equal(null);
        expect(verified).to.equal(false);
        done();
      });
    });
  });

  describe('for domains with TXT records', function() {
    var stubbedDNS = null;

    beforeEach(function() {
      stubbedDNS = sinon.stub(dns, 'resolveTxt', (domain, cb) => {
        return cb(null, [
          [ 'v=spf1 include:_spf.google.com -all' ],
          [ `cronio=${token}` ],
          [ `random txt record` ]
        ]);
      });
    });

    afterEach(function() {
      stubbedDNS.restore();
    })

    it('should return not verified for search of TXT DNS records with bad token', function(done) {
      dnstxt('example.com', "bla", function(err, verified) {
        expect(err).to.equal(null);
        expect(verified).to.equal(false);
        done();
      });
    });

    it('should return verified for search of TXT DNS records with correct token', function(done) {
      dnstxt('example.com', `cronio=${token}`, function(err, verified) {
        expect(err).to.equal(null);
        expect(verified).to.equal(true);
        done();
      });
    });
  });
})
