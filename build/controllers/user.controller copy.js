"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UserController = /*#__PURE__*/function () {
  function UserController(userService) {
    (0, _classCallCheck2["default"])(this, UserController);
    this.userService = userService;
    console.log(this.userService);
  }

  (0, _createClass2["default"])(UserController, [{
    key: "countUsers",
    value: function () {
      var _countUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var count;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.userService.count(req.body.dataRequestOptions);

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
        }, _callee, this, [[0, 7]]);
      }));

      function countUsers(_x, _x2) {
        return _countUsers.apply(this, arguments);
      }

      return countUsers;
    }()
  }, {
    key: "findUsers",
    value: function () {
      var _findUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var users;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.userService.find(req.body.dataRequestOptions);

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
        }, _callee2, this, [[0, 7]]);
      }));

      function findUsers(_x3, _x4) {
        return _findUsers.apply(this, arguments);
      }

      return findUsers;
    }()
  }, {
    key: "findUserById",
    value: function () {
      var _findUserById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.userService.findById(req.params.userId, 'user_id');

              case 3:
                user = _context3.sent;
                res.status(200).json({
                  user: user
                });
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
        }, _callee3, this, [[0, 7]]);
      }));

      function findUserById(_x5, _x6) {
        return _findUserById.apply(this, arguments);
      }

      return findUserById;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.userService.create(req.body);

              case 3:
                data = _context4.sent;
                res.status(200).json({
                  users: data
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
        }, _callee4, this, [[0, 7]]);
      }));

      function createUser(_x7, _x8) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "updateUserById",
    value: function () {
      var _updateUserById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.userService.updateById(req.params.userId, 'user_id', req.body);

              case 3:
                user = _context5.sent;
                res.status(200).json({
                  user: user
                });
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
        }, _callee5, this, [[0, 7]]);
      }));

      function updateUserById(_x9, _x10) {
        return _updateUserById.apply(this, arguments);
      }

      return updateUserById;
    }()
  }, {
    key: "deleteUserById",
    value: function () {
      var _deleteUserById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var deletedId;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.userService.deleteById(req.params.userId, 'user_id');

              case 3:
                deletedId = _context6.sent;
                res.status(200).json(deletedId);
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
        }, _callee6, this, [[0, 7]]);
      }));

      function deleteUserById(_x11, _x12) {
        return _deleteUserById.apply(this, arguments);
      }

      return deleteUserById;
    }()
  }]);
  return UserController;
}();

var _default = UserController; // POST /resources create
// GET /resources/count count where
// GET /resources find filter
// GET /resources/{id} findById
// PATCH /resources updateAll where
// PATCH /resources/{id} updateById
// PUT /resources/{id} replaceById
// DELETE /resources/{id} deleteById
// export const userController = {
//   countUsers, findUsers, findUserById, createUser, updateUserById, deleteUserById
// };

exports["default"] = _default;