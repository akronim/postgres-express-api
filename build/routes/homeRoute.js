"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var homeRouter = _express["default"].Router();

exports.homeRouter = homeRouter;
homeRouter.get('/', _controllers.indexPage);