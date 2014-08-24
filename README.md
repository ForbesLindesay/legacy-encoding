# legacy-encoding

Support as many legacy encodings as possible

[![Dependency Status](https://img.shields.io/gemnasium/readable-lists/legacy-encoding.svg)](https://gemnasium.com/readable-lists/legacy-encoding)
[![NPM version](https://img.shields.io/npm/v/legacy-encoding.svg)](https://www.npmjs.org/package/legacy-encoding)

## Installation

    npm install legacy-encoding

## Usage

### `legacy.encode(encoding, input, options)`

This function takes a plain text string (the `input` parameter) and encodes it acording the `encoding`.  The return value is a 'byte string', i.e. a string of which each item represents an octet as per `encoding`.

```js
var legacy = require('legacy-encoding');

var encodedData = legacy.encode(encoding, text);
```

The optional `options` object and its `mode` property can be used to set the error mode.  For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
var legacy = require('legacy-encoding');

var encodedData = legacy.encode(text, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in the encoding,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

To get a node.js buffer rather than a binary string, just call the `Buffer` constructor:

```js
var legacy = require('legacy-encoding');

var buf = new Buffer(legacy.encode(encoding, text), 'binary');
```

### `legacy.decode(encoding, input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to `encoding`.

```js
var legacy = require('legacy-encoding');

var text = legacy.decode(encoding, encodedData);
```

The optional `options` object and its `mode` property can be used to set the error mode. For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
var text = windows1255.decode(encoding, encodedData, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

To usa a node.js buffer rather than a binary string, just call the `.toString('binary')` method:

```js
var legacy = require('legacy-encoding');

var text = legacy.decode(encoding, buf.toString('binary'));
```

## Supported Encodings

 - 866
 - ansi_x3.4-1968
 - arabic
 - ascii
 - asmo-708
 - cp1250
 - cp1251
 - cp1252
 - cp1253
 - cp1254
 - cp1255
 - cp1257
 - cp1258
 - cp819
 - cp866
 - csibm866
 - csiso88596e
 - csiso88596i
 - csiso88598e
 - csiso88598i
 - csisolatin1
 - csisolatin2
 - csisolatin3
 - csisolatin4
 - csisolatin5
 - csisolatin6
 - csisolatin9
 - csisolatinarabic
 - csisolatincyrillic
 - csisolatingreek
 - csisolatinhebrew
 - cskoi8r
 - csmacintosh
 - cyrillic
 - dos-874
 - ecma-114
 - ecma-118
 - elot_928
 - greek
 - greek8
 - hebrew
 - ibm819
 - ibm866
 - iso-8859-1
 - iso-8859-10
 - iso-8859-11
 - iso-8859-13
 - iso-8859-14
 - iso-8859-15
 - iso-8859-16
 - iso-8859-2
 - iso-8859-3
 - iso-8859-4
 - iso-8859-5
 - iso-8859-6
 - iso-8859-6-e
 - iso-8859-6-i
 - iso-8859-7
 - iso-8859-8
 - iso-8859-8-e
 - iso-8859-8-i
 - iso-8859-9
 - iso-ir-100
 - iso-ir-101
 - iso-ir-109
 - iso-ir-110
 - iso-ir-126
 - iso-ir-127
 - iso-ir-138
 - iso-ir-144
 - iso-ir-148
 - iso-ir-157
 - iso8859-1
 - iso8859-10
 - iso8859-11
 - iso8859-13
 - iso8859-14
 - iso8859-15
 - iso8859-2
 - iso8859-3
 - iso8859-4
 - iso8859-5
 - iso8859-6
 - iso8859-7
 - iso8859-8
 - iso8859-9
 - iso88591
 - iso885910
 - iso885911
 - iso885913
 - iso885914
 - iso885915
 - iso88592
 - iso88593
 - iso88594
 - iso88595
 - iso88596
 - iso88597
 - iso88598
 - iso88599
 - iso_8859-1
 - iso_8859-15
 - iso_8859-1:1987
 - iso_8859-2
 - iso_8859-2:1987
 - iso_8859-3
 - iso_8859-3:1988
 - iso_8859-4
 - iso_8859-4:1988
 - iso_8859-5
 - iso_8859-5:1988
 - iso_8859-6
 - iso_8859-6:1987
 - iso_8859-7
 - iso_8859-7:1987
 - iso_8859-8
 - iso_8859-8:1988
 - iso_8859-9
 - iso_8859-9:1989
 - koi
 - koi8
 - koi8-r
 - koi8-u
 - koi8_r
 - l1
 - l2
 - l3
 - l4
 - l5
 - l6
 - l9
 - latin1
 - latin2
 - latin3
 - latin4
 - latin5
 - latin6
 - logical
 - mac
 - macintosh
 - sun_eu_greek
 - tis-620
 - us-ascii
 - visual
 - windows-1250
 - windows-1251
 - windows-1252
 - windows-1253
 - windows-1254
 - windows-1255
 - windows-1257
 - windows-1258
 - windows-874
 - x-cp1250
 - x-cp1251
 - x-cp1252
 - x-cp1253
 - x-cp1254
 - x-cp1255
 - x-cp1257
 - x-cp1258
 - x-mac-cyrillic
 - x-mac-roman
 - x-mac-ukrainian

## License

  MIT
