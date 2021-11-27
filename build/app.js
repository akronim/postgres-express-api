"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _routes = require("./routes");

var _corsOptions = require("./utils/corsOptions");

var app = (0, _express["default"])();

if (process.env.NODE_ENV !== 'test') {
  app.use((0, _morgan["default"])('dev'));
}

app.use((0, _helmet["default"])());
app.use((0, _cors["default"])(_corsOptions.corsOptions));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use('/api/v1', [_routes.homeRouter, _routes.userRouter]); // catch 404 and forward to error handler
// eslint-disable-next-line no-unused-vars

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404, '404'));
}); // error handler
// eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  res.status(400).json({
    error: err.message
  });
});
var _default = app;
exports["default"] = _default;