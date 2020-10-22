"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _type = require("../type");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  todos: []
}; // ... Spread 연산자는 결합을 쉽게 할 수 있는 장점이 있다.
// 쉽게 UpSert(Update + inSert)라고 보면 된다.
// 이름이 같은 것이 있다면 덮어쓰고, 없다면 추가한다.

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type.CREATE_TODO:
      return _objectSpread({}, state, {
        todos: [].concat(_toConsumableArray(state.todos), [action.payload]) // 여기서는 [todos]배열에 payloaDELETE_TODOd로 받은 값을 추가한다.

      });
    // case READ_TODO:
    //    return {
    //       state,
    //    };

    case _type.UPDATE_TODO:
      return _objectSpread({}, state, {
        todos: state.todos.map(function (todo) {
          return todo.id === action.payload.id ? action.payload : todo;
        })
      });

    case _type.DELETE_TODO:
      return _objectSpread({}, state, {
        todos: state.todos.filter(function (todo) {
          return todo.id !== action.payload;
        })
      });

    default:
      return state;
  }
};

exports["default"] = _default;