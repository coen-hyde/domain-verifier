Domain Verifier
==============

Verify the ownership of a domain name.

Installation
------------

`$ npm install domain-verifier --save-dev`

Usage
-----

```js
const verifier = require('domain-verifier');

var options = {
  domain: 'example.com',
  method: 'dns',
  token: 'some large random string'
};

verify(options, (err, verified) => {
  if (err) throw err;

  console.log(`result: ${verified}`);
});
```
