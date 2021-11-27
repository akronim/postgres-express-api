"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertIntoTables = exports.createTables = exports.installExtensions = exports.dropExtensions = exports.dropTables = exports.executeQueryArray = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pool = require("../models/pool");

var _userQueries = require("./queries/userQueries");

var _itemQueries = require("./queries/itemQueries");

var _orderQueries = require("./queries/orderQueries");

var _orderItemQueries = require("./queries/orderItemQueries");

var _extensionQueries = require("./queries/extensionQueries");

var executeQueryArray = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(arr) {
    var i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < arr.length)) {
              _context.next = 16;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return _pool.pool.query(arr[i]);

          case 5:
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            console.log(">>>>>>>>>> ".concat(JSON.stringify(_context.t0.message)));
            console.log(">>>>>>>>>> ".concat(JSON.stringify(_context.t0.detail)));
            console.log(">>>>>>>>>> ".concat(JSON.stringify(_context.t0.line)));
            console.log(">>>>>>>>>> ".concat(JSON.stringify(_context.t0.stack)));

          case 13:
            i += 1;
            _context.next = 1;
            break;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));

  return function executeQueryArray(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.executeQueryArray = executeQueryArray;

var dropTables = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return executeQueryArray([_orderItemQueries.dropOrdersItemsTableQuery, _orderQueries.dropOrdersTableQuery, _userQueries.dropUsersTableQuery, _itemQueries.dropItemsTableQuery]);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dropTables() {
    return _ref2.apply(this, arguments);
  };
}();

exports.dropTables = dropTables;

var dropExtensions = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return executeQueryArray([_extensionQueries.dropUuidOsspQuery]);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function dropExtensions() {
    return _ref3.apply(this, arguments);
  };
}();

exports.dropExtensions = dropExtensions;

var installExtensions = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return executeQueryArray([_extensionQueries.enableUuidOsspQuery]);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function installExtensions() {
    return _ref4.apply(this, arguments);
  };
}();

exports.installExtensions = installExtensions;

var createTables = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return executeQueryArray([_userQueries.createUsersTableQuery, _itemQueries.createItemsTableQuery, _orderQueries.createOrdersTableQuery, _orderItemQueries.createOrdersItemsTableQuery]);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createTables() {
    return _ref5.apply(this, arguments);
  };
}();

exports.createTables = createTables;

var insertIntoTables = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return executeQueryArray([_userQueries.seedUsersTableQuery, _itemQueries.seedItemsTableQuery, _orderQueries.seedOrdersTableQuery, _orderItemQueries.seedOrdersItemsTableQuery]);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function insertIntoTables() {
    return _ref6.apply(this, arguments);
  };
}();

exports.insertIntoTables = insertIntoTables;