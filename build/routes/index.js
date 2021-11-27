"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _homeRoute = require("./homeRoute");

Object.keys(_homeRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _homeRoute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _homeRoute[key];
    }
  });
});

var _userRoute = require("./userRoute");

Object.keys(_userRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userRoute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userRoute[key];
    }
  });
});