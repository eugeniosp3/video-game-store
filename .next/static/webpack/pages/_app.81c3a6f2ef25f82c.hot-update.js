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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n}\\n\\n.mainAppDiv {\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n}\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  width: 705px;\\n  height: 40px;\\n  margin-top: -91px;\\n  margin-bottom: 10px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  margin-left: 20px;\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 130px;\\n  width: 600px;\\n  height: 955px;\\n}\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  width: 500px;\\n  margin-top: 25px;\\n  margin-left: -110px;\\n  margin-bottom: 3px;\\n}\\n\\n.cartHolder {\\n  display: flex;\\n  flex-direction: row;\\n  cursor: crosshair;\\n}\\n\\n.cartAmount {\\n  color: #826c9b;\\n  margin-top: 27.5px;\\n  font-size: 14px;\\n}\\n\\n.cartAmount:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  margin-top: -900px;\\n  margin-left: -105px;\\n  width: 500px;\\n  height: 725px;\\n  overflow: scroll;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  -webkit-transition: background 0.3s ease-out;\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  -webkit-transition: opacity 0.3s ease-out;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,YAAY;EACZ,WAAW;EACX,4DAA4D;EAC5D,gCAAgC;AAClC;;AAEA;EACE,WAAW,EAAE,qBAAqB;EAClC,aAAa;EACb,kCAAkC,EAAE,qBAAqB;EACzD,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,gCAAgC;EAChC,uCAAuC;EACvC,yCAAyC;EACzC,wCAAwC;AAC1C;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iEAAiE;EACjE,6BAA6B;EAC7B,qBAAqB;EACrB,oCAAoC;AACtC,EAAE,sCAAsC;AACxC;EACE,UAAU;EACV,WAAW;EACX,kCAAkC;AACpC;;AAEA,kCAAkC;AAClC;EACE,iCAAiC;EACjC,mBAAmB;EACnB,kCAAkC;EAClC,4CAAoC;EAApC,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC;EACE,iCAAiC;AACnC;;AAEA,wCAAwC;AACxC;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA,2CAA2C;AAC3C;EACE,UAAU;EACV,yCAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n}\\n\\n.mainAppDiv {\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n}\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  width: 705px;\\n  height: 40px;\\n  margin-top: -91px;\\n  margin-bottom: 10px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  margin-left: 20px;\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 130px;\\n  width: 600px;\\n  height: 955px;\\n}\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  width: 500px;\\n  margin-top: 25px;\\n  margin-left: -110px;\\n  margin-bottom: 3px;\\n}\\n\\n.cartHolder {\\n  display: flex;\\n  flex-direction: row;\\n  cursor: crosshair;\\n}\\n\\n.cartAmount {\\n  color: #826c9b;\\n  margin-top: 27.5px;\\n  font-size: 14px;\\n}\\n\\n.cartAmount:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  margin-top: -900px;\\n  margin-left: -105px;\\n  width: 500px;\\n  height: 725px;\\n  overflow: scroll;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxpQkFBaUIsZ0JBQWdCLGlFQUFpRSx1Q0FBdUMsR0FBRyxpQkFBaUIsaUJBQWlCLHdDQUF3Qyx3Q0FBd0MsZ0RBQWdELEtBQUssZ0JBQWdCLCtCQUErQixtQkFBbUIsaUJBQWlCLHNCQUFzQix3QkFBd0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLHNCQUFzQixHQUFHLG9CQUFvQiw4QkFBOEIsc0JBQXNCLHFCQUFxQix3QkFBd0Isb0JBQW9CLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsd0JBQXdCLHdCQUF3QixxQ0FBcUMsa0NBQWtDLG1CQUFtQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLGVBQWUsa0JBQWtCLDJCQUEyQix1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcsa0JBQWtCLCtCQUErQixnQ0FBZ0MsaUJBQWlCLGlCQUFpQixxQkFBcUIsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLHNCQUFzQixHQUFHLGlCQUFpQixtQkFBbUIsdUJBQXVCLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIsaUJBQWlCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGNBQWMsbUJBQW1CLHVCQUF1QixzQkFBc0Isb0JBQW9CLHNCQUFzQixHQUFHLG9C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YSxrQkFBa0IsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGNBQWMsbUJBQW1CLHVCQUF1QixzQkFBc0Isb0JBQW9CLHNCQUFzQixHQUFHLG9CQUFvQixtQkFBbUIsaUJBQWlCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QiwrQkFBK0Isb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLCtCQUErQixvQkFBb0IsaUJBQWlCLEdBQUcsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsaUJBQWlCLGtCQUFrQixxQkFBcUIscUNBQXFDLDRDQUE0Qyw4Q0FBOEMsNkNBQTZDLEdBQUcsb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsc0JBQXNCLEdBQUcsY0FBYyxxQkFBcUIsc0VBQXNFLGtDQUFrQywwQkFBMEIseUNBQXlDLElBQUksOERBQThELGVBQWUsZ0JBQWdCLHVDQUF1QyxHQUFHLDZFQUE2RSxzQ0FBc0Msd0JBQXdCLHVDQUF1Qyx5Q0FBeUMsR0FBRyxxRkFBcUYsc0NBQXNDLEdBQUcsbUZBQW1GLGlDQUFpQyx3QkFBd0IsdUNBQXVDLEdBQUcsc0ZBQXNGLGVBQWUsc0NBQXNDLEdBQUcsOENBQThDLGVBQWUsR0FBRyxxQkFBcUI7QUFDajJSO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzA0ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAgNzAlLCAjMmMwMTQ1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVXN1YWxcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWFpbkFwcERpdiB7XFxuICB3aWR0aDogMTAwJTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMjVzIGVhc2U7IC8qIGFkZGVkIHRyYW5zaXRpb24gKi9cXG4gIC8qYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbn1cXG5cXG4uc2VhcmNoQmFyIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICB3aWR0aDogNzA1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAtOTFweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGJsQ2xpY2tUaXRsZSB7XFxuICBjb2xvcjogcmdiKDE2NSwgMTY0LCAxNjQpO1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnNlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjQxNmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLnJpZ2h0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA5NTVweDtcXG59XFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcblxcbi5jYXJ0SG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jYXJ0QW1vdW50IHtcXG4gIGNvbG9yOiAjODI2YzliO1xcbiAgbWFyZ2luLXRvcDogMjcuNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY2FydEFtb3VudDpob3ZlciB7XFxuICBjb2xvcjogIzA2ZDU2MDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLndhbGxldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29pbkltYWdlIHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbi5jb2luYWdlIHtcXG4gIGNvbG9yOiAjODM2OTlmO1xcbiAgbWFyZ2luLXRvcDogMjcuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvaW5hZ2U6aG92ZXIge1xcbiAgY29sb3I6ICNkNWFmMDY7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5pdGVtUHJlc2VudGF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGhlaWdodDogNjI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jYXJ0Q29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiAyNTVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRUYWJsZSB7XFxuICBtYXJnaW4tdG9wOiAtOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogLTEwNXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA3MjVweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHllbGxvdztcXG4gIGJvcmRlci10b3A6IDEycHggc29saWQgcmdiKDIyMywgMjIzLCAwKTtcXG4gIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCByZ2IoMTQ5LCAxNDksIDApO1xcbiAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG59XFxuXFxuLml0ZW1UYWJsZU1haW4ge1xcbn1cXG5cXG4uc3VidG90YWxBbXQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zdWJHb2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmYjAwLCAjZmZkZDAwLCAjZmZhNjAwKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn0gLyogSGlkZSBzY3JvbGxiYXIgd2hlbiBub3Qgc2Nyb2xsaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5cXG4vKiBTaG93IHNjcm9sbGJhciB3aGVuIHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xcbiAgYmFja2dyb3VuZDogcmdiYSg4NCwgODAsIDgwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLyogRGFya2VuIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg3MSwgNjcsIDY3LCAwLjUpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6dmVydGljYWwge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciB0aHVtYiB3aGVuIG5vdCBob3ZlcmluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCw0REFBNEQ7RUFDNUQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVyxFQUFFLHFCQUFxQjtFQUNsQyxhQUFhO0VBQ2Isa0NBQWtDLEVBQUUscUJBQXFCO0VBQ3pELHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2Qyx5Q0FBeUM7RUFDekMsd0NBQXdDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpRUFBaUU7RUFDakUsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEMsRUFBRSxzQ0FBc0M7QUFDeEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyw0Q0FBb0M7RUFBcEMsb0NBQW9DO0FBQ3RDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxVQUFVO0VBQ1YseUNBQWlDO0VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwIDcwJSwgIzJjMDE0NSk7XFxuICBmb250LWZhbWlseTogXFxcIlVzdWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW5BcHBEaXYge1xcbiAgd2lkdGg6IDEwMCU7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjI1cyBlYXNlOyAvKiBhZGRlZCB0cmFuc2l0aW9uICovXFxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG59XFxuXFxuLnNlYXJjaEJhciB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgd2lkdGg6IDcwNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogLTkxcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmRibENsaWNrVGl0bGUge1xcbiAgY29sb3I6IHJnYigxNjUsIDE2NCwgMTY0KTtcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgbWFyZ2luLXRvcDogMjdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5zZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY0MTZjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5yaWdodERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogOTU1cHg7XFxufVxcblxcbi5jYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICBtYXJnaW4tbGVmdDogLTExMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4uY2FydEhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2FydEFtb3VudCB7XFxuICBjb2xvcjogIzgyNmM5YjtcXG4gIG1hcmdpbi10b3A6IDI3LjVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNhcnRBbW91bnQ6aG92ZXIge1xcbiAgY29sb3I6ICMwNmQ1NjA7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi53YWxsZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvaW5JbWFnZSB7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG5cXG4uY29pbmFnZSB7XFxuICBjb2xvcjogIzgzNjk5ZjtcXG4gIG1hcmdpbi10b3A6IDI3LjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jb2luYWdlOmhvdmVyIHtcXG4gIGNvbG9yOiAjZDVhZjA2O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaXRlbVByZXNlbnRhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBoZWlnaHQ6IDYyNXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2FydENvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGhlaWdodDogMjU1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jYXJ0VGFibGUge1xcbiAgbWFyZ2luLXRvcDogLTkwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMDVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNzI1cHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCB5ZWxsb3c7XFxuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkIHJnYigyMjMsIDIyMywgMCk7XFxuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxufVxcblxcbi5pdGVtVGFibGVNYWluIHtcXG59XFxuXFxuLnN1YnRvdGFsQW10IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc3ViR29sZCB7XFxuICBmb250LXdlaWdodDogNTUwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmIwMCwgI2ZmZGQwMCwgI2ZmYTYwMCk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59IC8qIEhpZGUgc2Nyb2xsYmFyIHdoZW4gbm90IHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuLyogU2hvdyBzY3JvbGxiYXIgd2hlbiBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDgwLCA4MCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiBEYXJrZW4gc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDcxLCA2NywgNjcsIDAuNSk7XFxufVxcblxcbi8qIFJvdW5kZWQgY29ybmVycyBmb3Igc2Nyb2xsYmFyIHRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIHRodW1iIHdoZW4gbm90IGhvdmVyaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});