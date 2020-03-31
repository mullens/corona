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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-timeseries-charts */ "./node_modules/react-timeseries-charts/lib/entry.js");
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pondjs */ "./node_modules/pondjs/lib/entry.js");
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pondjs__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "/Users/mullens/corona/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Index = function Index(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["Resizable"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["ChartContainer"], {
    timeRange: props.timeseries,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["ChartRow"], {
    height: "150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
    id: "rain",
    label: "Rainfall (inches/hr)",
    min: 0,
    max: 1.5,
    format: ".2f",
    width: "70",
    type: "linear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["Charts"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["BarChart"], {
    axis: "rain",
    spacing: 1,
    columns: ["precip"],
    series: series,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, JSON.stringify(props.timeseries)));
};

Index.getInitialProps = function _callee() {
  var res, text, _text$split, _text$split2, headings, data, table, seriesData, timeseries;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 5:
          text = _context.sent;
          _text$split = text.split('\n'), _text$split2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_text$split), headings = _text$split2[0], data = _text$split2.slice(1);
          table = data.filter(function (e) {
            return e.includes('San Francisco');
          }).map(function (e) {
            return e.split(',');
          });
          seriesData = {
            name: "traffic",
            columns: ["time", "in", "out"],
            points: [[1400425947000, 52, 41], [1400425948000, 18, 45], [1400425949000, 26, 49], [1400425950000, 93, 81]]
          };
          timeseries = new pondjs__WEBPACK_IMPORTED_MODULE_5__["TimeSeries"](seriesData);
          return _context.abrupt("return", {
            timeseries: timeseries,
            timerange: timeseries.timerange()
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
//# sourceMappingURL=index.js.854cb6056c7942ee84eb.hot-update.js.map