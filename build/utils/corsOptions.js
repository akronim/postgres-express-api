"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsOptions = void 0;
// whitelist
var whitelist = ['http://localhost:3000'];
var corsOptions = {
  origin: function origin(_origin, callback) {
    if (whitelist.indexOf(_origin) !== -1 || !_origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
exports.corsOptions = corsOptions;