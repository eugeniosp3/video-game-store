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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/sidecard.module.css */ \"./styles/sidecard.module.css\");\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemData.js */ \"./itemData.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction Sidecard(param) {\n    let { items  } = param;\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (item)=>{\n        setCart([\n            ...cart,\n            {\n                name: item.ItemName,\n                cost: item.Cost,\n                type: item.ItemType\n            }\n        ]);\n    };\n    const totalCost = cart.reduce((total, item)=>{\n        return total + parseInt(item.cost);\n    }, 0);\n    const renderCards = ()=>{\n        return items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item,\n                addToCart: addToCart\n            }, index, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cart),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Cart:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: cart.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    item.name,\n                                    \" - \",\n                                    item.cost,\n                                    \"g - \",\n                                    item.type\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Total cost: \",\n                            totalCost,\n                            \"g\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardMain),\n                children: renderCards()\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidecard, \"ZqFaEIYkzI5UoYUmTgmqHbYYm/0=\");\n_c = Sidecard;\nfunction Card(param) {\n    let { item , addToCart  } = param;\n    _s1();\n    const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRotation = ()=>{\n        setIsRotated(!isRotated);\n    };\n    const handleAddToCart = ()=>{\n        addToCart(item);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardInner), \" \").concat(isRotated && (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().rotate)),\n        onClick: handleRotation,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardFront),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardFrontContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardFrontTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().itemImage),\n                            src: item.Path,\n                            alt: \"Item picture\",\n                            width: 80,\n                            height: 80\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAddToCart,\n                            children: \"Add to cart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardBack),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardBackContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().sidecardBackTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().textBodyBack),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().bodyTextBack),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().statsCost),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().textBodyBackCost),\n                                            children: [\n                                                item.Cost,\n                                                \"g\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_4___default().textBodyStats),\n                                            children: item.Stat\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s1(Card, \"KfaLCzQLvz0kbS+6ps+XZTNSey8=\");\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidecard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidecard\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCOztnREFBR08sS0FBS0ksSUFBSTtnREFBQzs7Ozs7OztzREFDbkQsOERBQUNhOzRDQUFHRCxXQUFXdkIsc0lBQW9CO3NEQUFHTyxLQUFLaUQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0Q7SUEzQ1NuQztNQUFBQTtBQTZDVCwrREFBZWxCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlY2FyZC5qcz9jNmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnL1VzZXJzL2dpbm9wYXJhZ2VzL0Rlc2t0b3AvZ2luby1kZXYtZnVuL2dpbm8tZm9yLWZ1bi9zdHlsZXMvc2lkZWNhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgaXRlbXMgZnJvbSAnL1VzZXJzL2dpbm9wYXJhZ2VzL0Rlc2t0b3AvZ2luby1kZXYtZnVuL2dpbm8tZm9yLWZ1bi9pdGVtRGF0YS5qcyc7XG5cbmZ1bmN0aW9uIFNpZGVjYXJkKHsgaXRlbXMgfSkge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRDYXJ0KFsuLi5jYXJ0LCB7IG5hbWU6IGl0ZW0uSXRlbU5hbWUsIGNvc3Q6IGl0ZW0uQ29zdCwgdHlwZTogaXRlbS5JdGVtVHlwZSB9XSk7XG4gIH07XG5cbiAgY29uc3QgdG90YWxDb3N0ID0gY2FydC5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB7XG4gICAgcmV0dXJuIHRvdGFsICsgcGFyc2VJbnQoaXRlbS5jb3N0KTtcbiAgfSwgMCk7XG5cbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxDYXJkIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19IGFkZFRvQ2FydD17YWRkVG9DYXJ0fSAvPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydH0+XG4gICAgICAgIDxoMj5DYXJ0OjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7Y2FydC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9IC0ge2l0ZW0uY29zdH1nIC0ge2l0ZW0udHlwZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwPlRvdGFsIGNvc3Q6IHt0b3RhbENvc3R9ZzwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZE1haW59PntyZW5kZXJDYXJkcygpfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHsgaXRlbSwgYWRkVG9DYXJ0IH0pIHtcbiAgY29uc3QgW2lzUm90YXRlZCwgc2V0SXNSb3RhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVSb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXRJc1JvdGF0ZWQoIWlzUm90YXRlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgIGFkZFRvQ2FydChpdGVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpZGVjYXJkSW5uZXJ9ICR7aXNSb3RhdGVkICYmIHN0eWxlcy5yb3RhdGV9YH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVJvdGF0aW9ufVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udENvbnRlbnR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEZyb250VGl0bGV9PntpdGVtLkl0ZW1OYW1lfTwvaDI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtSW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uUGF0aH1cbiAgICAgICAgICAgIGFsdD1cIkl0ZW0gcGljdHVyZVwiXG4gICAgICAgICAgICB3aWR0aD17ODB9XG4gICAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRUb0NhcnR9PkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRCYWNrQ29udGVudH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja1RpdGxlfT57aXRlbS5JdGVtTmFtZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5VGV4dEJhY2t9PntpdGVtLkRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0Nvc3R9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrQ29zdH0+e2l0ZW0uQ29zdH1nPC9oMj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb2R5U3RhdHN9PntpdGVtLlN0YXR9PC9oMj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWNhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlIiwiaXRlbXMiLCJTaWRlY2FyZCIsImNhcnQiLCJzZXRDYXJ0IiwiYWRkVG9DYXJ0IiwiaXRlbSIsIm5hbWUiLCJJdGVtTmFtZSIsImNvc3QiLCJDb3N0IiwidHlwZSIsIkl0ZW1UeXBlIiwidG90YWxDb3N0IiwicmVkdWNlIiwidG90YWwiLCJwYXJzZUludCIsInJlbmRlckNhcmRzIiwibWFwIiwiaW5kZXgiLCJDYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsImxpIiwicCIsInNpZGVjYXJkTWFpbiIsImlzUm90YXRlZCIsInNldElzUm90YXRlZCIsImhhbmRsZVJvdGF0aW9uIiwiaGFuZGxlQWRkVG9DYXJ0Iiwic2lkZWNhcmRJbm5lciIsInJvdGF0ZSIsIm9uQ2xpY2siLCJzaWRlY2FyZEZyb250Iiwic2lkZWNhcmRGcm9udENvbnRlbnQiLCJzaWRlY2FyZEZyb250VGl0bGUiLCJpdGVtSW1hZ2UiLCJzcmMiLCJQYXRoIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJzaWRlY2FyZEJhY2siLCJzaWRlY2FyZEJhY2tDb250ZW50Iiwic2lkZWNhcmRCYWNrVGl0bGUiLCJ0ZXh0Qm9keUJhY2siLCJib2R5VGV4dEJhY2siLCJEZXNjcmlwdGlvbiIsInNwYW4iLCJzdGF0c0Nvc3QiLCJ0ZXh0Qm9keUJhY2tDb3N0IiwidGV4dEJvZHlTdGF0cyIsIlN0YXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidecard.js\n"));

/***/ })

});