/* eslint-disable */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bricks = require('bricks.js');

var _bricks2 = _interopRequireDefault(_bricks);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasonryInfiniteScroller = (_temp2 = _class = function (_Component) {
  _inherits(MasonryInfiniteScroller, _Component);

  function MasonryInfiniteScroller() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MasonryInfiniteScroller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MasonryInfiniteScroller.__proto__ || Object.getPrototypeOf(MasonryInfiniteScroller)).call.apply(_ref, [this].concat(args))), _this), _this.setContainerRef = function (component) {
      _this.masonryContainer = component;
    }, _this.forcePack = function () {
      if (_this.masonryContainer) {
        _this.state.instance.pack();
      }
    }, _this.forceUpdate = function () {
      if (_this.masonryContainer) {
        _this.state.instance.update();
      }
    }, _this.createNewInstance = function () {
      var _this$props = _this.props,
          packed = _this$props.packed,
          sizes = _this$props.sizes,
          children = _this$props.children,
          position = _this$props.position;

      var instance = (0, _bricks2.default)({
        container: _this.masonryContainer,
        packed: packed,
        sizes: sizes,
        position: position
      });

      instance.resize(false);

      if (children.length > 0) {
        instance.pack();
      }

      _this.setState(function () {
        return { instance: instance };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MasonryInfiniteScroller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createNewInstance();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var children = this.props.children;
      var instance = this.state.instance;


      if (prevProps.children.length === 0 && children.length === 0) {
        return;
      }

      if (prevProps.children.length === 0 && children.length > 0) {
        return instance.pack();
      }

      if (prevProps.children.length !== children.length) {
        if (this.props.pack) {
          return instance.pack();
        } else {
          return instance.update();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state) {
        this.state.instance.resize(false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          // pack = _props.pack,
          // packed = _props.packed,
          // position = _props.position,
          // sizes = _props.sizes,
          props = _objectWithoutProperties(_props, ['children', 'className', 'style', 'pack', 'packed', 'position', 'sizes']);

      return _react2.default.createElement(
        _reactInfiniteScroller2.default,
        props,
        _react2.default.createElement(
          'div',
          { ref: this.setContainerRef, className: className, style: style },
          children
        )
      );
    }
  }]);

  return MasonryInfiniteScroller;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  className: _propTypes2.default.string,
  initialLoad: _propTypes2.default.bool,
  pack: _propTypes2.default.bool,
  packed: _propTypes2.default.string,
  position: _propTypes2.default.bool,
  sizes: _propTypes2.default.array,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  className: '',
  initialLoad: true,
  pack: false,
  packed: 'data-packed',
  position: true,
  sizes: [{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 3, gutter: 20 }],
  style: {}
}, _temp2);
exports.default = MasonryInfiniteScroller;