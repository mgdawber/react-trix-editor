"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("trix");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactTrixEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactTrixEditor, _Component);

  function ReactTrixEditor() {
    var _this;

    _this = _Component.call(this) || this;
    _this.id = Math.random().toString(36);
    _this.updateStateValue = _this.updateStateValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ReactTrixEditor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Provide editor to callback on initialisation
    document.getElementById(this.id).addEventListener('trix-initialize', function () {
      _this2.editor = document.getElementById(_this2.id).editor;

      if (_this2.props.onEditor) {
        // Pass the editor & node
        _this2.props.onEditor(_this2.editor, document.getElementById(_this2.id));
      }
    });
    document.getElementById(this.id).addEventListener('trix-change', function (e) {
      return _this2.updateStateValue(e);
    });
  };

  _proto.updateStateValue = function updateStateValue(e) {
    var value = e.target.value;
    this.props.onChange(value);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        input = _this$props.input,
        initialValue = _this$props.initialValue,
        placeholder = _this$props.placeholder,
        autofocus = _this$props.autofocus;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
      id: input,
      value: initialValue,
      type: "hidden",
      name: "content"
    }), /*#__PURE__*/_react["default"].createElement("trix-editor", {
      id: this.id,
      input: input,
      placeholder: placeholder,
      autofocus: autofocus
    }));
  };

  return ReactTrixEditor;
}(_react.Component);

_defineProperty(ReactTrixEditor, "defaultProps", {
  autofocus: false,
  input: 'react-trix-editor',
  placeholder: 'Enter text here...'
});

ReactTrixEditor.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes["default"].func.isRequired,
  onEditor: _propTypes["default"].func,
  autofocus: _propTypes["default"].bool,
  input: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  initialValue: _propTypes["default"].string
} : {};
var _default = ReactTrixEditor;
exports["default"] = _default;
module.exports = exports.default;