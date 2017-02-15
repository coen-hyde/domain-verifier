Domain Verifier
==============

Verify the ownership of a domain name.

Installation
------------

`$ npm install domain-verifier`

Usage
-----

```js
const verifier = require('domain-verifier');

// Only DNS TXT domain verification is supported atm.
verifier.dnstxt('example.com', 'random identification token', (err, verified) => {
  if (err) throw err;

  console.log(`result: ${verified}`);
});
```

TODO
----

Support other verification methods. Some options:
- Download file on domain at specific path with specific contents
- Meta tag?
- ?
