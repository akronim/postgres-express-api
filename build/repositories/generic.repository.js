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

var _queryHelper = require("../db/queryHelper");

var GenericRepository = /*#__PURE__*/function () {
  function GenericRepository(model) {
    (0, _classCallCheck2["default"])(this, GenericRepository);

    if (!model) {
      throw new Error('No model provided to GenericRepository!');
    }

    this.model = model;
  }

  (0, _createClass2["default"])(GenericRepository, [{
    key: "count",
    value: function () {
      var _count = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
        var totalCount, query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                totalCount = null;
                query = null;

                if (options) {
                  query = (0, _queryHelper.buildFilterQuery)(options);
                }

                if (!query) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return this.model.select(' COUNT(*) as total_records ', query);

              case 6:
                totalCount = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return this.model.select('COUNT(*) as total_records ');

              case 11:
                totalCount = _context.sent;

              case 12:
                totalCount.rows[0].total_records = Number(totalCount.rows[0].total_records);
                return _context.abrupt("return", totalCount.rows.shift());

              case 14:
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
        var data, query, totalRecords, records;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = null;
                query = null;

                if (options) {
                  query = (0, _queryHelper.buildFindQuery)(options);
                }

                if (!query) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return this.model.select('*', query);

              case 6:
                data = _context2.sent;
                _context2.next = 12;
                break;

              case 9:
                _context2.next = 11;
                return this.model.select('*');

              case 11:
                data = _context2.sent;

              case 12:
                _context2.next = 14;
                return this.count(options);

              case 14:
                totalRecords = _context2.sent;
                records = data.rows;
                data = {
                  totalRecords: totalRecords,
                  records: records
                };
                return _context2.abrupt("return", data);

              case 18:
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
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(idValue, idColumn) {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.model.select('*', " WHERE ".concat(idColumn, " = $1 "), [parseInt(idValue, 10)]);

              case 2:
                data = _context3.sent;
                return _context3.abrupt("return", data.rows[0]);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findById(_x3, _x4) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(entity) {
        var columns, placeholders, values, data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                columns = [];
                placeholders = [];
                values = [];
                Object.entries(entity).forEach(function (_ref, index) {
                  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                      key = _ref2[0],
                      value = _ref2[1];

                  columns.push(key);
                  placeholders.push(" $".concat(index + 1, " "));
                  values.push(value);
                });
                columns = columns.join();
                placeholders = placeholders.join();
                _context4.next = 8;
                return this.model.insertWithReturn(columns, placeholders, values);

              case 8:
                data = _context4.sent;
                return _context4.abrupt("return", data.rows);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function create(_x5) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(idValue, idColumn, entity) {
        var recordToUpdate, placeholders, values, idIndex, data;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                recordToUpdate = this.findById(idValue, idColumn);

                if (recordToUpdate) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", null);

              case 3:
                placeholders = [];
                values = [];
                Object.entries(entity).forEach(function (_ref3, index) {
                  var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  placeholders.push(" ".concat(key, "=$").concat(index + 1, " "));
                  values.push(value);
                });
                placeholders = placeholders.join();
                values.push(parseInt(idValue, 10));
                idIndex = values.length;
                _context5.next = 11;
                return this.model.updateById(placeholders, " ".concat(idColumn, "=$").concat(idIndex, " "), values);

              case 11:
                data = _context5.sent;
                return _context5.abrupt("return", data.rows[0]);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateById(_x6, _x7, _x8) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(idValue, idColumn) {
        var recordToDelete, data;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                recordToDelete = this.findById(idValue, idColumn);

                if (recordToDelete) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return", null);

              case 3:
                _context6.next = 5;
                return this.model.deleteById(" ".concat(idColumn, "=$1 "), [parseInt(idValue, 10)], idColumn);

              case 5:
                data = _context6.sent;
                return _context6.abrupt("return", {
                  deletedId: data.rows[0][idColumn]
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteById(_x9, _x10) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "executeRawQuery",
    value: function () {
      var _executeRawQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(query, values) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.model.query(query, values));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function executeRawQuery(_x11, _x12) {
        return _executeRawQuery.apply(this, arguments);
      }

      return executeRawQuery;
    }()
  }]);
  return GenericRepository;
}();

var _default = GenericRepository;
exports["default"] = _default;