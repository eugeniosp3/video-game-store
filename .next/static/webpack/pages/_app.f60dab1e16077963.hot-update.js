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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/sidecard.module.css */ \"./styles/sidecard.module.css\");\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_public_itemPhotos_wizardHatA_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/itemPhotos/wizardHatA.png */ \"./public/itemPhotos/wizardHatA.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemData.js */ \"./itemData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Sidecard(param) {\n    let { items  } = param;\n    const renderCards = ()=>{\n        return items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item\n            }, index, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardMain),\n        children: renderCards()\n    }, void 0, false, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n_c = Sidecard;\nfunction Card(param) {\n    let { item  } = param;\n    _s();\n    const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRotation = ()=>{\n        setIsRotated(!isRotated);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardInner), \" \").concat(isRotated && (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().rotate)),\n        onClick: handleRotation,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardFront),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardFrontContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardFrontTitle),\n                                children: item.ItemName\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBody),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().bodyText),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageStats),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().itemImage),\n                                src: item.Path,\n                                alt: \"Item picture\",\n                                width: 30,\n                                height: 30\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().statsFront),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().magic),\n                                    title: \"Magic\",\n                                    children: item.Stat\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardBack),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardBackContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidecardBackTitle),\n                            children: \"Back Side\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBodyBack),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().bodyTextBack),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().statsCost),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBodyBackCost),\n                                            children: item.Cost\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_5___default().textBodyStats),\n                                            children: item.Stat\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"KfaLCzQLvz0kbS+6ps+XZTNSey8=\");\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidecard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidecard\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGVjYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDNkQ7QUFDTTtBQUM1RTtBQUNxRDtBQUVwRixTQUFTTSxTQUFTLEtBQVMsRUFBRTtRQUFYLEVBQUVELE1BQUssRUFBRSxHQUFUO0lBQ2hCLE1BQU1FLGNBQWMsSUFBTTtRQUN4QixPQUFPRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLDhEQUFDQztnQkFBaUJGLE1BQU1BO2VBQWJDOzs7OztJQUVmO0lBRUEscUJBQU8sOERBQUNFO1FBQUlDLFdBQVdYLHFJQUFtQjtrQkFBR0s7Ozs7OztBQUMvQztLQVJTRDtBQVdULFNBQVNLLEtBQUssS0FBUSxFQUFFO1FBQVYsRUFBRUYsS0FBSSxFQUFFLEdBQVI7O0lBQ1osTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTWdCLGlCQUFpQixJQUFNO1FBQzNCRCxhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNIO1FBQ0NDLFdBQVcsR0FBMkJFLE9BQXhCYixzSUFBb0IsRUFBQyxLQUE4QixPQUEzQmEsYUFBYWIsK0hBQWE7UUFDaEVrQixTQUFTSDs7MEJBRVQsOERBQUNMO2dCQUFJQyxXQUFXWCxzSUFBb0I7O2tDQUNsQyw4REFBQ1U7d0JBQUlDLFdBQVdYLDZJQUEyQjs7MENBQ3pDLDhEQUFDcUI7Z0NBQUdWLFdBQVdYLDJJQUF5QjswQ0FBR08sS0FBS2dCLFFBQVE7Ozs7OzswQ0FDeEQsOERBQUNiO2dDQUFJQyxXQUFXWCxpSUFBZTswQ0FDN0IsNEVBQUNxQjtvQ0FBR1YsV0FBV1gsaUlBQWU7OENBQUdPLEtBQUttQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHckQsOERBQUNDO3dCQUFLaEIsV0FBV1gsbUlBQWlCOzswQ0FDaEMsOERBQUNFLG1EQUFLQTtnQ0FDSlMsV0FBV1gsa0lBQWdCO2dDQUMzQjhCLEtBQUt2QixLQUFLd0IsSUFBSTtnQ0FDZEMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7OzBDQUVWLDhEQUFDUDtnQ0FBS2hCLFdBQVdYLG1JQUFpQjswQ0FDaEMsNEVBQUNvQztvQ0FBR3pCLFdBQVdYLDhIQUFZO29DQUFFc0MsT0FBTTs4Q0FDaEMvQixLQUFLZ0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2xCLDhEQUFDN0I7Z0JBQUlDLFdBQVdYLHFJQUFtQjswQkFDakMsNEVBQUNVO29CQUFJQyxXQUFXWCw0SUFBMEI7O3NDQUN4Qyw4REFBQ3FCOzRCQUFHVixXQUFXWCwwSUFBd0I7c0NBQUU7Ozs7OztzQ0FDekMsOERBQUNVOzRCQUFJQyxXQUFXWCxxSUFBbUI7OzhDQUNqQyw4REFBQ3FCO29DQUFHVixXQUFXWCxxSUFBbUI7OENBQUdPLEtBQUttQixXQUFXOzs7Ozs7OENBQ3JELDhEQUFDQztvQ0FBS2hCLFdBQVdYLGtJQUFnQjs7c0RBQy9CLDhEQUFDcUI7NENBQUdWLFdBQVdYLHlJQUF1QjtzREFBR08sS0FBS3dDLElBQUk7Ozs7OztzREFDbEQsOERBQUMxQjs0Q0FBR1YsV0FBV1gsc0lBQW9CO3NEQUFHTyxLQUFLZ0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0Q7R0FoRFM5QjtNQUFBQTtBQWtEVCwrREFBZUwsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGVjYXJkLmpzP2M2YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcvVXNlcnMvZ2lub3BhcmFnZXMvRGVza3RvcC9naW5vLWRldi1mdW4vZ2luby1mb3ItZnVuL3N0eWxlcy9zaWRlY2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCB3aXpIYXRBIGZyb20gJy9Vc2Vycy9naW5vcGFyYWdlcy9EZXNrdG9wL2dpbm8tZGV2LWZ1bi9naW5vLWZvci1mdW4vcHVibGljL2l0ZW1QaG90b3Mvd2l6YXJkSGF0QS5wbmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgaXRlbXMgZnJvbSAnL1VzZXJzL2dpbm9wYXJhZ2VzL0Rlc2t0b3AvZ2luby1kZXYtZnVuL2dpbm8tZm9yLWZ1bi9pdGVtRGF0YS5qcydcblxuZnVuY3Rpb24gU2lkZWNhcmQoeyBpdGVtcyB9KSB7XG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkTWFpbn0+e3JlbmRlckNhcmRzKCl9PC9kaXY+O1xufVxuXG5cbmZ1bmN0aW9uIENhcmQoeyBpdGVtIH0pIHtcbiAgY29uc3QgW2lzUm90YXRlZCwgc2V0SXNSb3RhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVSb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXRJc1JvdGF0ZWQoIWlzUm90YXRlZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zaWRlY2FyZElubmVyfSAke2lzUm90YXRlZCAmJiBzdHlsZXMucm90YXRlfWB9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVSb3RhdGlvbn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkRnJvbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkRnJvbnRDb250ZW50fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udFRpdGxlfT57aXRlbS5JdGVtTmFtZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHl9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmJvZHlUZXh0fT57aXRlbS5EZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VTdGF0c30+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtSW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uUGF0aH1cbiAgICAgICAgICAgIGFsdD1cIkl0ZW0gcGljdHVyZVwiXG4gICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNGcm9udH0+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMubWFnaWN9IHRpdGxlPVwiTWFnaWNcIj5cbiAgICAgICAgICAgICAge2l0ZW0uU3RhdH1cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRCYWNrfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEJhY2tDb250ZW50fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRCYWNrVGl0bGV9PkJhY2sgU2lkZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Qm9keUJhY2t9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmJvZHlUZXh0QmFja30+e2l0ZW0uRGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzQ29zdH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Qm9keUJhY2tDb3N0fT57aXRlbS5Db3N0fTwvaDI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Qm9keVN0YXRzfT57aXRlbS5TdGF0fTwvaDI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVjYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ3aXpIYXRBIiwiSW1hZ2UiLCJpdGVtcyIsIlNpZGVjYXJkIiwicmVuZGVyQ2FyZHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJDYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lkZWNhcmRNYWluIiwiaXNSb3RhdGVkIiwic2V0SXNSb3RhdGVkIiwiaGFuZGxlUm90YXRpb24iLCJzaWRlY2FyZElubmVyIiwicm90YXRlIiwib25DbGljayIsInNpZGVjYXJkRnJvbnQiLCJzaWRlY2FyZEZyb250Q29udGVudCIsImgyIiwic2lkZWNhcmRGcm9udFRpdGxlIiwiSXRlbU5hbWUiLCJ0ZXh0Qm9keSIsImJvZHlUZXh0IiwiRGVzY3JpcHRpb24iLCJzcGFuIiwiaW1hZ2VTdGF0cyIsIml0ZW1JbWFnZSIsInNyYyIsIlBhdGgiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0YXRzRnJvbnQiLCJoNSIsIm1hZ2ljIiwidGl0bGUiLCJTdGF0Iiwic2lkZWNhcmRCYWNrIiwic2lkZWNhcmRCYWNrQ29udGVudCIsInNpZGVjYXJkQmFja1RpdGxlIiwidGV4dEJvZHlCYWNrIiwiYm9keVRleHRCYWNrIiwic3RhdHNDb3N0IiwidGV4dEJvZHlCYWNrQ29zdCIsIkNvc3QiLCJ0ZXh0Qm9keVN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidecard.js\n"));

/***/ })

});