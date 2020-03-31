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
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-timeseries-charts */ "./node_modules/react-timeseries-charts/lib/entry.js");
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pondjs */ "./node_modules/pondjs/lib/entry.js");
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pondjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);




var _this = undefined,
    _jsxFileName = "/Users/mullens/corona/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var ChartForCity = function ChartForCity(props) {
  var city = props.data.filter(function (e) {
    return e.includes(props.city);
  });
  var data = city.map(function (e) {
    return [e[0], e[4]];
  });

  if (!data.length) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
  }

  var timeseries = new pondjs__WEBPACK_IMPORTED_MODULE_6__["TimeSeries"]({
    name: "corona",
    columns: ["index", "cases"],
    points: data.map(function (_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
          d = _ref2[0],
          value = _ref2[1];

      return [pondjs__WEBPACK_IMPORTED_MODULE_6__["Index"].getIndexString("1h", new Date(d)), value];
    })
  });
  var style = Object(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["styler"])([{
    key: "cases",
    color: "#35C8E1"
  }]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, props.city), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["Resizable"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["ChartContainer"], {
    timeRange: new pondjs__WEBPACK_IMPORTED_MODULE_6__["TimeRange"](moment__WEBPACK_IMPORTED_MODULE_7___default()(), moment__WEBPACK_IMPORTED_MODULE_7___default()()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["ChartRow"], {
    height: "150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["YAxis"], {
    id: "cases",
    label: "Coronavirus cases",
    min: 0,
    max: timeseries.max('cases'),
    type: "linear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["Charts"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["BarChart"], {
    axis: "cases",
    style: style,
    spacing: 1,
    columns: ["cases"],
    series: timeseries,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }))))));
};

var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "Last updated: ", props.lastUpdated), __jsx(ChartForCity, {
    city: "San Francisco",
    data: props.data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), __jsx(ChartForCity, {
    city: "Ozaukee",
    data: props.data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), __jsx(ChartForCity, {
    city: "King County, Washington",
    data: props.data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }));
};

Index.getInitialProps = function _callee() {
  var res, lastUpdated, text, _text$split, _text$split2, headings, data, table;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'));

        case 2:
          res = _context.sent;
          lastUpdated = new Date().toLocaleDateString();
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 6:
          text = _context.sent;
          _text$split = text.split('\n'), _text$split2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_text$split), headings = _text$split2[0], data = _text$split2.slice(1);
          table = data.map(function (e) {
            return e.split(',');
          });
          return _context.abrupt("return", {
            data: table,
            lastUpdated: lastUpdated
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a7c0ac5272efdf687b34.hot-update.js.map