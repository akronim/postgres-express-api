"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var _middlewares = require("../middlewares");

var router = _express["default"].Router();

exports.userRouter = router;
router.get('/users/count', _middlewares.authenticateJWT, _controllers.userController.countUsers);
router.get('/users', _controllers.userController.findUsers);
router.get('/users/:userId', _controllers.userController.findUserById);
router.get('/users/:userId/orders-items', _controllers.userController.findUsersOrdesDetails);
router.post('/users', _controllers.userController.createUser);
router.patch('/users/:userId', _controllers.userController.updateUserById);
router["delete"]('/users/:userId', _controllers.userController.deleteUserById);
router.post('/users/login', _controllers.userController.signInUser);