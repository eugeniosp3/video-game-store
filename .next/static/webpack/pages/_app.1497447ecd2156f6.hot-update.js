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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ndiv {\\n  box-sizing: border-box;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n  overflow: hidden;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  /*width: 500px;*/\\n  /*margin-top: 25px;*/\\n  /*margin-left: -110px;*/\\n  /*margin-bottom: 3px;*/\\n  align-items: center;\\n  gap: 10px;\\n  color: #826c9b;\\n  margin: 25px 8px 3px 0px;\\n}\\n\\n.cart > div {\\n  cursor: crosshair;\\n}\\n\\n.cart > div:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n\\n/*.cartHolder {*/\\n/*  display: flex;*/\\n/*  flex-direction: row;*/\\n/*  cursor: crosshair;*/\\n\\n/*}*/\\n\\n/*.cartAmount {*/\\n/*  color: #826c9b;*/\\n/*  margin-top: 27.5px;*/\\n/*  font-size: 14px;*/\\n/*}*/\\n\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  -webkit-transition: background 0.3s ease-out;\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  -webkit-transition: opacity 0.3s ease-out;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,YAAY;EACZ,WAAW;EACX,4DAA4D;EAC5D,gCAAgC;EAChC,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW,EAAE,qBAAqB;EAClC,aAAa;EACb,kCAAkC,EAAE,qBAAqB;EACzD,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAO;EACP,YAAY;EACZ,cAAc;AAChB;;;;AAIA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;;AAGA,gBAAgB;AAChB,mBAAmB;AACnB,yBAAyB;AACzB,uBAAuB;;AAEvB,IAAI;;AAEJ,gBAAgB;AAChB,oBAAoB;AACpB,wBAAwB;AACxB,qBAAqB;AACrB,IAAI;;;AAGJ;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,gCAAgC;EAChC,uCAAuC;EACvC,yCAAyC;EACzC,wCAAwC;AAC1C;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iEAAiE;EACjE,6BAA6B;EAC7B,qBAAqB;EACrB,oCAAoC;AACtC,EAAE,sCAAsC;AACxC;EACE,UAAU;EACV,WAAW;EACX,kCAAkC;AACpC;;AAEA,kCAAkC;AAClC;EACE,iCAAiC;EACjC,mBAAmB;EACnB,kCAAkC;EAClC,4CAAoC;EAApC,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC;EACE,iCAAiC;AACnC;;AAEA,wCAAwC;AACxC;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA,2CAA2C;AAC3C;EACE,UAAU;EACV,yCAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ndiv {\\n  box-sizing: border-box;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n  overflow: hidden;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  /*width: 500px;*/\\n  /*margin-top: 25px;*/\\n  /*margin-left: -110px;*/\\n  /*margin-bottom: 3px;*/\\n  align-items: center;\\n  gap: 10px;\\n  color: #826c9b;\\n  margin: 25px 8px 3px 0px;\\n}\\n\\n.cart > div {\\n  cursor: crosshair;\\n}\\n\\n.cart > div:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n\\n/*.cartHolder {*/\\n/*  display: flex;*/\\n/*  flex-direction: row;*/\\n/*  cursor: crosshair;*/\\n\\n/*}*/\\n\\n/*.cartAmount {*/\\n/*  color: #826c9b;*/\\n/*  margin-top: 27.5px;*/\\n/*  font-size: 14px;*/\\n/*}*/\\n\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxpQkFBaUIsZ0JBQWdCLGlFQUFpRSx1Q0FBdUMscUJBQXFCLGNBQWMsR0FBRyxTQUFTLDJCQUEyQixHQUFHLGFBQWEsaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLGlCQUFpQix3Q0FBd0Msd0NBQXdDLGdEQUFnRCx1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQixpQkFBaUIsbUJBQW1CLDJCQUEyQixjQUFjLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLGNBQWMsaUJBQWlCLG1CQUFtQixHQUFHLG9CQUFvQiwrQkFBK0IscUJBQXFCLG1CQUFtQix3QkFBd0IsNEJBQTRCLG9CQUFvQix3QkFBd0IsNEJBQTRCLHdCQUF3Qix3QkFBd0IsS0FBSyxvQkFBb0IsOEJBQThCLHNCQUFzQixxQkFBcUIsd0JBQXdCLG9CQUFvQixHQUFHLGtCQUFrQixpQkFBaUIsaUJBQWlCLHdCQUF3Qix3QkFBd0IscUNBQXFDLGtDQUFrQyxtQkFBbUIsdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxhQUFhLGtCQUFrQiwrQkFBK0IsZ0NBQWdDLGlCQUFpQixtQkFBbUIseUJBQXlCLDRCQUE0QiwyQkFBMkIsMEJBQTBCLGNBQWMsbUJBQW1CLDZCQUE2QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyx1QkFBdUIsbUJBQW1C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dUNBQXVDLHlDQUF5QyxHQUFHLHFGQUFxRixzQ0FBc0MsR0FBRyxtRkFBbUYsaUNBQWlDLHdCQUF3Qix1Q0FBdUMsR0FBRyxzRkFBc0YsZUFBZSxzQ0FBc0MsR0FBRyw4Q0FBOEMsZUFBZSxHQUFHLHFCQUFxQjtBQUNqc1U7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/MDRkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMCA3MCUsICMyYzAxNDUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVc3VhbFxcXCIsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI19fbmV4dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tYWluQXBwRGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4yNXMgZWFzZTsgLyogYWRkZWQgdHJhbnNpdGlvbiAqL1xcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubGVmdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxIDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXFxuXFxuLnNlYXJjaEJhciB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgLyp3aWR0aDogNzA1cHg7Ki9cXG4gIGhlaWdodDogNDBweDtcXG4gIC8qbWFyZ2luLXRvcDogLTkxcHg7Ki9cXG4gIC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKm1hcmdpbi1sZWZ0OiAyMHB4OyovXFxufVxcblxcbi5kYmxDbGlja1RpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMTY1LCAxNjQsIDE2NCk7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIG1hcmdpbi10b3A6IDI3cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uc2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNDE2YztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5cXG4uY2FydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICAvKndpZHRoOiA1MDBweDsqL1xcbiAgLyptYXJnaW4tdG9wOiAyNXB4OyovXFxuICAvKm1hcmdpbi1sZWZ0OiAtMTEwcHg7Ki9cXG4gIC8qbWFyZ2luLWJvdHRvbTogM3B4OyovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY29sb3I6ICM4MjZjOWI7XFxuICBtYXJnaW46IDI1cHggOHB4IDNweCAwcHg7XFxufVxcblxcbi5jYXJ0ID4gZGl2IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2FydCA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogIzA2ZDU2MDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyouY2FydEhvbGRlciB7Ki9cXG4vKiAgZGlzcGxheTogZmxleDsqL1xcbi8qICBmbGV4LWRpcmVjdGlvbjogcm93OyovXFxuLyogIGN1cnNvcjogY3Jvc3NoYWlyOyovXFxuXFxuLyp9Ki9cXG5cXG4vKi5jYXJ0QW1vdW50IHsqL1xcbi8qICBjb2xvcjogIzgyNmM5YjsqL1xcbi8qICBtYXJnaW4tdG9wOiAyNy41cHg7Ki9cXG4vKiAgZm9udC1zaXplOiAxNHB4OyovXFxuLyp9Ki9cXG5cXG5cXG4ud2FsbGV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb2luSW1hZ2Uge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXFxuLmNvaW5hZ2Uge1xcbiAgY29sb3I6ICM4MzY5OWY7XFxuICBtYXJnaW4tdG9wOiAyNy41cHg7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29pbmFnZTpob3ZlciB7XFxuICBjb2xvcjogI2Q1YWYwNjtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLml0ZW1QcmVzZW50YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiA2MjVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRDb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBoZWlnaHQ6IDI1NXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2FydFRhYmxlIHtcXG4gIC8qbWFyZ2luLXRvcDogLTkwMHB4OyovXFxuICAvKm1hcmdpbi1sZWZ0OiAtMTA1cHg7Ki9cXG4gIC8qd2lkdGg6IDUwMHB4OyovXFxuICAvKmhlaWdodDogNzI1cHg7Ki9cXG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCB5ZWxsb3c7XFxuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkIHJnYigyMjMsIDIyMywgMCk7XFxuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxufVxcblxcbi5pdGVtVGFibGVNYWluIHtcXG59XFxuXFxuLnN1YnRvdGFsQW10IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc3ViR29sZCB7XFxuICBmb250LXdlaWdodDogNTUwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmIwMCwgI2ZmZGQwMCwgI2ZmYTYwMCk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59IC8qIEhpZGUgc2Nyb2xsYmFyIHdoZW4gbm90IHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuLyogU2hvdyBzY3JvbGxiYXIgd2hlbiBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDgwLCA4MCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi8qIERhcmtlbiBzY3JvbGxiYXIgdGh1bWIgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNzEsIDY3LCA2NywgMC41KTtcXG59XFxuXFxuLyogUm91bmRlZCBjb3JuZXJzIGZvciBzY3JvbGxiYXIgdHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgdGh1bWIgd2hlbiBub3QgaG92ZXJpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsNERBQTREO0VBQzVELGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFFLHFCQUFxQjtFQUNsQyxhQUFhO0VBQ2Isa0NBQWtDLEVBQUUscUJBQXFCO0VBQ3pELHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFPO0VBQ1AsWUFBWTtFQUNaLGNBQWM7QUFDaEI7Ozs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7O0FBR0EsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsdUJBQXVCOztBQUV2QixJQUFJOztBQUVKLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQixJQUFJOzs7QUFHSjtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2Qyx5Q0FBeUM7RUFDekMsd0NBQXdDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpRUFBaUU7RUFDakUsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEMsRUFBRSxzQ0FBc0M7QUFDeEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyw0Q0FBb0M7RUFBcEMsb0NBQW9DO0FBQ3RDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxVQUFVO0VBQ1YseUNBQWlDO0VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwIDcwJSwgIzJjMDE0NSk7XFxuICBmb250LWZhbWlseTogXFxcIlVzdWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jX19uZXh0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW5BcHBEaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjI1cyBlYXNlOyAvKiBhZGRlZCB0cmFuc2l0aW9uICovXFxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5sZWZ0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yaWdodERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXFxuXFxuLnNlYXJjaEJhciB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgLyp3aWR0aDogNzA1cHg7Ki9cXG4gIGhlaWdodDogNDBweDtcXG4gIC8qbWFyZ2luLXRvcDogLTkxcHg7Ki9cXG4gIC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKm1hcmdpbi1sZWZ0OiAyMHB4OyovXFxufVxcblxcbi5kYmxDbGlja1RpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMTY1LCAxNjQsIDE2NCk7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIG1hcmdpbi10b3A6IDI3cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uc2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNDE2YztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5cXG4uY2FydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICAvKndpZHRoOiA1MDBweDsqL1xcbiAgLyptYXJnaW4tdG9wOiAyNXB4OyovXFxuICAvKm1hcmdpbi1sZWZ0OiAtMTEwcHg7Ki9cXG4gIC8qbWFyZ2luLWJvdHRvbTogM3B4OyovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY29sb3I6ICM4MjZjOWI7XFxuICBtYXJnaW46IDI1cHggOHB4IDNweCAwcHg7XFxufVxcblxcbi5jYXJ0ID4gZGl2IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2FydCA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogIzA2ZDU2MDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyouY2FydEhvbGRlciB7Ki9cXG4vKiAgZGlzcGxheTogZmxleDsqL1xcbi8qICBmbGV4LWRpcmVjdGlvbjogcm93OyovXFxuLyogIGN1cnNvcjogY3Jvc3NoYWlyOyovXFxuXFxuLyp9Ki9cXG5cXG4vKi5jYXJ0QW1vdW50IHsqL1xcbi8qICBjb2xvcjogIzgyNmM5YjsqL1xcbi8qICBtYXJnaW4tdG9wOiAyNy41cHg7Ki9cXG4vKiAgZm9udC1zaXplOiAxNHB4OyovXFxuLyp9Ki9cXG5cXG5cXG4ud2FsbGV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb2luSW1hZ2Uge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXFxuLmNvaW5hZ2Uge1xcbiAgY29sb3I6ICM4MzY5OWY7XFxuICBtYXJnaW4tdG9wOiAyNy41cHg7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29pbmFnZTpob3ZlciB7XFxuICBjb2xvcjogI2Q1YWYwNjtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLml0ZW1QcmVzZW50YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiA2MjVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRDb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBoZWlnaHQ6IDI1NXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2FydFRhYmxlIHtcXG4gIC8qbWFyZ2luLXRvcDogLTkwMHB4OyovXFxuICAvKm1hcmdpbi1sZWZ0OiAtMTA1cHg7Ki9cXG4gIC8qd2lkdGg6IDUwMHB4OyovXFxuICAvKmhlaWdodDogNzI1cHg7Ki9cXG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCB5ZWxsb3c7XFxuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkIHJnYigyMjMsIDIyMywgMCk7XFxuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxufVxcblxcbi5pdGVtVGFibGVNYWluIHtcXG59XFxuXFxuLnN1YnRvdGFsQW10IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc3ViR29sZCB7XFxuICBmb250LXdlaWdodDogNTUwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmIwMCwgI2ZmZGQwMCwgI2ZmYTYwMCk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59IC8qIEhpZGUgc2Nyb2xsYmFyIHdoZW4gbm90IHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuLyogU2hvdyBzY3JvbGxiYXIgd2hlbiBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDgwLCA4MCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiBEYXJrZW4gc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDcxLCA2NywgNjcsIDAuNSk7XFxufVxcblxcbi8qIFJvdW5kZWQgY29ybmVycyBmb3Igc2Nyb2xsYmFyIHRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIHRodW1iIHdoZW4gbm90IGhvdmVyaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});