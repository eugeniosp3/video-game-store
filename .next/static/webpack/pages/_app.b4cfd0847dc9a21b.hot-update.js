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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ndiv {\\n  box-sizing: border-box;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n  overflow: hidden;\\n  gap: 8px;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  align-items: center;\\n  gap: 10px;\\n  color: #826c9b;\\n  margin: 25px 10px 3px 0;\\n}\\n\\n.cart > div {\\n  cursor: crosshair;\\n}\\n\\n.cart > div:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  -webkit-transition: background 0.3s ease-out;\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  -webkit-transition: opacity 0.3s ease-out;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,YAAY;EACZ,WAAW;EACX,4DAA4D;EAC5D,gCAAgC;EAChC,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW,EAAE,qBAAqB;EAClC,aAAa;EACb,kCAAkC,EAAE,qBAAqB;EACzD,uBAAuB;EACvB,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAO;EACP,YAAY;EACZ,cAAc;AAChB;;;;AAIA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;;AAGA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,gCAAgC;EAChC,uCAAuC;EACvC,yCAAyC;EACzC,wCAAwC;AAC1C;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iEAAiE;EACjE,6BAA6B;EAC7B,qBAAqB;EACrB,oCAAoC;AACtC,EAAE,sCAAsC;AACxC;EACE,UAAU;EACV,WAAW;EACX,kCAAkC;AACpC;;AAEA,kCAAkC;AAClC;EACE,iCAAiC;EACjC,mBAAmB;EACnB,kCAAkC;EAClC,4CAAoC;EAApC,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC;EACE,iCAAiC;AACnC;;AAEA,wCAAwC;AACxC;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA,2CAA2C;AAC3C;EACE,UAAU;EACV,yCAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ndiv {\\n  box-sizing: border-box;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n  overflow: hidden;\\n  gap: 8px;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  align-items: center;\\n  gap: 10px;\\n  color: #826c9b;\\n  margin: 25px 10px 3px 0;\\n}\\n\\n.cart > div {\\n  cursor: crosshair;\\n}\\n\\n.cart > div:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxpQkFBaUIsZ0JBQWdCLGlFQUFpRSx1Q0FBdUMscUJBQXFCLGNBQWMsR0FBRyxTQUFTLDJCQUEyQixHQUFHLGFBQWEsaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLGlCQUFpQix3Q0FBd0Msd0NBQXdDLGdEQUFnRCx1QkFBdUIsYUFBYSxHQUFHLGNBQWMsa0JBQWtCLGlCQUFpQixtQkFBbUIsMkJBQTJCLGNBQWMsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsY0FBYyxpQkFBaUIsbUJBQW1CLEdBQUcsb0JBQW9CLCtCQUErQixxQkFBcUIsbUJBQW1CLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLHdCQUF3QixLQUFLLG9CQUFvQiw4QkFBOEIsc0JBQXNCLHFCQUFxQix3QkFBd0Isb0JBQW9CLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsd0JBQXdCLHdCQUF3QixxQ0FBcUMsa0NBQWtDLG1CQUFtQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLCtCQUErQixnQ0FBZ0MsaUJBQWlCLHdCQUF3QixjQUFjLG1CQUFtQiw0QkFBNEIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsdUJBQXVCLG1CQUFtQixpQkFBaUIsR0FBRyxlQUFlLGtCQUFr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QkFBcUIsd0JBQXdCLG9CQUFvQixHQUFHLGtCQUFrQixpQkFBaUIsaUJBQWlCLHdCQUF3Qix3QkFBd0IscUNBQXFDLGtDQUFrQyxtQkFBbUIsdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxhQUFhLGtCQUFrQiwrQkFBK0IsZ0NBQWdDLGlCQUFpQix3QkFBd0IsY0FBYyxtQkFBbUIsNEJBQTRCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGNBQWMsbUJBQW1CLHVCQUF1QixzQkFBc0Isb0JBQW9CLHNCQUFzQixHQUFHLG9CQUFvQixtQkFBbUIsaUJBQWlCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QiwrQkFBK0Isb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLCtCQUErQixvQkFBb0IsaUJBQWlCLEdBQUcsZ0JBQWdCLHlCQUF5Qiw0QkFBNEIscUJBQXFCLHNCQUFzQix5QkFBeUIsbUJBQW1CLHFDQUFxQyw0Q0FBNEMsOENBQThDLDZDQUE2QyxHQUFHLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0IsaUJBQWlCLHNCQUFzQixHQUFHLGNBQWMscUJBQXFCLHNFQUFzRSxrQ0FBa0MsMEJBQTBCLHlDQUF5QyxJQUFJLDhEQUE4RCxlQUFlLGdCQUFnQix1Q0FBdUMsR0FBRyw2RUFBNkUsc0NBQXNDLHdCQUF3Qix1Q0FBdUMseUNBQXlDLEdBQUcscUZBQXFGLHNDQUFzQyxHQUFHLG1GQUFtRixpQ0FBaUMsd0JBQXdCLHVDQUF1QyxHQUFHLHNGQUFzRixlQUFlLHNDQUFzQyxHQUFHLDhDQUE4QyxlQUFlLEdBQUcscUJBQXFCO0FBQ2o4UztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz8wNGRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwIDcwJSwgIzJjMDE0NSk7XFxuICBmb250LWZhbWlseTogXFxcIlVzdWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jX19uZXh0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW5BcHBEaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjI1cyBlYXNlOyAvKiBhZGRlZCB0cmFuc2l0aW9uICovXFxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmxlZnREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMSAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcblxcblxcbi5zZWFyY2hCYXIge1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIC8qd2lkdGg6IDcwNXB4OyovXFxuICBoZWlnaHQ6IDQwcHg7XFxuICAvKm1hcmdpbi10b3A6IC05MXB4OyovXFxuICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyptYXJnaW4tbGVmdDogMjBweDsqL1xcbn1cXG5cXG4uZGJsQ2xpY2tUaXRsZSB7XFxuICBjb2xvcjogcmdiKDE2NSwgMTY0LCAxNjQpO1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnNlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjQxNmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiAjODI2YzliO1xcbiAgbWFyZ2luOiAyNXB4IDEwcHggM3B4IDA7XFxufVxcblxcbi5jYXJ0ID4gZGl2IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2FydCA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogIzA2ZDU2MDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLndhbGxldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29pbkltYWdlIHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbi5jb2luYWdlIHtcXG4gIGNvbG9yOiAjODM2OTlmO1xcbiAgbWFyZ2luLXRvcDogMjcuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvaW5hZ2U6aG92ZXIge1xcbiAgY29sb3I6ICNkNWFmMDY7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5pdGVtUHJlc2VudGF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGhlaWdodDogNjI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jYXJ0Q29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiAyNTVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRUYWJsZSB7XFxuICAvKm1hcmdpbi10b3A6IC05MDBweDsqL1xcbiAgLyptYXJnaW4tbGVmdDogLTEwNXB4OyovXFxuICAvKndpZHRoOiA1MDBweDsqL1xcbiAgLypoZWlnaHQ6IDcyNXB4OyovXFxuICAvKm92ZXJmbG93OiBzY3JvbGw7Ki9cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgeWVsbG93O1xcbiAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDApO1xcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxuICBib3JkZXItbGVmdDogMTJweCBzb2xpZCByZ2IoMTQ5LCAxNDksIDApO1xcbn1cXG5cXG4uaXRlbVRhYmxlTWFpbiB7XFxufVxcblxcbi5zdWJ0b3RhbEFtdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnN1YkdvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZiMDAsICNmZmRkMDAsICNmZmE2MDApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAvKiBIaWRlIHNjcm9sbGJhciB3aGVuIG5vdCBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcblxcbi8qIFNob3cgc2Nyb2xsYmFyIHdoZW4gc2Nyb2xsaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDg0LCA4MCwgODAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiBEYXJrZW4gc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDcxLCA2NywgNjcsIDAuNSk7XFxufVxcblxcbi8qIFJvdW5kZWQgY29ybmVycyBmb3Igc2Nyb2xsYmFyIHRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIHRodW1iIHdoZW4gbm90IGhvdmVyaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLDREQUE0RDtFQUM1RCxnQ0FBZ0M7RUFD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aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAgNzAlLCAjMmMwMTQ1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVXN1YWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkFwcERpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMjVzIGVhc2U7IC8qIGFkZGVkIHRyYW5zaXRpb24gKi9cXG4gIC8qYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ubGVmdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcblxcblxcbi5zZWFyY2hCYXIge1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIC8qd2lkdGg6IDcwNXB4OyovXFxuICBoZWlnaHQ6IDQwcHg7XFxuICAvKm1hcmdpbi10b3A6IC05MXB4OyovXFxuICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyptYXJnaW4tbGVmdDogMjBweDsqL1xcbn1cXG5cXG4uZGJsQ2xpY2tUaXRsZSB7XFxuICBjb2xvcjogcmdiKDE2NSwgMTY0LCAxNjQpO1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnNlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjQxNmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiAjODI2YzliO1xcbiAgbWFyZ2luOiAyNXB4IDEwcHggM3B4IDA7XFxufVxcblxcbi5jYXJ0ID4gZGl2IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2FydCA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogIzA2ZDU2MDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLndhbGxldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29pbkltYWdlIHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbi5jb2luYWdlIHtcXG4gIGNvbG9yOiAjODM2OTlmO1xcbiAgbWFyZ2luLXRvcDogMjcuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvaW5hZ2U6aG92ZXIge1xcbiAgY29sb3I6ICNkNWFmMDY7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5pdGVtUHJlc2VudGF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGhlaWdodDogNjI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jYXJ0Q29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiAyNTVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRUYWJsZSB7XFxuICAvKm1hcmdpbi10b3A6IC05MDBweDsqL1xcbiAgLyptYXJnaW4tbGVmdDogLTEwNXB4OyovXFxuICAvKndpZHRoOiA1MDBweDsqL1xcbiAgLypoZWlnaHQ6IDcyNXB4OyovXFxuICAvKm92ZXJmbG93OiBzY3JvbGw7Ki9cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgeWVsbG93O1xcbiAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDApO1xcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxuICBib3JkZXItbGVmdDogMTJweCBzb2xpZCByZ2IoMTQ5LCAxNDksIDApO1xcbn1cXG5cXG4uaXRlbVRhYmxlTWFpbiB7XFxufVxcblxcbi5zdWJ0b3RhbEFtdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnN1YkdvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZiMDAsICNmZmRkMDAsICNmZmE2MDApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAvKiBIaWRlIHNjcm9sbGJhciB3aGVuIG5vdCBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcblxcbi8qIFNob3cgc2Nyb2xsYmFyIHdoZW4gc2Nyb2xsaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDg0LCA4MCwgODAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLyogRGFya2VuIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg3MSwgNjcsIDY3LCAwLjUpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6dmVydGljYWwge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciB0aHVtYiB3aGVuIG5vdCBob3ZlcmluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});