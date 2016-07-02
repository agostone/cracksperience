'use strict';

var fs = require('fs');
var NodeRSA = require('./node-rsa');
var key = new NodeRSA(fs.readFileSync('../private.pem').toString());
var path = require('path').dirname(process.argv[3]);

console.log('Pandora: ' + process.argv[2] + '...');
if (process.argv[2] == 'enc') {
  fs.writeFileSync(
    path + '/pandoras.box',
    key.encrypt(fs.readFileSync(process.argv[3]), 'base64')
  );
} else {
  fs.writeFileSync(
    path + '/opened.box',
    key.decrypt(fs.readFileSync(process.argv[3]).toString())
  );
}
console.log('Done!');