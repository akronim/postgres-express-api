"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = exports.validatePassword = exports.isValidEmail = void 0;

/**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
var isValidEmail = function isValidEmail(email) {
  var regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};
/**
   * validatePassword helper method
   * @param {string} password
   * @returns {Boolean} True or False
   */


exports.isValidEmail = isValidEmail;

var validatePassword = function validatePassword(password) {
  if (password.length <= 5 || password === '') {
    return false;
  }

  return true;
};
/**
   * isEmpty helper method
   * @param {string, integer} input
   * @returns {Boolean} True or False
   */


exports.validatePassword = validatePassword;

var isEmpty = function isEmpty(input) {
  if (input === undefined || input === '') {
    return true;
  }

  return false;
};

exports.isEmpty = isEmpty;