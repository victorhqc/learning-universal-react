/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(19);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(20);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _AdminsListPage = __webpack_require__(36);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _NotFoundPage = __webpack_require__(33);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _UsersListPage2.default, {
    path: '/users'
  }), _extends({}, _AdminsListPage2.default, {
    path: '/admins'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_CURRENT_USER_PENDING = exports.FETCH_CURRENT_USER_PENDING = 'FETCH_CURRENT_USER_PENDING';
var FETCH_CURRENT_USER_FULFILLED = exports.FETCH_CURRENT_USER_FULFILLED = 'FETCH_CURRENT_USER_FULFILLED';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS_PENDING = exports.FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
var FETCH_USERS_FULFILLED = exports.FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';
var FETCH_USERS_FAILED = exports.FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/compose");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var merge = exports.merge = function merge(nextState) {
  return function (state) {
    return _extends({}, state, nextState);
  };
};

var isFulfilled = exports.isFulfilled = function isFulfilled(state) {
  return _extends({}, state, {
    isFetching: false
  });
};

var isFetching = exports.isFetching = function isFetching(state) {
  return _extends({}, state, {
    isFetching: true
  });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(13);

var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(15);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(24);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(27);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    return _extends({}, opts, {
      headers: _extends({}, opts.headers, {
        'x-forwarded-host': 'localhost:3000'
      })
    });
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)({}, req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData && route.loadData(store);
  }).map(function (promise) {
    if (!promise) {
      return null;
    }

    return new Promise(function (resolve) {
      promise.then(resolve).catch(resolve);
    });
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)({ req: req, store: store, context: context });

    if (context.url) {
      res.redirect(301, context.url);
      return;
    }

    if (context.NotFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: Helvetica;\n'], ['\n  font-family: Helvetica;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterConfig = __webpack_require__(1);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

var _auth = __webpack_require__(18);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppWrapper = _styledComponents2.default.div(_templateObject);

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    AppWrapper,
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

App.propTypes = {
  route: _propTypes2.default.shape({
    routes: _propTypes2.default.array
  }).isRequired
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _auth2.default)());
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    margin-bottom: 20px;\n    background: #00a896;\n    padding: 10px;\n    box-shadow: 0 -1px 5px 0px #222;\n\n\n    a {\n        text-decoration: none;\n        color: white;\n    }\n'], ['\n    display: flex;\n    margin-bottom: 20px;\n    background: #00a896;\n    padding: 10px;\n    box-shadow: 0 -1px 5px 0px #222;\n\n\n    a {\n        text-decoration: none;\n        color: white;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    list-style: none;\n    text-decoration: none;\n    padding: 0;\n    margin: 0;\n'], ['\n    display: flex;\n    list-style: none;\n    text-decoration: none;\n    padding: 0;\n    margin: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin: 0 10px;\n'], ['\n    margin: 0 10px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavigationHeader = _styledComponents2.default.nav(_templateObject);

var NavigationList = _styledComponents2.default.ul(_templateObject2);

var NavigationItem = _styledComponents2.default.li(_templateObject3);

var Header = function Header(_ref) {
  var auth = _ref.auth;

  var authButton = auth.isAuthenticated ? _react2.default.createElement(
    'a',
    { href: '/api/logout' },
    'Logout'
  ) : _react2.default.createElement(
    'a',
    { href: '/api/auth/google' },
    'Login'
  );

  return _react2.default.createElement(
    NavigationHeader,
    { role: 'navigation' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      'Universal React'
    ),
    _react2.default.createElement(
      NavigationList,
      null,
      _react2.default.createElement(
        NavigationItem,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/users' },
          'Users'
        )
      ),
      _react2.default.createElement(
        NavigationItem,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admins' },
          'Admins'
        )
      ),
      _react2.default.createElement(
        NavigationItem,
        null,
        authButton
      )
    )
  );
};

Header.propTypes = {
  auth: _propTypes2.default.shape({
    isAuthenticated: _propTypes2.default.bool
  }).isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = __webpack_require__(7);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchCurrentUserPending = function fetchCurrentUserPending() {
  return {
    type: _auth.FETCH_CURRENT_USER_PENDING
  };
};

var fetchCurrentUserFulfilled = function fetchCurrentUserFulfilled(data) {
  return {
    type: _auth.FETCH_CURRENT_USER_FULFILLED,
    payload: data
  };
};

var fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(fetchCurrentUserPending());
              _context.next = 3;
              return api.get('/current_user');

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;


              dispatch(fetchCurrentUserFulfilled(data));

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = fetchCurrentUser;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 200px;\n  text-align: center;\n'], ['\n  margin-top: 200px;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomePageWrapper = _styledComponents2.default.div(_templateObject);

var HomePage = function HomePage() {
  return _react2.default.createElement(
    HomePageWrapper,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Welcome'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Check out these awesome features'
    )
  );
};

exports.default = {
  component: HomePage
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(39);

var _map = __webpack_require__(21);

var _map2 = _interopRequireDefault(_map);

var _users = __webpack_require__(22);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersListPage = function (_Component) {
  _inherits(UsersListPage, _Component);

  function UsersListPage() {
    _classCallCheck(this, UsersListPage);

    return _possibleConstructorReturn(this, (UsersListPage.__proto__ || Object.getPrototypeOf(UsersListPage)).apply(this, arguments));
  }

  _createClass(UsersListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      var users = this.props.users;


      return (0, _map2.default)(users.list, function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'renderHead',
    value: function renderHead() {
      var users = this.props.users;


      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          users.list.length + ' Users Loaded'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderHead(),
        'Here\'s a big list of users:',
        _react2.default.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return UsersListPage;
}(_react.Component);

UsersListPage.defaultProps = {
  users: {
    list: []
  }
};

UsersListPage.propTypes = {
  users: _propTypes2.default.shape({
    list: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.number,
      name: _propTypes2.default.string
    }))
  }),
  fetchUsers: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var users = _ref.users;
  return {
    users: users
  };
};

var mapDispatchToProps = {
  fetchUsers: _users2.default
};

var loadData = function loadData(_ref2) {
  var dispatch = _ref2.dispatch;
  return dispatch((0, _users2.default)());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersListPage)
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = __webpack_require__(8);

var _users2 = __webpack_require__(31);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsersPending = function fetchUsersPending() {
  return {
    type: _users.FETCH_USERS_PENDING
  };
};

var fetchUsersFulfilled = function fetchUsersFulfilled(data) {
  return {
    type: _users.FETCH_USERS_FULFILLED,
    payload: data
  };
};

var isFetchRequired = function isFetchRequired(state, force) {
  if (force) {
    return true;
  }

  return (0, _users2.selectUsers)(state).length <= 0;
};

var fetchUsers = function fetchUsers() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isFetchRequired(getState(), force)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:

              dispatch(fetchUsersPending());
              _context.next = 5;
              return api.get('/users');

            case 5:
              _ref2 = _context.sent;
              data = _ref2.data;


              dispatch(fetchUsersFulfilled(data));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = fetchUsers;

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(25);

var _reactRouterDom = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(1);

var _reactRedux = __webpack_require__(4);

var _styledComponents = __webpack_require__(3);

var _reactHelmet = __webpack_require__(39);

var _serializeJavascript = __webpack_require__(26);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var req = _ref.req,
      store = _ref.store,
      context = _ref.context;

  var sheet = new _styledComponents.ServerStyleSheet();

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _styledComponents.StyleSheetManager,
    { sheet: sheet.instance },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: context },
        _react2.default.createElement(
          _react.Fragment,
          null,
          (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
        )
      )
    )
  ));
  var styleTags = sheet.getStyleTags();

  var helmet = _reactHelmet.Helmet.renderStatic();

  var initialState = (0, _serializeJavascript2.default)(store.getState());

  return '<html>\n  <head>\n    ' + helmet.title.toString() + '\n    ' + helmet.meta.toString() + '\n\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />\n    ' + styleTags + '\n  </head>\n  <body>\n    <div id="root">' + content + '</div>\n    <script>\n      window.INITIAL_STATE = ' + initialState + '\n    </script>\n    <script src="bundle.js"></script>\n  </body>\n</html>';
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancer = function enhancer(req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  return (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance));
};

exports.default = function () {
  var initialStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var req = arguments[1];

  var store = (0, _redux.createStore)(_reducers2.default, initialStore, enhancer(req));

  return store;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _users = __webpack_require__(31);

var _users2 = _interopRequireDefault(_users);

var _admins = __webpack_require__(34);

var _admins2 = _interopRequireDefault(_admins);

var _auth = __webpack_require__(32);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _users2.default,
  admins: _admins2.default,
  auth: _auth2.default
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectUsers = undefined;

var _compose = __webpack_require__(10);

var _compose2 = _interopRequireDefault(_compose);

var _users = __webpack_require__(8);

var _object = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = function defaultState() {
  return {
    list: []
  };
};

var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _users.FETCH_USERS_PENDING:
      // Set isFetching as true
      return (0, _object.isFetching)(state);

    case _users.FETCH_USERS_FULFILLED:
      return (0, _compose2.default)(
      // Merge payload to state
      (0, _object.merge)({ list: action.payload }),
      // 1. Set isFetching as false
      _object.isFulfilled)(state);

    default:
      return state;
  }
};

exports.default = users;
var selectUsers = exports.selectUsers = function selectUsers(state) {
  return state.users.list;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _compose = __webpack_require__(10);

var _compose2 = _interopRequireDefault(_compose);

var _auth = __webpack_require__(7);

var _object = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAuthenticated = function isAuthenticated(action) {
  return function (state) {
    return _extends({}, state, {
      isAuthenticated: !!action.payload
    });
  };
};

var isNotAuthenticated = function isNotAuthenticated(state) {
  return _extends({}, state, {
    isAuthenticated: false
  });
};

var getDefaultState = function getDefaultState() {
  return isNotAuthenticated({});
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultState();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _auth.FETCH_CURRENT_USER_PENDING:
      return (0, _compose2.default)(
      // 2. Set isFetching to true
      _object.isFetching,
      // 1. Set isAuthenticated to false
      isNotAuthenticated)(state);

    case _auth.FETCH_CURRENT_USER_FULFILLED:
      return (0, _compose2.default)(
      // 3. merge payload
      (0, _object.merge)(action.payload),
      // 2. Set isFetching to false
      _object.isFulfilled,
      // 1. Set is isAuthenticated to true (if data is in payload)
      isAuthenticated(action))(state);

    default:
      return state;
  }
};

exports.default = authReducer;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-param-reassign: 0 */

var NotFoundPage = function NotFoundPage(_ref) {
  var staticContext = _ref.staticContext;

  staticContext.NotFound = true;

  return _react2.default.createElement(
    'h1',
    null,
    'Oops, route not found.'
  );
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

NotFoundPage.propTypes = {
  staticContext: _propTypes2.default.shape({})
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAdmins = undefined;

var _compose = __webpack_require__(10);

var _compose2 = _interopRequireDefault(_compose);

var _admins = __webpack_require__(35);

var _object = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = function defaultState() {
  return {
    list: []
  };
};

var admins = function admins() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _admins.FETCH_ADMINS_PENDING:
      // Set isFetching as true
      return (0, _object.isFetching)(state);

    case _admins.FETCH_ADMINS_FULFILLED:
      return (0, _compose2.default)(
      // Merge payload to state
      (0, _object.merge)({ list: action.payload }),
      // 1. Set isFetching as false
      _object.isFulfilled)(state);

    default:
      return state;
  }
};

exports.default = admins;
var selectAdmins = exports.selectAdmins = function selectAdmins(state) {
  return state.admins.list;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_ADMINS_PENDING = exports.FETCH_ADMINS_PENDING = 'FETCH_ADMINS_PENDING';
var FETCH_ADMINS_FULFILLED = exports.FETCH_ADMINS_FULFILLED = 'FETCH_ADMINS_FULFILLED';
var FETCH_ADMINS_FAILED = exports.FETCH_ADMINS_FAILED = 'FETCH_ADMINS_FAILED';

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

var _map = __webpack_require__(21);

var _map2 = _interopRequireDefault(_map);

var _admins = __webpack_require__(37);

var _admins2 = _interopRequireDefault(_admins);

var _withAuth = __webpack_require__(38);

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersListPage = function (_Component) {
  _inherits(UsersListPage, _Component);

  function UsersListPage() {
    _classCallCheck(this, UsersListPage);

    return _possibleConstructorReturn(this, (UsersListPage.__proto__ || Object.getPrototypeOf(UsersListPage)).apply(this, arguments));
  }

  _createClass(UsersListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      var admins = this.props.admins;


      return (0, _map2.default)(admins.list, function (admin) {
        return _react2.default.createElement(
          'li',
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Protected list of admins'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return UsersListPage;
}(_react.Component);

UsersListPage.defaultProps = {
  admins: {
    list: []
  }
};

UsersListPage.propTypes = {
  admins: _propTypes2.default.shape({
    list: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.number,
      name: _propTypes2.default.string
    }))
  }),
  fetchAdmins: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var admins = _ref.admins;
  return {
    admins: admins
  };
};

var mapDispatchToProps = {
  fetchAdmins: _admins2.default
};

var loadData = function loadData(_ref2) {
  var dispatch = _ref2.dispatch;
  return dispatch((0, _admins2.default)());
};

exports.default = {
  loadData: loadData,
  component: (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _withAuth2.default)(UsersListPage)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _admins = __webpack_require__(35);

var _admins2 = __webpack_require__(34);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAdminsPending = function fetchAdminsPending() {
  return {
    type: _admins.FETCH_ADMINS_PENDING
  };
};

var fetchAdminsFulfilled = function fetchAdminsFulfilled(data) {
  return {
    type: _admins.FETCH_ADMINS_FULFILLED,
    payload: data
  };
};

var isFetchRequired = function isFetchRequired(state, force) {
  if (force) {
    return true;
  }

  return (0, _admins2.selectAdmins)(state).length <= 0;
};

var fetchAdmins = function fetchAdmins() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isFetchRequired(getState(), force)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:

              dispatch(fetchAdminsPending());
              _context.next = 5;
              return api.get('/admins');

            case 5:
              _ref2 = _context.sent;
              data = _ref2.data;


              dispatch(fetchAdminsFulfilled(data));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = fetchAdmins;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withAuth = function withAuth(WrappedComponent) {
  var RequireAuth = function RequireAuth(props) {
    var auth = props.auth;


    if (auth.isFetching) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading...'
      );
    }

    if (!auth.isAuthenticated) {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }

    return _react2.default.createElement(WrappedComponent, props);
  };

  RequireAuth.propTypes = {
    auth: _propTypes2.default.shape({
      isAuthenticated: _propTypes2.default.bool,
      isFetching: _propTypes2.default.bool
    }).isRequired
  };

  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    return {
      auth: auth
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

exports.default = withAuth;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);