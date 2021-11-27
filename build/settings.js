"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKEN_SECRET = exports.TEST_DBCS = exports.DBCS = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _process$env = process.env,
    DBCS = _process$env.DBCS,
    TEST_DBCS = _process$env.TEST_DBCS,
    TOKEN_SECRET = _process$env.TOKEN_SECRET;
exports.TOKEN_SECRET = TOKEN_SECRET;
exports.TEST_DBCS = TEST_DBCS;
exports.DBCS = DBCS;