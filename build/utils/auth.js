"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAccessToken = exports.comparePassword = exports.hashPassword = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _settings = require("../settings");

/**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
var saltRounds = 10;

var salt = _bcryptjs["default"].genSaltSync(saltRounds);

var hashPassword = function hashPassword(password) {
  return _bcryptjs["default"].hashSync(password, salt);
};
/**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */


exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(hashedPassword, password) {
  return _bcryptjs["default"].compareSync(password, hashedPassword);
};
/**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */


exports.comparePassword = comparePassword;

var generateAccessToken = function generateAccessToken(user) {
  var token = _jsonwebtoken["default"].sign({
    email: user.email,
    user_id: user.user_id,
    is_admin: user.is_admin,
    first_name: user.first_name,
    last_name: user.last_name
  }, _settings.TOKEN_SECRET, {
    expiresIn: '3d'
  });

  return token;
};

exports.generateAccessToken = generateAccessToken;