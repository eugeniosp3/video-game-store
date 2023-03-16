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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/sidecard.module.css */ \"./styles/sidecard.module.css\");\n/* harmony import */ var _styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Sidecard(param) {\n    let { items , setcheckOutItems , setSubAmount  } = param;\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [subtotal, setSubtotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const addToCart = (item)=>{\n        setCartItems([\n            ...cartItems,\n            item\n        ]);\n        setcheckOutItems([\n            ...cartItems,\n            item\n        ]);\n        setSubtotal(subtotal + Number(item.Cost));\n        setSubAmount(subtotal + Number(item.Cost));\n    };\n    const renderCards = ()=>{\n        return items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item,\n                addToCart: addToCart\n            }, index, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardMain),\n        children: [\n            renderCards(),\n            cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Cart Items:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: cartItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    item.ItemName,\n                                    \" (\",\n                                    item.Type,\n                                    \") - \",\n                                    item.Cost,\n                                    \"g\"\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Subtotal: \",\n                            subtotal,\n                            \"g\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidecard, \"Gd63U3raxYEucJtqPo9yxq5tRl0=\");\n_c = Sidecard;\nfunction Card(param) {\n    let { item , addToCart  } = param;\n    _s1();\n    const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRotation = ()=>{\n        setIsRotated(!isRotated);\n    };\n    const handleDoubleClick = ()=>{\n        const confirmAdd = window.confirm(\"Do you want to add \".concat(item.ItemName, \" to your cart?\"));\n        if (confirmAdd) {\n            addToCart(item);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardInner), \" \").concat(isRotated && (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().rotate)),\n        onClick: handleRotation,\n        onDoubleClick: handleDoubleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFront),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFrontContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFrontTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemImage),\n                            src: item.Path,\n                            alt: \"Item picture\",\n                            width: 80,\n                            height: 80\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBack),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBackContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBackTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyBack),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().bodyTextBack),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().statsCost),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyBackCost),\n                                            children: [\n                                                item.Cost,\n                                                \"g\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyStats),\n                                            children: item.Stat\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s1(Card, \"KfaLCzQLvz0kbS+6ps+XZTNSey8=\");\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidecard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidecard\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V25CLDhFQUFnQjs7c0RBQy9CLDhEQUFDc0I7NENBQUdILFdBQVduQixxRkFBdUI7O2dEQUFHVyxLQUFLRSxJQUFJO2dEQUFDOzs7Ozs7O3NEQUNuRCw4REFBQ1M7NENBQUdILFdBQVduQixrRkFBb0I7c0RBQUdXLEtBQUs4QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RDtJQTlDU3hDO01BQUFBO0FBZ0RULCtEQUFlZixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWNhcmQuanM/YzZjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy9zdHlsZXMvc2lkZWNhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmZ1bmN0aW9uIFNpZGVjYXJkKHsgaXRlbXMsICBzZXRjaGVja091dEl0ZW1zLCBzZXRTdWJBbW91bnQgfSkge1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3VidG90YWwsIHNldFN1YnRvdGFsXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4gICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIGl0ZW1dKTtcbiAgICBzZXRjaGVja091dEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIGl0ZW1dKTtcbiAgICBzZXRTdWJ0b3RhbChzdWJ0b3RhbCArIE51bWJlcihpdGVtLkNvc3QpKTtcbiAgICBzZXRTdWJBbW91bnQoc3VidG90YWwgKyBOdW1iZXIoaXRlbS5Db3N0KSk7XG4gIH07XG4gIFxuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSBhZGRUb0NhcnQ9e2FkZFRvQ2FydH0gLz5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRNYWlufT5cbiAgICAgIHtyZW5kZXJDYXJkcygpfVxuICAgICAgey8qIFBvcC11cCBkaWFsb2cgKi99XG4gICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5DYXJ0IEl0ZW1zOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NhcnRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7aXRlbS5JdGVtTmFtZX0gKHtpdGVtLlR5cGV9KSAtIHtpdGVtLkNvc3R9Z1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aDI+U3VidG90YWw6IHtzdWJ0b3RhbH1nPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHsgaXRlbSwgYWRkVG9DYXJ0fSkge1xuICBjb25zdCBbaXNSb3RhdGVkLCBzZXRJc1JvdGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVJvdGF0aW9uID0gKCkgPT4ge1xuICAgIHNldElzUm90YXRlZCghaXNSb3RhdGVkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maXJtQWRkID0gd2luZG93LmNvbmZpcm0oYERvIHlvdSB3YW50IHRvIGFkZCAke2l0ZW0uSXRlbU5hbWV9IHRvIHlvdXIgY2FydD9gKTtcbiAgICBpZiAoY29uZmlybUFkZCkge1xuICAgICAgYWRkVG9DYXJ0KGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpZGVjYXJkSW5uZXJ9ICR7aXNSb3RhdGVkICYmIHN0eWxlcy5yb3RhdGV9YH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVJvdGF0aW9ufVxuICAgICAgb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IC8vIEFkZGVkIGRvdWJsZSBjbGljayBldmVudFxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udENvbnRlbnR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEZyb250VGl0bGV9PntpdGVtLkl0ZW1OYW1lfTwvaDI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtSW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uUGF0aH1cbiAgICAgICAgICAgIGFsdD1cIkl0ZW0gcGljdHVyZVwiXG4gICAgICAgICAgICB3aWR0aD17ODB9XG4gICAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRCYWNrQ29udGVudH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja1RpdGxlfT57aXRlbS5JdGVtTmFtZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5VGV4dEJhY2t9PntpdGVtLkRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0Nvc3R9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrQ29zdH0+e2l0ZW0uQ29zdH1nPC9oMj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb2R5U3RhdHN9PntpdGVtLlN0YXR9PC9oMj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWNhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlIiwiU2lkZWNhcmQiLCJpdGVtcyIsInNldGNoZWNrT3V0SXRlbXMiLCJzZXRTdWJBbW91bnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJzdWJ0b3RhbCIsInNldFN1YnRvdGFsIiwiYWRkVG9DYXJ0IiwiaXRlbSIsIk51bWJlciIsIkNvc3QiLCJyZW5kZXJDYXJkcyIsIm1hcCIsImluZGV4IiwiQ2FyZCIsImRpdiIsImNsYXNzTmFtZSIsInNpZGVjYXJkTWFpbiIsImxlbmd0aCIsImgyIiwidWwiLCJsaSIsIkl0ZW1OYW1lIiwiVHlwZSIsImlzUm90YXRlZCIsInNldElzUm90YXRlZCIsImhhbmRsZVJvdGF0aW9uIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJjb25maXJtQWRkIiwid2luZG93IiwiY29uZmlybSIsInNpZGVjYXJkSW5uZXIiLCJyb3RhdGUiLCJvbkNsaWNrIiwib25Eb3VibGVDbGljayIsInNpZGVjYXJkRnJvbnQiLCJzaWRlY2FyZEZyb250Q29udGVudCIsInNpZGVjYXJkRnJvbnRUaXRsZSIsIml0ZW1JbWFnZSIsInNyYyIsIlBhdGgiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNpZGVjYXJkQmFjayIsInNpZGVjYXJkQmFja0NvbnRlbnQiLCJzaWRlY2FyZEJhY2tUaXRsZSIsInRleHRCb2R5QmFjayIsImJvZHlUZXh0QmFjayIsIkRlc2NyaXB0aW9uIiwic3BhbiIsInN0YXRzQ29zdCIsInRleHRCb2R5QmFja0Nvc3QiLCJ0ZXh0Qm9keVN0YXRzIiwiU3RhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidecard.js\n"));

/***/ })

});