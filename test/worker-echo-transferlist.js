'use strict';

var encoder = new (require('text-encoding').TextEncoder)('utf-8');
var decoder = new (require('text-encoding').TextDecoder)('utf-8');

var register = require('../register');

register(function (msg, withTransferList) {

  var str = decoder.decode(msg);
  var array = encoder.encode(str); 

  return withTransferList(array, [array]); 
});