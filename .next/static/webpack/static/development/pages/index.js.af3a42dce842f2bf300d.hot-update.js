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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-timeseries-charts */ "./node_modules/react-timeseries-charts/lib/entry.js");
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pondjs */ "./node_modules/pondjs/lib/entry.js");
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pondjs__WEBPACK_IMPORTED_MODULE_6__);




var _this = undefined,
    _jsxFileName = "/Users/mullens/corona/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Index = function Index(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["Resizable"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["ChartContainer"], {
    timeRange: props.timerange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["ChartRow"], {
    height: "150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["YAxis"], {
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
  }), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["Charts"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_5__["BarChart"], {
    axis: "rain",
    spacing: 1,
    columns: ["precip"],
    series: props.timeseries,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "test"));
};

Index.getInitialProps = function _callee() {
  var res, text, _text$split, _text$split2, headings, data, table, seriesData, data2, series2;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 5:
          text = _context.sent;
          _text$split = text.split('\n'), _text$split2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_text$split), headings = _text$split2[0], data = _text$split2.slice(1);
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
          data2 = [["2017-01-24T00:00", 0.01], ["2017-01-24T01:00", 0.13], ["2017-01-24T02:00", 0.07], ["2017-01-24T03:00", 0.04], ["2017-01-24T04:00", 0.33], ["2017-01-24T05:00", 0.2], ["2017-01-24T06:00", 0.08], ["2017-01-24T07:00", 0.54], ["2017-01-24T08:00", 0.95], ["2017-01-24T09:00", 1.12], ["2017-01-24T10:00", 0.66], ["2017-01-24T11:00", 0.06], ["2017-01-24T12:00", 0.3], ["2017-01-24T13:00", 0.05], ["2017-01-24T14:00", 0.5], ["2017-01-24T15:00", 0.24], ["2017-01-24T16:00", 0.02], ["2017-01-24T17:00", 0.98], ["2017-01-24T18:00", 0.46], ["2017-01-24T19:00", 0.8], ["2017-01-24T20:00", 0.39], ["2017-01-24T21:00", 0.4], ["2017-01-24T22:00", 0.39], ["2017-01-24T23:00", 0.28]];
          series2 = new pondjs__WEBPACK_IMPORTED_MODULE_6__["TimeSeries"]({
            name: "hilo_rainfall",
            columns: ["index", "precip"],
            points: data2.map(function (_ref) {
              var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
                  d = _ref2[0],
                  value = _ref2[1];

              return [pondjs__WEBPACK_IMPORTED_MODULE_6__["Index"].getIndexString("1h", new Date(d)), value];
            })
          });
          console.log('series2', series2); // const timeseries = new TimeSeries(seriesData);

          return _context.abrupt("return", {
            timeseries: series2,
            timerange: series2.timerange()
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.af3a42dce842f2bf300d.hot-update.js.map