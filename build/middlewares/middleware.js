"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performAsyncAction = exports.requireJsonContent = exports.loggerMiddleware = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var loggerMiddleware = function loggerMiddleware(req, res, next) {
  console.log(req.protocol);
  console.log(req.hostname);
  console.log(req.path);
  console.log(req.originalUrl);
  console.log(req.subdomains);
  console.log(req.method);
  console.log(req.url);
  console.log(req.header('Content-Type'));
  console.log(req.header('user-agent'));
  console.log(req.header('Authorization'));
  next();
};

exports.loggerMiddleware = loggerMiddleware;

var requireJsonContent = function requireJsonContent(req, res, next) {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400).send('Server requires application/json');
  } else {
    next();
  }
};

exports.requireJsonContent = requireJsonContent;

var performAsyncAction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].get('https://picsum.photos/id/0/info');

          case 3:
            next();
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function performAsyncAction(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.performAsyncAction = performAsyncAction;