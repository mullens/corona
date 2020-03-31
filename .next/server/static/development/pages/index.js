module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-timeseries-charts */ "react-timeseries-charts");
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pondjs */ "pondjs");
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pondjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mullens/corona/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ChartForCity = props => {
  const city = props.data.filter(e => e[1] === props.city);
  const data = city.map(e => [e[0], e[4]]);

  if (!data.length) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  const millions = props.pop / 1000000;
  const timeseries = new pondjs__WEBPACK_IMPORTED_MODULE_3__["TimeSeries"]({
    name: "corona",
    columns: ["index", "cases"],
    points: data.map(([d, value]) => [pondjs__WEBPACK_IMPORTED_MODULE_3__["Index"].getIndexString("1d", new Date(d)), value / millions])
  });
  const style = Object(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["styler"])([{
    key: "cases",
    color: "#35C8E1"
  }]);
  const todayCount = data[data.length - 1][1];
  const todayCountPer = data[data.length - 1][1] / millions;
  const yesterdayCount = data[data.length - 2][1]; // const symbol = todayCount > yesterdayCount ? '+' : '-';

  const diff = (todayCount - yesterdayCount) / yesterdayCount;
  const rounded = 100 * Math.round(diff * 1000) / 1000;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, props.city, ", ", props.state), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["Resizable"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["ChartContainer"], {
    timeRange: new pondjs__WEBPACK_IMPORTED_MODULE_3__["TimeRange"](moment__WEBPACK_IMPORTED_MODULE_4___default()({
      year: 2020,
      month: 2,
      day: 1
    }), moment__WEBPACK_IMPORTED_MODULE_4___default()()),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["ChartRow"], {
    height: "150",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
    id: "cases",
    label: "Coronavirus cases",
    min: 0,
    max: props.max / millions,
    width: "30",
    type: "linear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["Charts"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
    axis: "cases",
    style: style,
    columns: ["cases"],
    series: timeseries,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, todayCount, " cases today (", rounded > 0 ? '+' : '', rounded, "% compared to yesterday)"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, Math.round(todayCountPer * 1000) / 1000, " per million people today"));
};

const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "Last updated: ", props.lastUpdated), __jsx(ChartForCity, {
    city: "San Francisco",
    state: "California",
    data: props.data,
    max: props.max,
    pop: 884363,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }), __jsx(ChartForCity, {
    city: "Ozaukee",
    state: "Wisconsin",
    data: props.data,
    max: props.max,
    pop: 88429,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }), __jsx(ChartForCity, {
    city: "King",
    state: "Washington",
    data: props.data,
    max: props.max,
    pop: 2189000,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }));
};

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv');
  const lastUpdated = new Date().toLocaleDateString();
  const text = await res.text();
  const [headings, ...data] = text.split('\n');
  const table = data.map(e => e.split(','));
  const max = Math.max(...table.filter(e => e.includes('King')).map(e => Number.parseInt(e[4])));
  return {
    data: table,
    lastUpdated,
    max
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mullens/corona/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "pondjs":
/*!*************************!*\
  !*** external "pondjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pondjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-timeseries-charts":
/*!******************************************!*\
  !*** external "react-timeseries-charts" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-timeseries-charts");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map