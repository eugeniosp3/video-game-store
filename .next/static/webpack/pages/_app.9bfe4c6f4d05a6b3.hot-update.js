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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/sidecard.module.css */ \"./styles/sidecard.module.css\");\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Sidecard(param) {\n    let { items  } = param;\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [subtotal, setSubtotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const addToCart = (item)=>{\n        setCartItems([\n            ...cartItems,\n            item\n        ]);\n        setSubtotal(subtotal + item.Cost);\n    };\n    const renderCards = ()=>{\n        return items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item,\n                addToCart: addToCart\n            }, index, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardMain),\n        children: [\n            renderCards(),\n            cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Cart Items:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: cartItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    item.ItemName,\n                                    \" (\",\n                                    item.Type,\n                                    \") - \",\n                                    item.Cost,\n                                    \"g\"\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Subtotal: \",\n                            subtotal,\n                            \"g\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidecard, \"Gd63U3raxYEucJtqPo9yxq5tRl0=\");\n_c = Sidecard;\nfunction Card(param) {\n    let { item , addToCart  } = param;\n    _s1();\n    const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRotation = ()=>{\n        setIsRotated(!isRotated);\n    };\n    const handleDoubleClick = ()=>{\n        const confirmAdd = window.confirm(\"Do you want to add \".concat(item.ItemName, \" to your cart?\"));\n        if (confirmAdd) {\n            addToCart(item);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardInner), \" \").concat(isRotated && (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().rotate)),\n        onClick: handleRotation,\n        onDoubleClick: handleDoubleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFront),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFrontContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFrontTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemImage),\n                            src: item.Path,\n                            alt: \"Item picture\",\n                            width: 80,\n                            height: 80\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBack),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBackContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBackTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyBack),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().bodyTextBack),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().statsCost),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyBackCost),\n                                            children: [\n                                                item.Cost,\n                                                \"g\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyStats),\n                                            children: item.Stat\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/components/sidecard.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s1(Card, \"KfaLCzQLvz0kbS+6ps+XZTNSey8=\");\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidecard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidecard\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdoQixzSUFBb0I7c0RBQUdTLEtBQUs2QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RDtJQTlDU3hDO01BQUFBO0FBZ0RULCtEQUFlWixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWNhcmQuanM/YzZjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy9Vc2Vycy9naW5vcGFyYWdlcy9EZXNrdG9wL2dpbm8tZGV2LWZ1bi9naW5vLWZvci1mdW4vc3R5bGVzL3NpZGVjYXJkLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5mdW5jdGlvbiBTaWRlY2FyZCh7IGl0ZW1zIH0pIHtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N1YnRvdGFsLCBzZXRTdWJ0b3RhbF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xuICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBpdGVtXSk7XG4gICAgc2V0U3VidG90YWwoc3VidG90YWwgKyBpdGVtLkNvc3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSBhZGRUb0NhcnQ9e2FkZFRvQ2FydH0gLz5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRNYWlufT5cbiAgICAgIHtyZW5kZXJDYXJkcygpfVxuICAgICAgey8qIFBvcC11cCBkaWFsb2cgKi99XG4gICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5DYXJ0IEl0ZW1zOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NhcnRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7aXRlbS5JdGVtTmFtZX0gKHtpdGVtLlR5cGV9KSAtIHtpdGVtLkNvc3R9Z1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aDI+U3VidG90YWw6IHtzdWJ0b3RhbH1nPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHsgaXRlbSwgYWRkVG9DYXJ0IH0pIHtcbiAgY29uc3QgW2lzUm90YXRlZCwgc2V0SXNSb3RhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVSb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXRJc1JvdGF0ZWQoIWlzUm90YXRlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlybUFkZCA9IHdpbmRvdy5jb25maXJtKGBEbyB5b3Ugd2FudCB0byBhZGQgJHtpdGVtLkl0ZW1OYW1lfSB0byB5b3VyIGNhcnQ/YCk7XG4gICAgaWYgKGNvbmZpcm1BZGQpIHtcbiAgICAgIGFkZFRvQ2FydChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zaWRlY2FyZElubmVyfSAke2lzUm90YXRlZCAmJiBzdHlsZXMucm90YXRlfWB9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVSb3RhdGlvbn1cbiAgICAgIG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSAvLyBBZGRlZCBkb3VibGUgY2xpY2sgZXZlbnRcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkRnJvbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkRnJvbnRDb250ZW50fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udFRpdGxlfT57aXRlbS5JdGVtTmFtZX08L2gyPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUltYWdlfVxuICAgICAgICAgICAgc3JjPXtpdGVtLlBhdGh9XG4gICAgICAgICAgICBhbHQ9XCJJdGVtIHBpY3R1cmVcIlxuICAgICAgICAgICAgd2lkdGg9ezgwfVxuICAgICAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEJhY2t9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja0NvbnRlbnR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEJhY2tUaXRsZX0+e2l0ZW0uSXRlbU5hbWV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb2R5QmFja30+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuYm9keVRleHRCYWNrfT57aXRlbS5EZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNDb3N0fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb2R5QmFja0Nvc3R9PntpdGVtLkNvc3R9ZzwvaDI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Qm9keVN0YXRzfT57aXRlbS5TdGF0fTwvaDI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVjYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIlNpZGVjYXJkIiwiaXRlbXMiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJzdWJ0b3RhbCIsInNldFN1YnRvdGFsIiwiYWRkVG9DYXJ0IiwiaXRlbSIsIkNvc3QiLCJyZW5kZXJDYXJkcyIsIm1hcCIsImluZGV4IiwiQ2FyZCIsImRpdiIsImNsYXNzTmFtZSIsInNpZGVjYXJkTWFpbiIsImxlbmd0aCIsImgyIiwidWwiLCJsaSIsIkl0ZW1OYW1lIiwiVHlwZSIsImlzUm90YXRlZCIsInNldElzUm90YXRlZCIsImhhbmRsZVJvdGF0aW9uIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJjb25maXJtQWRkIiwid2luZG93IiwiY29uZmlybSIsInNpZGVjYXJkSW5uZXIiLCJyb3RhdGUiLCJvbkNsaWNrIiwib25Eb3VibGVDbGljayIsInNpZGVjYXJkRnJvbnQiLCJzaWRlY2FyZEZyb250Q29udGVudCIsInNpZGVjYXJkRnJvbnRUaXRsZSIsIml0ZW1JbWFnZSIsInNyYyIsIlBhdGgiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNpZGVjYXJkQmFjayIsInNpZGVjYXJkQmFja0NvbnRlbnQiLCJzaWRlY2FyZEJhY2tUaXRsZSIsInRleHRCb2R5QmFjayIsImJvZHlUZXh0QmFjayIsIkRlc2NyaXB0aW9uIiwic3BhbiIsInN0YXRzQ29zdCIsInRleHRCb2R5QmFja0Nvc3QiLCJ0ZXh0Qm9keVN0YXRzIiwiU3RhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidecard.js\n"));

/***/ })

});