"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFindQuery = exports.buildPaginationQuery = exports.buildSortQuery = exports.buildFilterQuery = exports.buildCondition = void 0;

var buildCondition = function buildCondition(_ref) {
  var column = _ref.column,
      columnDataType = _ref.columnDataType,
      operation = _ref.operation,
      filterValue = _ref.filterValue;
  var value = filterValue;
  var op = null;
  var condition = null;
  var booleanOperations = {
    equals: " = '".concat(value, "' ")
  };
  var numbersOperations = {
    equals: " = '".concat(value, "' "),
    greater: " > '".concat(value, "' "),
    less: " < '".concat(value, "' "),
    greaterOrEqual: " >= '".concat(value, "' "),
    lessOrEqual: " <= '".concat(value, "' ")
  };
  var datesOperations = {
    equals: " = '".concat(value, "'::date "),
    greater: " > '".concat(value, "'::date "),
    less: " < '".concat(value, "'::date "),
    greaterOrEqual: " >= '".concat(value, "'::date "),
    lessOrEqual: " <= '".concat(value, "'::date ")
  };
  var textOperations = {
    contains: " LIKE '%".concat(value, "%' "),
    startsWith: " LIKE '".concat(value, "%' "),
    endsWith: " LIKE '%".concat(value, "' "),
    equals: " = '".concat(value, "' ")
  };

  if (columnDataType === 'text') {
    value = filterValue.trim().toLowerCase();
    op = textOperations[operation];

    if (op) {
      condition = " LOWER(".concat(column, ") ").concat(op, " ");
    }
  }

  if (columnDataType === 'date') {
    op = datesOperations[operation];

    if (op) {
      condition = " (".concat(column, ") ").concat(op, " ");
    }
  }

  if (columnDataType === 'number') {
    op = numbersOperations[operation];

    if (op) {
      condition = " (".concat(column, ") ").concat(op, " ");
    }
  }

  if (columnDataType === 'boolean') {
    op = booleanOperations[operation];

    if (op) {
      condition = " (".concat(column, ") ").concat(op, " ");
    }
  }

  return condition;
};

exports.buildCondition = buildCondition;

var buildFilterQuery = function buildFilterQuery(options) {
  var filterQuery = null;

  if (options.where) {
    var conditions = [];
    options.where.forEach(function (filter) {
      var condition = buildCondition(filter);

      if (condition) {
        conditions.push(condition);
      }
    });

    if (conditions.length > 0) {
      filterQuery = " WHERE ".concat(conditions.join(' AND '));
    }
  }

  return filterQuery;
};

exports.buildFilterQuery = buildFilterQuery;

var buildSortQuery = function buildSortQuery(options) {
  var sortQuery = null;

  if (options.sort) {
    var _options$sort = options.sort,
        column = _options$sort.column,
        direction = _options$sort.direction;
    sortQuery = " ORDER BY ".concat(column, " ").concat(direction, " ");
  }

  return sortQuery;
};

exports.buildSortQuery = buildSortQuery;

var getOffset = function getOffset() {
  var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var listPerPage = arguments.length > 1 ? arguments[1] : undefined;
  return (currentPage - 1) * [listPerPage];
};

var buildPaginationQuery = function buildPaginationQuery(options) {
  var paginationQuery = null;

  if (options.pagination) {
    var _options$pagination = options.pagination,
        page = _options$pagination.page,
        perPage = _options$pagination.perPage;
    var offset = getOffset(page, perPage);
    paginationQuery = " OFFSET ".concat(offset, " LIMIT ").concat(perPage, " ");
  }

  return paginationQuery;
};

exports.buildPaginationQuery = buildPaginationQuery;

var buildFindQuery = function buildFindQuery(options) {
  var query = null;

  if (options) {
    var filterQuery = buildFilterQuery(options);
    var sortQuery = buildSortQuery(options);
    var paginationQuery = buildPaginationQuery(options);

    if (filterQuery) {
      query = filterQuery;
    }

    if (sortQuery) {
      query = query ? " ".concat(query, " ").concat(sortQuery, " ") : sortQuery;
    }

    if (paginationQuery) {
      query = query ? " ".concat(query, " ").concat(paginationQuery, " ") : paginationQuery;
    }
  }

  return query;
};

exports.buildFindQuery = buildFindQuery;