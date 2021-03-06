# legacy-encoding

Support as many legacy encodings as possible

[![Dependency Status](https://img.shields.io/david/ForbesLindesay/legacy-encoding.svg)](https://david-dm.org/ForbesLindesay/legacy-encoding)
[![NPM version](https://img.shields.io/npm/v/legacy-encoding.svg)](https://www.npmjs.org/package/legacy-encoding)

## Installation

    npm install legacy-encoding

## Usage

### `legacy.encode(input, encoding, options)`

This function takes a plain text string (the `input` parameter) and encodes it acording the `encoding`.  The return value is a `Buffer`.

```js
var legacy = require('legacy-encoding');

var buffer = legacy.encode(text, encoding);
```

The optional `options` object and its `mode` property can be used to set the error mode.  For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
var legacy = require('legacy-encoding');

var buffer = legacy.encode(text, encoding, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in the encoding,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `legacy.decode(input, encoding, options)`

This function takes a `Buffer` (the `input` parameter) and decodes it according to `encoding`.

```js
var legacy = require('legacy-encoding');

var text = legacy.decode(buffer, encoding);
```

The optional `options` object and its `mode` property can be used to set the error mode. For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
var text = windows1255.decode(buffer, encoding, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

## Supported Encodings

 - 10000
 - 10006
 - 10007
 - 10029
 - 10079
 - 10081
 - 1046
 - 1124
 - 1125
 - 1129
 - 1133
 - 1161
 - 1162
 - 1163
 - 1250
 - 1251
 - 1252
 - 1253
 - 1254
 - 1255
 - 1256
 - 1257
 - 1258
 - 20866
 - 21866
 - 28591
 - 28592
 - 28593
 - 28594
 - 28595
 - 28596
 - 28597
 - 28598
 - 28599
 - 28600
 - 28601
 - 28603
 - 28604
 - 28605
 - 28606
 - 437
 - 737
 - 775
 - 808
 - 850
 - 852
 - 855
 - 856
 - 857
 - 858
 - 860
 - 861
 - 862
 - 863
 - 864
 - 865
 - 866
 - 869
 - 874
 - 922
 - 932
 - 936
 - 949
 - 950
 - ansi_x3.4-1968
 - ansix3.4
 - ansix3.41968
 - ansix3.41986
 - arabic
 - arabic8
 - armscii8
 - ascii
 - ascii8bit
 - asmo-708
 - asmo708
 - base64
 - big5
 - big5hkscs
 - binary
 - celtic
 - celtic8
 - cesu8
 - chinese
 - cn
 - cnbig5
 - cp1046
 - cp1124
 - cp1125
 - cp1129
 - cp1133
 - cp1161
 - cp1162
 - cp1163
 - cp1250
 - cp1251
 - cp1252
 - cp1253
 - cp1254
 - cp1255
 - cp1256
 - cp1257
 - cp1258
 - cp20866
 - cp21866
 - cp28591
 - cp28592
 - cp28593
 - cp28594
 - cp28595
 - cp28596
 - cp28597
 - cp28598
 - cp28599
 - cp28600
 - cp28601
 - cp28603
 - cp28604
 - cp28605
 - cp28606
 - cp367
 - cp437
 - cp737
 - cp775
 - cp808
 - cp819
 - cp850
 - cp852
 - cp855
 - cp856
 - cp857
 - cp858
 - cp860
 - cp861
 - cp862
 - cp863
 - cp864
 - cp865
 - cp866
 - cp869
 - cp874
 - cp922
 - cp932
 - cp936
 - cp949
 - cp950
 - cpgr
 - csascii
 - csbig5
 - cseuckr
 - csgb2312
 - cshproman8
 - csibm1046
 - csibm1124
 - csibm1125
 - csibm1129
 - csibm1133
 - csibm1161
 - csibm1162
 - csibm1163
 - csibm437
 - csibm737
 - csibm775
 - csibm850
 - csibm852
 - csibm855
 - csibm856
 - csibm857
 - csibm858
 - csibm860
 - csibm861
 - csibm862
 - csibm863
 - csibm864
 - csibm865
 - csibm866
 - csibm869
 - csibm922
 - csiso14jisc6220ro
 - csiso58gb231280
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
 - csksc56011987
 - csmacintosh
 - cspc775baltic
 - cspc850multilingual
 - cspc862latinhebrew
 - cspc8codepage437
 - cspcp852
 - csshiftjis
 - cyrillic
 - dos-874
 - ecma-114
 - ecma-118
 - ecma114
 - ecma118
 - elot928
 - elot_928
 - euc-jp
 - euccn
 - eucjp
 - euckr
 - gb18030
 - gb198880
 - gb2312
 - gb23121980
 - gb231280
 - gbk
 - georgianacademy
 - georgianps
 - greek
 - greek8
 - hebrew
 - hebrew8
 - hex
 - hproman8
 - ibm1046
 - ibm1051
 - ibm1124
 - ibm1125
 - ibm1129
 - ibm1133
 - ibm1161
 - ibm1162
 - ibm1163
 - ibm1168
 - ibm367
 - ibm437
 - ibm737
 - ibm775
 - ibm808
 - ibm819
 - ibm850
 - ibm852
 - ibm855
 - ibm856
 - ibm857
 - ibm858
 - ibm860
 - ibm861
 - ibm862
 - ibm863
 - ibm864
 - ibm865
 - ibm866
 - ibm869
 - ibm878
 - ibm922
 - iso-2022-jp
 - iso-2022-jp-1
 - iso-8859-1
 - iso-8859-11
 - iso-8859-15
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
 - iso2022jp
 - iso646.irv
 - iso646cn
 - iso646jp
 - iso646us
 - iso8859-1
 - iso8859-11
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
 - iso885916
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
 - isoceltic
 - isoir100
 - isoir101
 - isoir109
 - isoir110
 - isoir126
 - isoir127
 - isoir138
 - isoir14
 - isoir144
 - isoir148
 - isoir149
 - isoir157
 - isoir166
 - isoir179
 - isoir199
 - isoir203
 - isoir226
 - isoir57
 - isoir58
 - isoir6
 - jis
 - jisc62201969ro
 - jp
 - koi
 - koi8
 - koi8-r
 - koi8_r
 - koi8r
 - koi8ru
 - koi8t
 - koi8u
 - korean
 - ksc5601
 - ksc56011987
 - ksc56011989
 - l1
 - l10
 - l2
 - l3
 - l4
 - l5
 - l6
 - l7
 - l8
 - l9
 - latin1
 - latin10
 - latin2
 - latin3
 - latin4
 - latin5
 - latin6
 - latin7
 - latin8
 - latin9
 - logical
 - mac
 - maccenteuro
 - maccroatian
 - maccyrillic
 - macgreek
 - maciceland
 - macintosh
 - macroman
 - macromania
 - macthai
 - macturkish
 - macukraine
 - msansi
 - msarab
 - mscyrl
 - msee
 - msgreek
 - mshebr
 - mskanji
 - msturk
 - pt154
 - r8
 - rk1048
 - roman8
 - shift_jis
 - shiftjis
 - sjis
 - strk10482002
 - sun_eu_greek
 - tcvn
 - tcvn5712
 - tcvn57121
 - thai
 - thai8
 - tis-620
 - tis620
 - tis620.25291
 - tis620.25330
 - tis6200
 - turkish
 - turkish8
 - ucs-2
 - ucs2
 - unicode
 - unicode11utf8
 - us
 - us-ascii
 - usascii
 - utf-16le
 - utf16
 - utf16be
 - utf16le
 - utf7
 - utf7imap
 - utf8
 - viscii
 - visual
 - win1250
 - win1251
 - win1252
 - win1253
 - win1254
 - win1255
 - win1256
 - win1257
 - win1258
 - win874
 - winbaltrim
 - windows-1250
 - windows-1251
 - windows-1252
 - windows-1253
 - windows-1254
 - windows-1255
 - windows-1256
 - windows-1257
 - windows-1258
 - windows-31j
 - windows-874
 - windows1250
 - windows1251
 - windows1252
 - windows1253
 - windows1254
 - windows1255
 - windows1256
 - windows1257
 - windows1258
 - windows874
 - windows932
 - windows936
 - windows949
 - windows950
 - x-cp1250
 - x-cp1251
 - x-cp1252
 - x-cp1253
 - x-cp1254
 - x-cp1255
 - x-cp1256
 - x-cp1257
 - x-cp1258
 - x-mac-cyrillic
 - x-mac-roman
 - x-mac-ukrainian
 - x-sjis
 - xgbk
 - xroman8
 - xxbig5

## License

  MIT
