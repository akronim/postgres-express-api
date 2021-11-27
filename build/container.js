"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Container = /*#__PURE__*/function () {
  function Container() {
    (0, _classCallCheck2["default"])(this, Container);
    this.services = {};
  }

  (0, _createClass2["default"])(Container, [{
    key: "service",
    value: function service(name, cb) {
      var _this = this;

      Object.defineProperty(this, name, {
        get: function get() {
          if (!_this.services.hasOwnProperty(name)) {
            _this.services[name] = cb(_this);
          }

          return _this.services[name];
        },
        configurable: true,
        enumerable: true
      });
      return this;
    }
  }]);
  return Container;
}();

var _default = Container;
exports["default"] = _default;