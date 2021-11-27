"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _queryFunctions = require("./queryFunctions");

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _queryFunctions.dropTables)();

        case 2:
          _context.next = 4;
          return (0, _queryFunctions.dropExtensions)();

        case 4:
          _context.next = 6;
          return (0, _queryFunctions.installExtensions)();

        case 6:
          _context.next = 8;
          return (0, _queryFunctions.createTables)();

        case 8:
          _context.next = 10;
          return (0, _queryFunctions.insertIntoTables)();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();