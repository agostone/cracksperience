'use strict';

var fs = require('fs');
var NodeRSA = require('./node-rsa');

console.log('Generating key...');
var key = new NodeRSA({b: 4096});
console.log('Writing file...');
fs.writeFileSync(process.argv[2], key.exportKey('pkcs1-pem-private'));
console.log('Done');
