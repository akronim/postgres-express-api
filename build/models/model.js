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

var _pool = require("./pool");

var Model = /*#__PURE__*/function () {
  function Model(table) {
    (0, _classCallCheck2["default"])(this, Model);
    this.pool = _pool.pool;
    this.table = table;
    this.pool.on('error', function (err, client) {
      return "Error, ".concat(err, ", on idle client").concat(client);
    });
  }

  (0, _createClass2["default"])(Model, [{
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(columns, clause, filterArgs) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "SELECT ".concat(columns, " FROM ").concat(this.table, " ");

                if (!(clause && filterArgs)) {
                  _context.next = 4;
                  break;
                }

                query += clause;
                return _context.abrupt("return", this.pool.query(query, filterArgs));

              case 4:
                if (clause && !filterArgs) {
                  query += clause;
                }

                return _context.abrupt("return", this.pool.query(query));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function select(_x, _x2, _x3) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
  }, {
    key: "insertWithReturn",
    value: function () {
      var _insertWithReturn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(columns, placeholders, values) {
        var query;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "\n          INSERT INTO ".concat(this.table, " (").concat(columns, ")\n          VALUES (").concat(placeholders, ")\n          RETURNING *\n      ");
                return _context2.abrupt("return", this.pool.query(query, values));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function insertWithReturn(_x4, _x5, _x6) {
        return _insertWithReturn.apply(this, arguments);
      }

      return insertWithReturn;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(placeholders, where, values) {
        var query;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "UPDATE ".concat(this.table, " SET ").concat(placeholders, " WHERE ").concat(where, " returning *");
                return _context3.abrupt("return", this.pool.query(query, values));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateById(_x7, _x8, _x9) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(where, values, idColumn) {
        var query;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "DELETE FROM ".concat(this.table, " WHERE ").concat(where, " returning ").concat(idColumn);
                return _context4.abrupt("return", this.pool.query(query, values));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteById(_x10, _x11, _x12) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
    /**
     * DB Query
     * @param {object} query
     * @param {array} params
     * @returns {object} object
     */

  }, {
    key: "query",
    value: function query(_query, params) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.pool.query(_query, params).then(function (res) {
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }]);
  return Model;
}();

var _default = Model;
exports["default"] = _default;