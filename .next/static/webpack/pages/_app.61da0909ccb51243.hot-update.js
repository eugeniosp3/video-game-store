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

/***/ "./components/sidecard.js":
/*!********************************!*\
  !*** ./components/sidecard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/sidecard.module.css */ \"./styles/sidecard.module.css\");\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_public_itemPhotos_wizardHatA_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/itemPhotos/wizardHatA.png */ \"./public/itemPhotos/wizardHatA.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemData.js */ \"./itemData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Sidecard(param) {\n    let { items  } = param;\n    const renderCards = ()=>{\n        return items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item\n            }, index, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardMain),\n        children: renderCards()\n    }, void 0, false, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n_c = Sidecard;\nfunction Card(param) {\n    let { item  } = param;\n    _s();\n    const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRotation = ()=>{\n        setIsRotated(!isRotated);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardInner), \" \").concat(isRotated && (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().rotate)),\n        onClick: handleRotation,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardFront),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardFrontContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardFrontTitle),\n                                children: item.ItemName\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBody),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().bodyText),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageStats),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().statsFront),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().magic),\n                                    title: \"Magic\",\n                                    children: item.Stat\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().itemImage),\n                                src: item.Path,\n                                alt: \"Item picture\",\n                                width: 30,\n                                height: 40\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardBack),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardBackContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardBackTitle),\n                            children: \"Back Side\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBodyBack),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().bodyTextBack),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().statsCost),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBodyBackCost),\n                                            children: item.Cost\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBodyStats),\n                                            children: item.Stat\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"KfaLCzQLvz0kbS+6ps+XZTNSey8=\");\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidecard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidecard\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVjYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDNkQ7QUFDTTtBQUM1RTtBQUNxRDtBQUVwRixTQUFTTSxTQUFTLEtBQVMsRUFBRTtRQUFYLEVBQUVELE1BQUssRUFBRSxHQUFUO0lBQ2hCLE1BQU1FLGNBQWMsSUFBTTtRQUN4QixPQUFPRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLDhEQUFDQztnQkFBaUJGLE1BQU1BO2VBQWJDOzs7OztJQUVmO0lBRUEscUJBQU8sOERBQUNFO1FBQUlDLFdBQVdYLHFJQUFtQjtrQkFBR0s7Ozs7OztBQUMvQztLQVJTRDtBQVdULFNBQVNLLEtBQUssS0FBUSxFQUFFO1FBQVYsRUFBRUYsS0FBSSxFQUFFLEdBQVI7O0lBQ1osTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTWdCLGlCQUFpQixJQUFNO1FBQzNCRCxhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNIO1FBQ0NDLFdBQVcsR0FBMkJFLE9BQXhCYixzSUFBb0IsRUFBQyxLQUE4QixPQUEzQmEsYUFBYWIsK0hBQWE7UUFDaEVrQixTQUFTSDs7MEJBRVQsOERBQUNMO2dCQUFJQyxXQUFXWCxzSUFBb0I7O2tDQUNsQyw4REFBQ1U7d0JBQUlDLFdBQVdYLDZJQUEyQjs7MENBQ3pDLDhEQUFDcUI7Z0NBQUdWLFdBQVdYLDJJQUF5QjswQ0FBR08sS0FBS2dCLFFBQVE7Ozs7OzswQ0FDeEQsOERBQUNiO2dDQUFJQyxXQUFXWCxpSUFBZTswQ0FDN0IsNEVBQUNxQjtvQ0FBR1YsV0FBV1gsaUlBQWU7OENBQUdPLEtBQUttQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHckQsOERBQUNDO3dCQUFLaEIsV0FBV1gsbUlBQWlCOzswQ0FFaEMsOERBQUMyQjtnQ0FBS2hCLFdBQVdYLG1JQUFpQjswQ0FDaEMsNEVBQUM4QjtvQ0FBR25CLFdBQVdYLDhIQUFZO29DQUFFZ0MsT0FBTTs4Q0FDaEN6QixLQUFLMEIsSUFBSTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUMvQixtREFBS0E7Z0NBQ0pTLFdBQVdYLGtJQUFnQjtnQ0FDM0JtQyxLQUFLNUIsS0FBSzZCLElBQUk7Z0NBQ2RDLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZCw4REFBQzdCO2dCQUFJQyxXQUFXWCxxSUFBbUI7MEJBQ2pDLDRFQUFDVTtvQkFBSUMsV0FBV1gsNElBQTBCOztzQ0FDeEMsOERBQUNxQjs0QkFBR1YsV0FBV1gsMElBQXdCO3NDQUFFOzs7Ozs7c0NBQ3pDLDhEQUFDVTs0QkFBSUMsV0FBV1gscUlBQW1COzs4Q0FDakMsOERBQUNxQjtvQ0FBR1YsV0FBV1gscUlBQW1COzhDQUFHTyxLQUFLbUIsV0FBVzs7Ozs7OzhDQUNyRCw4REFBQ0M7b0NBQUtoQixXQUFXWCxrSUFBZ0I7O3NEQUMvQiw4REFBQ3FCOzRDQUFHVixXQUFXWCx5SUFBdUI7c0RBQUdPLEtBQUt3QyxJQUFJOzs7Ozs7c0RBQ2xELDhEQUFDMUI7NENBQUdWLFdBQVdYLHNJQUFvQjtzREFBR08sS0FBSzBCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdEO0dBakRTeEI7TUFBQUE7QUFtRFQsK0RBQWVMLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlY2FyZC5qcz9jNmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnL1VzZXJzL2dpbm9wYXJhZ2VzL0Rlc2t0b3AvZ2luby1kZXYtZnVuL2dpbm8tZm9yLWZ1bi9zdHlsZXMvc2lkZWNhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgd2l6SGF0QSBmcm9tICcvVXNlcnMvZ2lub3BhcmFnZXMvRGVza3RvcC9naW5vLWRldi1mdW4vZ2luby1mb3ItZnVuL3B1YmxpYy9pdGVtUGhvdG9zL3dpemFyZEhhdEEucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGl0ZW1zIGZyb20gJy9Vc2Vycy9naW5vcGFyYWdlcy9EZXNrdG9wL2dpbm8tZGV2LWZ1bi9naW5vLWZvci1mdW4vaXRlbURhdGEuanMnXG5cbmZ1bmN0aW9uIFNpZGVjYXJkKHsgaXRlbXMgfSkge1xuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPENhcmQga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZE1haW59PntyZW5kZXJDYXJkcygpfTwvZGl2Pjtcbn1cblxuXG5mdW5jdGlvbiBDYXJkKHsgaXRlbSB9KSB7XG4gIGNvbnN0IFtpc1JvdGF0ZWQsIHNldElzUm90YXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlUm90YXRpb24gPSAoKSA9PiB7XG4gICAgc2V0SXNSb3RhdGVkKCFpc1JvdGF0ZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2lkZWNhcmRJbm5lcn0gJHtpc1JvdGF0ZWQgJiYgc3R5bGVzLnJvdGF0ZX1gfVxuICAgICAgb25DbGljaz17aGFuZGxlUm90YXRpb259XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEZyb250fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEZyb250Q29udGVudH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkRnJvbnRUaXRsZX0+e2l0ZW0uSXRlbU5hbWV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb2R5fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5VGV4dH0+e2l0ZW0uRGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlU3RhdHN9PlxuICAgICAgICAgIFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzRnJvbnR9PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLm1hZ2ljfSB0aXRsZT1cIk1hZ2ljXCI+XG4gICAgICAgICAgICAgIHtpdGVtLlN0YXR9XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1JbWFnZX1cbiAgICAgICAgICAgIHNyYz17aXRlbS5QYXRofVxuICAgICAgICAgICAgYWx0PVwiSXRlbSBwaWN0dXJlXCJcbiAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRCYWNrQ29udGVudH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja1RpdGxlfT5CYWNrIFNpZGU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5VGV4dEJhY2t9PntpdGVtLkRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0Nvc3R9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrQ29zdH0+e2l0ZW0uQ29zdH08L2gyPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlTdGF0c30+e2l0ZW0uU3RhdH08L2gyPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlY2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwid2l6SGF0QSIsIkltYWdlIiwiaXRlbXMiLCJTaWRlY2FyZCIsInJlbmRlckNhcmRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiQ2FyZCIsImRpdiIsImNsYXNzTmFtZSIsInNpZGVjYXJkTWFpbiIsImlzUm90YXRlZCIsInNldElzUm90YXRlZCIsImhhbmRsZVJvdGF0aW9uIiwic2lkZWNhcmRJbm5lciIsInJvdGF0ZSIsIm9uQ2xpY2siLCJzaWRlY2FyZEZyb250Iiwic2lkZWNhcmRGcm9udENvbnRlbnQiLCJoMiIsInNpZGVjYXJkRnJvbnRUaXRsZSIsIkl0ZW1OYW1lIiwidGV4dEJvZHkiLCJib2R5VGV4dCIsIkRlc2NyaXB0aW9uIiwic3BhbiIsImltYWdlU3RhdHMiLCJzdGF0c0Zyb250IiwiaDUiLCJtYWdpYyIsInRpdGxlIiwiU3RhdCIsIml0ZW1JbWFnZSIsInNyYyIsIlBhdGgiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNpZGVjYXJkQmFjayIsInNpZGVjYXJkQmFja0NvbnRlbnQiLCJzaWRlY2FyZEJhY2tUaXRsZSIsInRleHRCb2R5QmFjayIsImJvZHlUZXh0QmFjayIsInN0YXRzQ29zdCIsInRleHRCb2R5QmFja0Nvc3QiLCJDb3N0IiwidGV4dEJvZHlTdGF0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidecard.js\n"));

/***/ })

});