"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n\n\n\n\nconst Home = (param)=>{\n    let { posts  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Existing Posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().postFeed),\n                children: posts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: post.username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 14,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: post.content\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 16,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\".concat(post._id, \"/edit\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            variant: \"contained\",\n                                            color: \"info\",\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\".concat(post._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            variant: \"outlined\",\n                                            color: \"error\",\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, post._id, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Home;\nHome.getInitialProps = async ()=>{\n    const res = await fetch(\"http://localhost:3000/api/posts\");\n    const { data  } = await res.json();\n    return {\n        posts: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNrQjtBQUNMO0FBRTFDLE1BQU1HLE9BQU8sU0FBZTtRQUFkLEVBQUVDLE1BQUssRUFBRTtJQUNyQixxQkFDSSw4REFBQ0M7UUFBU0MsV0FBV0wsMEVBQWdCOzswQkFDbkMsOERBQUNPOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFJSCxXQUFXTCx5RUFBZTswQkFDNUJHLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxPQUFjO29CQUN4QixxQkFDRSw4REFBQ0g7d0JBQW1CSCxXQUFXTCxxRUFBVzs7MENBQ3hDLDhEQUFDUTs7a0RBQ0MsOERBQUNLO2tEQUFJRixLQUFLRyxRQUFROzs7Ozs7a0RBRWxCLDhEQUFDQztrREFBR0osS0FBS0ssT0FBTzs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ1I7Z0NBQUlILFdBQVdMLHVFQUFhOztrREFDM0IsOERBQUNELGtEQUFJQTt3Q0FBQ21CLE1BQU0sSUFBYSxPQUFUUCxLQUFLUSxHQUFHLEVBQUM7a0RBQ3ZCLDRFQUFDbEIsNERBQU1BOzRDQUFDbUIsU0FBUTs0Q0FBWUMsT0FBTTtzREFBTzs7Ozs7Ozs7Ozs7a0RBSzNDLDhEQUFDdEIsa0RBQUlBO3dDQUFDbUIsTUFBTSxJQUFhLE9BQVRQLEtBQUtRLEdBQUc7a0RBQ3RCLDRFQUFDbEIsNERBQU1BOzRDQUFDbUIsU0FBUTs0Q0FBV0MsT0FBTTtzREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWZyQ1YsS0FBS1EsR0FBRzs7Ozs7Z0JBc0J0Qjs7Ozs7Ozs7Ozs7O0FBSVY7S0FqQ01qQjtBQW1DTkEsS0FBS29CLGVBQWUsR0FBRyxVQUFZO0lBQ2pDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7SUFFL0IsT0FBTztRQUFFdkIsT0FBT3NCO0lBQUs7QUFDdkI7QUFFQSwrREFBZXZCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcblxyXG5jb25zdCBIb21lID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxoMj5FeGlzdGluZyBQb3N0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0RmVlZH0+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5faWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg0Pntwb3N0LnVzZXJuYW1lfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuQm94fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QuX2lkfS9lZGl0YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzJyk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4geyBwb3N0czogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJCdXR0b24iLCJIb21lIiwicG9zdHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJkaXYiLCJwb3N0RmVlZCIsIm1hcCIsInBvc3QiLCJjYXJkIiwiaDQiLCJ1c2VybmFtZSIsInAiLCJjb250ZW50IiwiYnRuQm94IiwiaHJlZiIsIl9pZCIsInZhcmlhbnQiLCJjb2xvciIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});