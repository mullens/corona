webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-timeseries-charts */ "./node_modules/react-timeseries-charts/lib/entry.js");
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pondjs */ "./node_modules/pondjs/lib/entry.js");
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pondjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);





var _this = undefined,
    _jsxFileName = "/Users/mullens/corona/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var ChartForCity = function ChartForCity(props) {
  var city = props.data.filter(function (e) {
    return e[1] === props.city;
  });
  var data = city.map(function (e) {
    return [e[0], e[4]];
  });

  if (!data.length) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null);
  }

  var timeseries = new pondjs__WEBPACK_IMPORTED_MODULE_7__["TimeSeries"]({
    name: "corona",
    columns: ["index", "cases"],
    points: data.map(function (_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 2),
          d = _ref2[0],
          value = _ref2[1];

      return [pondjs__WEBPACK_IMPORTED_MODULE_7__["Index"].getIndexString("1d", new Date(d)), value];
    })
  });
  var style = Object(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["styler"])([{
    key: "cases",
    color: "#35C8E1"
  }]);
  var todayCount = data[data.length - 1][1];
  var yesterdayCount = data[data.length - 2][1]; // const symbol = todayCount > yesterdayCount ? '+' : '-';

  var diff = (todayCount - yesterdayCount) / yesterdayCount;
  var rounded = 100 * Math.round(diff * 1000) / 1000;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, props.city, ", ", props.state), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["Resizable"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["ChartContainer"], {
    timeRange: new pondjs__WEBPACK_IMPORTED_MODULE_7__["TimeRange"](moment__WEBPACK_IMPORTED_MODULE_8___default()({
      year: 2020,
      month: 2,
      day: 1
    }), moment__WEBPACK_IMPORTED_MODULE_8___default()()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["ChartRow"], {
    height: "150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
    id: "cases",
    label: "Coronavirus cases",
    min: 0,
    max: props.max,
    width: "30",
    type: "linear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["Charts"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_6__["BarChart"], {
    axis: "cases",
    style: style,
    columns: ["cases"],
    series: timeseries,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "Today: ", todayCount, " (", rounded > 0 ? '+' : '', rounded, "%)"));
};

var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "Last updated: ", props.lastUpdated), __jsx(ChartForCity, {
    city: "San Francisco",
    state: "California",
    data: props.data,
    max: props.max,
    pop: 884363,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), __jsx(ChartForCity, {
    city: "Ozaukee",
    state: "Wisconsin",
    data: props.data,
    max: props.max,
    pop: 88429,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), __jsx(ChartForCity, {
    city: "King",
    state: "Washington",
    data: props.data,
    max: props.max,
    pop: 2189000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }));
};

Index.getInitialProps = function _callee() {
  var res, lastUpdated, text, _text$split, _text$split2, headings, data, table, max;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'));

        case 2:
          res = _context.sent;
          lastUpdated = new Date().toLocaleDateString();
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 6:
          text = _context.sent;
          _text$split = text.split('\n'), _text$split2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_text$split), headings = _text$split2[0], data = _text$split2.slice(1);
          table = data.map(function (e) {
            return e.split(',');
          });
          max = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(table.filter(function (e) {
            return e.includes('King');
          }).map(function (e) {
            return Number.parseInt(e[4]);
          })));
          return _context.abrupt("return", {
            data: table,
            lastUpdated: lastUpdated,
            max: max
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3b4d837b1136107868fd.hot-update.js.map