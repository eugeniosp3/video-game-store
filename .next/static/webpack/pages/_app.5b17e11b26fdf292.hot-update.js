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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ndiv {\\n  box-sizing: border-box;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  overflow: hidden;\\n  gap: 10px;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  align-items: center;\\n  gap: 10px;\\n  color: #826c9b;\\n  margin: 25px 10px 3px 0;\\n}\\n\\n.cart > div {\\n  cursor: crosshair;\\n}\\n\\n.cart > div:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  -webkit-transition: background 0.3s ease-out;\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  -webkit-transition: opacity 0.3s ease-out;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,YAAY;EACZ,WAAW;EACX,4DAA4D;EAC5D,gCAAgC;EAChC,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW,EAAE,qBAAqB;EAClC,aAAa;EACb,kCAAkC,EAAE,qBAAqB;EACzD,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAO;EACP,YAAY;EACZ,cAAc;AAChB;;;;AAIA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;;AAGA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,gCAAgC;EAChC,uCAAuC;EACvC,yCAAyC;EACzC,wCAAwC;AAC1C;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iEAAiE;EACjE,6BAA6B;EAC7B,qBAAqB;EACrB,oCAAoC;AACtC,EAAE,sCAAsC;AACxC;EACE,UAAU;EACV,WAAW;EACX,kCAAkC;AACpC;;AAEA,kCAAkC;AAClC;EACE,iCAAiC;EACjC,mBAAmB;EACnB,kCAAkC;EAClC,4CAAoC;EAApC,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC;EACE,iCAAiC;AACnC;;AAEA,wCAAwC;AACxC;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA,2CAA2C;AAC3C;EACE,UAAU;EACV,yCAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ndiv {\\n  box-sizing: border-box;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  overflow: hidden;\\n  gap: 10px;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  align-items: center;\\n  gap: 10px;\\n  color: #826c9b;\\n  margin: 25px 10px 3px 0;\\n}\\n\\n.cart > div {\\n  cursor: crosshair;\\n}\\n\\n.cart > div:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxpQkFBaUIsZ0JBQWdCLGlFQUFpRSx1Q0FBdUMscUJBQXFCLGNBQWMsR0FBRyxTQUFTLDJCQUEyQixHQUFHLGFBQWEsaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLGlCQUFpQix3Q0FBd0Msd0NBQXdDLDJDQUEyQyxjQUFjLEdBQUcsY0FBYyxrQkFBa0IsaUJBQWlCLG1CQUFtQiwyQkFBMkIsY0FBYyxHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQixjQUFjLGlCQUFpQixtQkFBbUIsR0FBRyxvQkFBb0IsK0JBQStCLHFCQUFxQixtQkFBbUIsd0JBQXdCLDRCQUE0QixvQkFBb0Isd0JBQXdCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLEtBQUssb0JBQW9CLDhCQUE4QixzQkFBc0IscUJBQXFCLHdCQUF3QixvQkFBb0IsR0FBRyxrQkFBa0IsaUJBQWlCLGlCQUFpQix3QkFBd0Isd0JBQXdCLHFDQUFxQyxrQ0FBa0MsbUJBQW1CLHVCQUF1QixvQkFBb0Isd0JBQXdCLEdBQUcsYUFBYSxrQkFBa0IsK0JBQStCLGdDQUFnQyxpQkFBaUIsd0JBQXdCLGNBQWMsbUJBQW1CLDRCQUE0QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyx1QkFBdUIsbUJBQW1CLGlCQUFpQixHQUFHLGVBQWUsa0JBQWtCLEdBQUcs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LEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsd0JBQXdCLHdCQUF3QixxQ0FBcUMsa0NBQWtDLG1CQUFtQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLCtCQUErQixnQ0FBZ0MsaUJBQWlCLHdCQUF3QixjQUFjLG1CQUFtQiw0QkFBNEIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsdUJBQXVCLG1CQUFtQixpQkFBaUIsR0FBRyxlQUFlLGtCQUFrQixHQUFHLGNBQWMscUJBQXFCLEdBQUcsY0FBYyxtQkFBbUIsdUJBQXVCLHNCQUFzQixvQkFBb0Isc0JBQXNCLEdBQUcsb0JBQW9CLG1CQUFtQixpQkFBaUIsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLCtCQUErQixvQkFBb0IsaUJBQWlCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsK0JBQStCLG9CQUFvQixpQkFBaUIsR0FBRyxnQkFBZ0IseUJBQXlCLDRCQUE0QixxQkFBcUIsc0JBQXNCLHlCQUF5QixtQkFBbUIscUNBQXFDLDRDQUE0Qyw4Q0FBOEMsNkNBQTZDLEdBQUcsb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsc0JBQXNCLEdBQUcsY0FBYyxxQkFBcUIsc0VBQXNFLGtDQUFrQywwQkFBMEIseUNBQXlDLElBQUksOERBQThELGVBQWUsZ0JBQWdCLHVDQUF1QyxHQUFHLDZFQUE2RSxzQ0FBc0Msd0JBQXdCLHVDQUF1Qyx5Q0FBeUMsR0FBRyxxRkFBcUYsc0NBQXNDLEdBQUcsbUZBQW1GLGlDQUFpQyx3QkFBd0IsdUNBQXVDLEdBQUcsc0ZBQXNGLGVBQWUsc0NBQXNDLEdBQUcsOENBQThDLGVBQWUsR0FBRyxxQkFBcUI7QUFDOTNTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzA0ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAgNzAlLCAjMmMwMTQ1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVXN1YWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkFwcERpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMjVzIGVhc2U7IC8qIGFkZGVkIHRyYW5zaXRpb24gKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yaWdodERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEgMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5cXG5cXG4uc2VhcmNoQmFyIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICAvKndpZHRoOiA3MDVweDsqL1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgLyptYXJnaW4tdG9wOiAtOTFweDsqL1xcbiAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cXG59XFxuXFxuLmRibENsaWNrVGl0bGUge1xcbiAgY29sb3I6IHJnYigxNjUsIDE2NCwgMTY0KTtcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgbWFyZ2luLXRvcDogMjdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5zZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY0MTZjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcblxcbi5jYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBjb2xvcjogIzgyNmM5YjtcXG4gIG1hcmdpbjogMjVweCAxMHB4IDNweCAwO1xcbn1cXG5cXG4uY2FydCA+IGRpdiB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNhcnQgPiBkaXY6aG92ZXIge1xcbiAgY29sb3I6ICMwNmQ1NjA7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi53YWxsZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvaW5JbWFnZSB7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG5cXG4uY29pbmFnZSB7XFxuICBjb2xvcjogIzgzNjk5ZjtcXG4gIG1hcmdpbi10b3A6IDI3LjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jb2luYWdlOmhvdmVyIHtcXG4gIGNvbG9yOiAjZDVhZjA2O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaXRlbVByZXNlbnRhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBoZWlnaHQ6IDYyNXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2FydENvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGhlaWdodDogMjU1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jYXJ0VGFibGUge1xcbiAgLyptYXJnaW4tdG9wOiAtOTAwcHg7Ki9cXG4gIC8qbWFyZ2luLWxlZnQ6IC0xMDVweDsqL1xcbiAgLyp3aWR0aDogNTAwcHg7Ki9cXG4gIC8qaGVpZ2h0OiA3MjVweDsqL1xcbiAgLypvdmVyZmxvdzogc2Nyb2xsOyovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHllbGxvdztcXG4gIGJvcmRlci10b3A6IDEycHggc29saWQgcmdiKDIyMywgMjIzLCAwKTtcXG4gIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCByZ2IoMTQ5LCAxNDksIDApO1xcbiAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG59XFxuXFxuLml0ZW1UYWJsZU1haW4ge1xcbn1cXG5cXG4uc3VidG90YWxBbXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zdWJHb2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmYjAwLCAjZmZkZDAwLCAjZmZhNjAwKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn0gLyogSGlkZSBzY3JvbGxiYXIgd2hlbiBub3Qgc2Nyb2xsaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5cXG4vKiBTaG93IHNjcm9sbGJhciB3aGVuIHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xcbiAgYmFja2dyb3VuZDogcmdiYSg4NCwgODAsIDgwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLyogRGFya2VuIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg3MSwgNjcsIDY3LCAwLjUpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6dmVydGljYWwge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciB0aHVtYiB3aGVuIG5vdCBob3ZlcmluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCw0REFBNEQ7RUFDNUQsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUUscUJBQXFCO0VBQ2xDLGFBQWE7RUFDYixrQ0FBa0MsRUFBRSxxQkFBcUI7RUFDekQsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQU87RUFDUCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7OztBQUlBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsdUNBQXVDO0VBQ3ZDLHlDQUF5QztFQUN6Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlFQUFpRTtFQUNqRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0QyxFQUFFLHNDQUFzQztBQUN4QztFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0NBQWtDO0FBQ3BDOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLDRDQUFvQztFQUFwQyxvQ0FBb0M7QUFDdEM7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLFVBQVU7RUFDVix5Q0FBaUM7RUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAgNzAlLCAjMmMwMTQ1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVXN1YWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkFwcERpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMjVzIGVhc2U7IC8qIGFkZGVkIHRyYW5zaXRpb24gKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yaWdodERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXFxuXFxuLnNlYXJjaEJhciB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgLyp3aWR0aDogNzA1cHg7Ki9cXG4gIGhlaWdodDogNDBweDtcXG4gIC8qbWFyZ2luLXRvcDogLTkxcHg7Ki9cXG4gIC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKm1hcmdpbi1sZWZ0OiAyMHB4OyovXFxufVxcblxcbi5kYmxDbGlja1RpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMTY1LCAxNjQsIDE2NCk7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIG1hcmdpbi10b3A6IDI3cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uc2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNDE2YztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5cXG4uY2FydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY29sb3I6ICM4MjZjOWI7XFxuICBtYXJnaW46IDI1cHggMTBweCAzcHggMDtcXG59XFxuXFxuLmNhcnQgPiBkaXYge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jYXJ0ID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiAjMDZkNTYwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4ud2FsbGV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb2luSW1hZ2Uge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXFxuLmNvaW5hZ2Uge1xcbiAgY29sb3I6ICM4MzY5OWY7XFxuICBtYXJnaW4tdG9wOiAyNy41cHg7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29pbmFnZTpob3ZlciB7XFxuICBjb2xvcjogI2Q1YWYwNjtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLml0ZW1QcmVzZW50YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiA2MjVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRDb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBoZWlnaHQ6IDI1NXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2FydFRhYmxlIHtcXG4gIC8qbWFyZ2luLXRvcDogLTkwMHB4OyovXFxuICAvKm1hcmdpbi1sZWZ0OiAtMTA1cHg7Ki9cXG4gIC8qd2lkdGg6IDUwMHB4OyovXFxuICAvKmhlaWdodDogNzI1cHg7Ki9cXG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCB5ZWxsb3c7XFxuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkIHJnYigyMjMsIDIyMywgMCk7XFxuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxufVxcblxcbi5pdGVtVGFibGVNYWluIHtcXG59XFxuXFxuLnN1YnRvdGFsQW10IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc3ViR29sZCB7XFxuICBmb250LXdlaWdodDogNTUwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmIwMCwgI2ZmZGQwMCwgI2ZmYTYwMCk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59IC8qIEhpZGUgc2Nyb2xsYmFyIHdoZW4gbm90IHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuLyogU2hvdyBzY3JvbGxiYXIgd2hlbiBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDgwLCA4MCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiBEYXJrZW4gc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDcxLCA2NywgNjcsIDAuNSk7XFxufVxcblxcbi8qIFJvdW5kZWQgY29ybmVycyBmb3Igc2Nyb2xsYmFyIHRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIHRodW1iIHdoZW4gbm90IGhvdmVyaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});