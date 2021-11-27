"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateJWT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

/* eslint-disable consistent-return */
_dotenv["default"].config();

var authenticateJWT = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authHeader, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authHeader = req.headers.authorization;

            if (authHeader) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.sendStatus(401));

          case 3:
            token = authHeader && authHeader.split(' ')[1];

            if (token) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.sendStatus(401));

          case 6:
            _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET, function (err, user) {
              if (err) return res.sendStatus(403);
              req.user = user;
              next();
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authenticateJWT(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.authenticateJWT = authenticateJWT;