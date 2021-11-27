"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verifyAuth = require("./verifyAuth");

Object.keys(_verifyAuth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _verifyAuth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _verifyAuth[key];
    }
  });
});