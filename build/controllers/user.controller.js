"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dependency = require("../dependency");

var countUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var count;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _dependency.userService.count(req.body.dataRequestOptions);

          case 3:
            count = _context.sent;
            res.status(200).json(count);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(200).json({
              ERROR: _context.t0.stack
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function countUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _dependency.userService.find(req.body.dataRequestOptions);

          case 3:
            users = _context2.sent;
            res.status(200).json({
              total_records: users.total_records,
              users: users.records
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(200).json({
              ERROR: _context2.t0.stack
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function findUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findUsersOrdesDetails = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _dependency.userService.findUsersOrdesDetails(req.params.userId);

          case 3:
            result = _context3.sent;
            res.status(200).json(result);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(200).json({
              ERROR: _context3.t0.stack
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function findUsersOrdesDetails(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var findUserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _dependency.userService.findById(req.params.userId, 'user_id');

          case 3:
            user = _context4.sent;
            res.status(200).json({
              user: user
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(200).json({
              ERROR: _context4.t0.stack
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function findUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var createUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _dependency.userService.create(req.body);

          case 3:
            data = _context5.sent;
            res.status(200).json(data);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(200).json({
              ERROR: _context5.t0.stack
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function createUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var updateUserById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _dependency.userService.updateById(req.params.userId, 'user_id', req.body);

          case 3:
            user = _context6.sent;
            res.status(200).json({
              user: user
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            res.status(200).json({
              ERROR: _context6.t0.stack
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function updateUserById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var deleteUserById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var deletedId;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _dependency.userService.deleteById(req.params.userId, 'user_id');

          case 3:
            deletedId = _context7.sent;
            res.status(200).json(deletedId);
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            res.status(200).json({
              ERROR: _context7.t0.stack
            });

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function deleteUserById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var signInUser = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var token;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _dependency.userService.signInUser(req.body);

          case 3:
            token = _context8.sent;
            res.status(200).json(token);
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            res.status(200).json({
              ERROR: _context8.t0.stack
            });

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function signInUser(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}(); // POST /resources create
// GET /resources/count count where
// GET /resources find filter
// GET /resources/{id} findById
// PATCH /resources updateAll where
// PATCH /resources/{id} updateById
// PUT /resources/{id} replaceById
// DELETE /resources/{id} deleteById


var userController = {
  countUsers: countUsers,
  findUsers: findUsers,
  findUsersOrdesDetails: findUsersOrdesDetails,
  findUserById: findUserById,
  createUser: createUser,
  updateUserById: updateUserById,
  deleteUserById: deleteUserById,
  signInUser: signInUser
};
exports.userController = userController;