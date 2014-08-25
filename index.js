'use strict'

var encodings = require('./encodings.js').concat([
  {
    labels: ['utf-7'],
    encode: require('utf7').encode,
    decode: require('utf7').decode
  }
]);

exports.labels = encodings.map(function (enc) {
  return enc.labels;
}).reduce(function (acc, next) {
  return acc.concat(next);
}, []).sort();

exports.decode = decode;
function decode(source, encoding, options) {
  for (var i = 0; i < encodings.length; i++) {
    if (encodings[i].labels.indexOf(encoding) !== -1) {
      return encodings[i].decode(source, options);
    }
  }
  throw new TypeError('Unknown encoding: ' + JSON.stringify(encoding));
}
exports.encode = encode;
function encode(source, encoding, options) {
  for (var i = 0; i < encodings.length; i++) {
    if (encodings[i].labels.indexOf(encoding) !== -1) {
      return encodings[i].encode(source, options);
    }
  }
  throw new TypeError('Unknown encoding: ' + JSON.stringify(encoding));
}
