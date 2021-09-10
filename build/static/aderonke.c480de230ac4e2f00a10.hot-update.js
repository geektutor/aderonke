webpackHotUpdate("aderonke",{

/***/ "./packages/rukky/src/components/Blog/DisplayBlogPage.js":
/*!***************************************************************!*\
  !*** ./packages/rukky/src/components/Blog/DisplayBlogPage.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/avatar */ \"./node_modules/@chakra-ui/avatar/dist/esm/index.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst DisplayBlogPage=({state})=>{const pageData=state.source.get(state.router.link);const post=state.source.post[pageData.id];const author=state.source.author[1];const date=state.source.post[pageData.id].date;let formattedDate=dayjs__WEBPACK_IMPORTED_MODULE_4___default()(date).format('MMM DD, YYYY');const content=state.source.post[pageData.id].content.rendered;console.log(pageData.id,author.name);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Box\"],{p:\"15px\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h2\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Text\"],{fontSize:\"25px\",fontWeight:\"600\",children:post.title.rendered})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"],{alignItems:\"center\",gridGap:\"15px\",p:\"10px\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"],{name:author.name,src:author.avatar_urls[96]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Text\"],{color:\"grey\",fontWeight:\"400\",children:[author.name,\" - \",formattedDate]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__[\"Box\"],{dangerouslySetInnerHTML:{__html:content}})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(DisplayBlogPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ydWtreS9zcmMvY29tcG9uZW50cy9CbG9nL0Rpc3BsYXlCbG9nUGFnZS5qcz82YmNkIl0sIm5hbWVzIjpbIkRpc3BsYXlCbG9nUGFnZSIsInN0YXRlIiwicGFnZURhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwicG9zdCIsImlkIiwiYXV0aG9yIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJkYXlqcyIsImZvcm1hdCIsImNvbnRlbnQiLCJyZW5kZXJlZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwidGl0bGUiLCJhdmF0YXJfdXJscyIsIl9faHRtbCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsS0FBTUEsZ0JBQWUsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQ25DLEtBQU1DLFNBQVEsQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFqQixDQUNBLEtBQU1DLEtBQUksQ0FBR04sS0FBSyxDQUFDRSxNQUFOLENBQWFJLElBQWIsQ0FBa0JMLFFBQVEsQ0FBQ00sRUFBM0IsQ0FBYixDQUNBLEtBQU1DLE9BQU0sQ0FBR1IsS0FBSyxDQUFDRSxNQUFOLENBQWFNLE1BQWIsQ0FBb0IsQ0FBcEIsQ0FBZixDQUNBLEtBQU1DLEtBQUksQ0FBR1QsS0FBSyxDQUFDRSxNQUFOLENBQWFJLElBQWIsQ0FBa0JMLFFBQVEsQ0FBQ00sRUFBM0IsRUFBK0JFLElBQTVDLENBQ0EsR0FBSUMsY0FBYSxDQUFHQyw0Q0FBSyxDQUFDRixJQUFELENBQUwsQ0FBWUcsTUFBWixDQUFtQixjQUFuQixDQUFwQixDQUNBLEtBQU1DLFFBQU8sQ0FBR2IsS0FBSyxDQUFDRSxNQUFOLENBQWFJLElBQWIsQ0FBa0JMLFFBQVEsQ0FBQ00sRUFBM0IsRUFBK0JNLE9BQS9CLENBQXVDQyxRQUF2RCxDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWYsUUFBUSxDQUFDTSxFQUFyQixDQUF5QkMsTUFBTSxDQUFDUyxJQUFoQyxFQUNBLE1BQ0kseUVBQUMscURBQUQsRUFBSyxDQUFDLENBQUMsTUFBUCxXQUNJLHNGQUNJLHVFQUFDLHNEQUFELEVBQU0sUUFBUSxDQUFDLE1BQWYsQ0FBc0IsVUFBVSxDQUFDLEtBQWpDLFVBQ0tYLElBQUksQ0FBQ1ksS0FBTCxDQUFXSixRQURoQixFQURKLEVBREosQ0FNSSx3RUFBQyxzREFBRCxFQUFNLFVBQVUsQ0FBQyxRQUFqQixDQUEwQixPQUFPLENBQUMsTUFBbEMsQ0FBeUMsQ0FBQyxDQUFDLE1BQTNDLFdBQ0ksdUVBQUMsd0RBQUQsRUFBUSxJQUFJLENBQUVOLE1BQU0sQ0FBQ1MsSUFBckIsQ0FBMkIsR0FBRyxDQUFFVCxNQUFNLENBQUNXLFdBQVAsQ0FBbUIsRUFBbkIsQ0FBaEMsRUFESixDQUVJLHdFQUFDLHNEQUFELEVBQU0sS0FBSyxDQUFDLE1BQVosQ0FBbUIsVUFBVSxDQUFDLEtBQTlCLFdBQXFDWCxNQUFNLENBQUNTLElBQTVDLE9BQXFEUCxhQUFyRCxHQUZKLEdBTkosQ0FVSSx1RUFBQyxxREFBRCxFQUFLLHVCQUF1QixDQUFFLENBQUNVLE1BQU0sQ0FBRVAsT0FBVCxDQUE5QixFQVZKLEdBREosQ0FjSCxDQXRCRCxDQXdCZVEsdUhBQU8sQ0FBQ3RCLGVBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9ydWtreS9zcmMvY29tcG9uZW50cy9CbG9nL0Rpc3BsYXlCbG9nUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2Zyb250aXR5J1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCdcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQGNoYWtyYS11aS9hdmF0YXInXHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuXHJcbmNvbnN0IERpc3BsYXlCbG9nUGFnZSA9ICh7IHN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VEYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcclxuICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2UucG9zdFtwYWdlRGF0YS5pZF1cclxuICAgIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbMV1cclxuICAgIGNvbnN0IGRhdGUgPSBzdGF0ZS5zb3VyY2UucG9zdFtwYWdlRGF0YS5pZF0uZGF0ZVxyXG4gICAgbGV0IGZvcm1hdHRlZERhdGUgPSBkYXlqcyhkYXRlKS5mb3JtYXQoJ01NTSBERCwgWVlZWScpO1xyXG4gICAgY29uc3QgY29udGVudCA9IHN0YXRlLnNvdXJjZS5wb3N0W3BhZ2VEYXRhLmlkXS5jb250ZW50LnJlbmRlcmVkXHJcbiAgICBjb25zb2xlLmxvZyhwYWdlRGF0YS5pZCwgYXV0aG9yLm5hbWUpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggcD1cIjE1cHhcIj5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyNXB4XCIgZm9udFdlaWdodD1cIjYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlLnJlbmRlcmVkfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ3JpZEdhcD1cIjE1cHhcIiBwPVwiMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gc3JjPXthdXRob3IuYXZhdGFyX3VybHNbOTZdfS8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyZXlcIiBmb250V2VpZ2h0PVwiNDAwXCI+e2F1dGhvci5uYW1lfSAtIHtmb3JtYXR0ZWREYXRlfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8Qm94IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0+PC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRGlzcGxheUJsb2dQYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/rukky/src/components/Blog/DisplayBlogPage.js\n");

/***/ })

})