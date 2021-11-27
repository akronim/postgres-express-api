"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _validations = require("../utils/validations");

var _auth = require("../utils/auth");

/* eslint-disable class-methods-use-this */
var UserService = /*#__PURE__*/function () {
  function UserService(userRepository) {
    (0, _classCallCheck2["default"])(this, UserService);

    if (!userRepository) {
      throw new Error('No userRepository provided to UserService!');
    }

    this.userRepository = userRepository;
  }

  (0, _createClass2["default"])(UserService, [{
    key: "count",
    value: function () {
      var _count = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.userRepository.count(options));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function count(_x) {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(options) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.userRepository.find(options));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function find(_x2) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "findUsersOrdesDetails",
    value: function () {
      var _findUsersOrdesDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(idValue) {
        var query, data, ordersItems, _loop, i;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "\n    SELECT orders.order_id, orders.total_price, orders_items.item_id, orders_items.quantity, items.name, items.unit_price  \n    FROM orders \n    JOIN users USING (user_id) \n    JOIN orders_items USING (order_id) \n    JOIN items USING (item_id)  \n    WHERE user_id=$1;";
                _context3.next = 3;
                return this.userRepository.executeRawQuery(query, [idValue]);

              case 3:
                data = _context3.sent;
                ordersItems = [];

                _loop = function _loop(i) {
                  var order = data.rows[i];
                  var o = ordersItems.find(function (x) {
                    return x.order_id === order.order_id;
                  });

                  if (!o) {
                    ordersItems.push({
                      order_id: order.order_id,
                      total_price: order.total_price,
                      items: [{
                        item_id: order.item_id,
                        quantity: order.quantity,
                        name: order.name,
                        unit_price: order.unit_price
                      }]
                    });
                  } else {
                    o.items.push({
                      item_id: order.item_id,
                      quantity: order.quantity,
                      name: order.name,
                      unit_price: order.unit_price
                    });
                  }
                };

                for (i = 0; i < data.rows.length; i += 1) {
                  _loop(i);
                }

                return _context3.abrupt("return", {
                  user_orders_items: ordersItems
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findUsersOrdesDetails(_x3) {
        return _findUsersOrdesDetails.apply(this, arguments);
      }

      return findUsersOrdesDetails;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(idValue, idColumn) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.userRepository.findById(idValue, idColumn));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findById(_x4, _x5) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "validateCreate",
    value: function validateCreate(user) {
      var email = user.email,
          password = user.password;
      var messages = [];

      if (!user) {
        messages.push('No object is provided');
        this.throwValidationError(messages);
      }

      if (Object.keys(user).length === 0) {
        messages.push('Empty object');
        this.throwValidationError(messages);
      }

      var required1 = ['email', 'password', 'first_name', 'last_name'];
      var required2 = Object.keys(user).filter(function (key) {
        return required1.includes(key);
      });

      if (required1.length !== required2.length) {
        messages.push('Required values not supplied');
        this.throwValidationError(messages);
      }

      Object.entries(user).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if ((0, _validations.isEmpty)(value)) {
          messages.push("No value for: ".concat(key));
        }
      });
      this.throwValidationError(messages);

      if (!(0, _validations.isValidEmail)(email)) {
        messages.push('Invalid email');
      }

      if (!(0, _validations.validatePassword)(password)) {
        messages.push('Invalid password');
      }

      this.throwValidationError(messages);
    }
  }, {
    key: "throwValidationError",
    value: function throwValidationError(messages) {
      if (messages.length) {
        var error = new Error(messages.join(', '));
        error.statusCode = 400;
        throw error;
      }
    }
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
        var createdUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.validateCreate(user);
                user.password = (0, _auth.hashPassword)(user.password);
                _context5.next = 4;
                return this.userRepository.create(user);

              case 4:
                createdUser = _context5.sent[0];
                return _context5.abrupt("return", {
                  user: createdUser
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function create(_x6) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(idValue, idColumn, entity) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.userRepository.updateById(idValue, idColumn, entity));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateById(_x7, _x8, _x9) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(idValue, idColumn) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.userRepository.deleteById(idValue, idColumn));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function deleteById(_x10, _x11) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "executeRawQuery",
    value: function () {
      var _executeRawQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(query, values) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.userRepository.executeRawQuery(query, values));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function executeRawQuery(_x12, _x13) {
        return _executeRawQuery.apply(this, arguments);
      }

      return executeRawQuery;
    }()
  }, {
    key: "signInUser",
    value: function () {
      var _signInUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(options) {
        var token, email, password, query, response, user;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                token = null;
                email = options.email, password = options.password;

                if ((0, _validations.isEmpty)(email) || (0, _validations.isEmpty)(password)) {
                  this.throwValidationError(['Invalid email and/or password']);
                }

                query = 'SELECT * FROM users WHERE email=$1';
                _context9.next = 6;
                return this.userRepository.executeRawQuery(query, [email]);

              case 6:
                response = _context9.sent;
                user = response.rows[0];

                if (!user) {
                  this.throwValidationError(['Invalid email and/or password']);
                }

                if (user) {
                  if (!(0, _auth.comparePassword)(user.password, password)) {
                    this.throwValidationError(['Invalid email and/or password']);
                  }

                  token = (0, _auth.generateAccessToken)(user);
                }

                return _context9.abrupt("return", {
                  token: token
                });

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function signInUser(_x14) {
        return _signInUser.apply(this, arguments);
      }

      return signInUser;
    }()
  }]);
  return UserService;
}();

var _default = UserService;
exports["default"] = _default;