"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_sidecard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidecard */ \"./components/sidecard.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemData.js */ \"./itemData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [checkoutItems, setCheckoutItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [subAmount, setSubAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const items = _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_4__.itemJSON;\n    console.log(\"Howdy\", subAmount, checkoutItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainAppDiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"leftDiv\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"searchBar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            class: \"searchInput\",\n                            placeholder: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidecard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        items: items,\n                        setCheckOutItems: setCheckoutItems,\n                        setSubAmount: setSubAmount\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                subAmount: subAmount\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rightDiv\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cart\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cartHolder\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartAmount\",\n                                    children: [\n                                        \"Items \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                \"(\",\n                                                \"5\",\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wallet\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"coinage\",\n                                    children: [\n                                        \"Coin Bag \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                \"(\",\n                                                \"500\",\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 24\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"itemPresentation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cartControls\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"zESpVeXO5H/rothl9QvFXms6M9o=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFDUztBQUNtRDtBQUU1RSxTQUFTSSxJQUFJLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1TLFFBQVFSLHNHQUFRQTtJQUN0QlMsUUFBUUMsR0FBRyxDQUFDLFNBQVNKLFdBQVdGO0lBRWhDLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLE9BQU07NEJBQWNDLGFBQVk7Ozs7Ozs7Ozs7O2tDQUVyRCw4REFBQ25CLDREQUFRQTt3QkFBQ1csT0FBT0E7d0JBQU9TLGtCQUFrQlo7d0JBQWtCRSxjQUFjQTs7Ozs7Ozs7Ozs7OzBCQUU1RSw4REFBQ0w7Z0JBQVcsR0FBR0MsU0FBUztnQkFBRUcsV0FBV0E7Ozs7OzswQkFDckMsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FRYiw0RUFBQ007b0NBQUVOLFdBQVU7O3dDQUFhO3NEQUNsQiw4REFBQ087O2dEQUFFO2dEQUFHO2dEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDUjtnQ0FBSUMsV0FBVTswQ0FFYiw0RUFBQ007b0NBQUVOLFdBQVU7O3dDQUFVO3NEQUNaLDhEQUFDTzs7Z0RBQUU7Z0RBQUc7Z0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJMUIsOERBQUNSO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkIsQ0FBQztHQXpDdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWNhcmRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpdGVtSlNPTiB9IGZyb20gJy9Vc2Vycy9naW5vcGFyYWdlcy9EZXNrdG9wL2dpbm8tZGV2LWZ1bi9naW5vLWZvci1mdW4vaXRlbURhdGEuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2NoZWNrb3V0SXRlbXMsIHNldENoZWNrb3V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3ViQW1vdW50LCBzZXRTdWJBbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGl0ZW1zID0gaXRlbUpTT047XG4gIGNvbnNvbGUubG9nKFwiSG93ZHlcIiwgc3ViQW1vdW50LCBjaGVja291dEl0ZW1zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkFwcERpdlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0RGl2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQmFyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWFyY2hJbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaWRlY2FyZCBpdGVtcz17aXRlbXN9IHNldENoZWNrT3V0SXRlbXM9e3NldENoZWNrb3V0SXRlbXN9IHNldFN1YkFtb3VudD17c2V0U3ViQW1vdW50fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc3ViQW1vdW50PXtzdWJBbW91bnR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RGl2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydEhvbGRlclwiPlxuICAgICAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NoZXN0SW1nJ1xuICAgICAgICAgICAgICBzcmM9e2ludm9pY2V9XG4gICAgICAgICAgICAgIGFsdD1cIml0ZW1CYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxuICAgICAgICAgICAgPjwvSW1hZ2U+ICovfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydEFtb3VudFwiPlxuICAgICAgICAgICAgICBJdGVtcyA8Yj4oe2A1YH0pPC9iPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+XG4gICAgICAgICAgICB7LyogPiAqL31cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvaW5hZ2VcIj5cbiAgICAgICAgICAgICAgQ29pbiBCYWcgPGI+KHtgNTAwYH0pPC9iPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtUHJlc2VudGF0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydENvbnRyb2xzXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaWRlY2FyZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJpdGVtSlNPTiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNoZWNrb3V0SXRlbXMiLCJzZXRDaGVja291dEl0ZW1zIiwic3ViQW1vdW50Iiwic2V0U3ViQW1vdW50IiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2xhc3MiLCJwbGFjZWhvbGRlciIsInNldENoZWNrT3V0SXRlbXMiLCJwIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});