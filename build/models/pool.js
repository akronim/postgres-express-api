"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _settings = require("../settings");

_dotenv["default"].config();

var connectionString = process.env.NODE_ENV === 'test' ? _settings.TEST_DBCS : _settings.DBCS;
var pool = new _pg.Pool({
  connectionString: connectionString
});
exports.pool = pool;