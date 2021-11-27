"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserService = exports.getUserRepository = exports.userService = exports.userRepository = void 0;

var _model = _interopRequireDefault(require("./models/model"));

var _user = _interopRequireDefault(require("./repositories/user.repository"));

var _user2 = _interopRequireDefault(require("./services/user.service"));

var userModel = new _model["default"]('users');
var userRepository = new _user["default"](userModel);
exports.userRepository = userRepository;
var userService = new _user2["default"](userRepository);
exports.userService = userService;

var getUserRepository = function getUserRepository() {
  return new _user["default"](new _model["default"]('users'));
};

exports.getUserRepository = getUserRepository;

var getUserService = function getUserService() {
  return new _user2["default"](new _user["default"](new _model["default"]('users')));
};

exports.getUserService = getUserService;