'use strict'

var iconv;
try {
  iconv = require('iconv-lite');
} catch (ex) {
  // missing optional dependency iconv-lite
}
var encodings = require('./encodings.js');


exports.labels = encodings.map(function (enc) {
  return enc.labels;
}).concat(iconv ? Object.keys(require('iconv-lite/encodings')) : []).reduce(function (acc, next) {
  return acc.concat(next);
}, []).sort();

exports.decode = decode;
function decode(source, encoding, options) {
  if (iconv && iconv.encodingExists(encoding)) {
    return iconv.decode(source, encoding);
  }
  for (var i = 0; i < encodings.length; i++) {
    if (encodings[i].labels.indexOf(encoding) !== -1) {
      return encodings[i].decode(source.toString('binary'), options);
    }
  }
  throw new TypeError('Unknown encoding: ' + JSON.stringify(encoding));
}
exports.encode = encode;
function encode(source, encoding, options) {
  if (iconv && iconv.encodingExists(encoding)) {
    return iconv.encode(source, encoding);
  }
  for (var i = 0; i < encodings.length; i++) {
    if (encodings[i].labels.indexOf(encoding) !== -1) {
      return new Buffer(encodings[i].encode(source, options), 'binary');
    }
  }
  throw new TypeError('Unknown encoding: ' + JSON.stringify(encoding));
}
