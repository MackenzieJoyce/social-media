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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n// import Head from 'next/head';\n\n// import ExistingPosts from '../components/ExistingPosts';\n// import AddPost from './api/posts/add-post';\n// import { useState } from 'react';\n\n\n\nconst Home = (param)=>{\n    let { posts  } = param;\n    const blue = \"color: #3f51b5\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Existing Posts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: posts.map((post)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: post.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\".concat(post._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        variant: \"outlined\",\n                                        color: \"error\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\".concat(post._id, \"/edit\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        variant: \"contained\",\n                                        color: \"palette.primary.main\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, post._id, true, {\n                            fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Home;\nHome.getInitialProps = async ()=>{\n    const res = await fetch(\"http://localhost:3000/api/posts\");\n    const { data  } = await res.json();\n    return {\n        posts: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEM7QUFDQSwyREFBMkQ7QUFDM0QsOENBQThDO0FBQzlDLG9DQUFvQztBQUNQO0FBQ2tCO0FBQ0w7QUFHMUMsTUFBTUcsT0FBTyxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFO0lBQ3JCLE1BQU1DLE9BQU87SUFDYixxQkFDRTtrQkFJRSw0RUFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs4QkFDRUosTUFBTUssR0FBRyxDQUFDLENBQUNDLE9BQWM7d0JBQ3hCLHFCQUNFLDhEQUFDRjs0QkFBbUJHLFdBQVdWLHFFQUFXOzs4Q0FDeEMsOERBQUNZOzhDQUFJSCxLQUFLSSxRQUFROzs7Ozs7OENBRWxCLDhEQUFDQzs4Q0FBR0wsS0FBS00sT0FBTzs7Ozs7OzhDQUVoQiw4REFBQ2hCLGtEQUFJQTtvQ0FBQ2lCLE1BQU0sSUFBYSxPQUFUUCxLQUFLUSxHQUFHOzhDQUN0Qiw0RUFBQ2hCLDREQUFNQTt3Q0FBQ2lCLFNBQVE7d0NBQVdDLE9BQU07a0RBQVE7Ozs7Ozs7Ozs7OzhDQUszQyw4REFBQ3BCLGtEQUFJQTtvQ0FBQ2lCLE1BQU0sSUFBYSxPQUFUUCxLQUFLUSxHQUFHLEVBQUM7OENBQ3pCLDRFQUFDaEIsNERBQU1BO3dDQUFDaUIsU0FBUTt3Q0FBWUMsT0FBTTtrREFBdUI7Ozs7Ozs7Ozs7OzsyQkFaakRWLEtBQUtRLEdBQUc7Ozs7O29CQWlCdEI7Ozs7Ozs7Ozs7Ozs7QUFLVjtLQWxDTWY7QUFvQ05BLEtBQUtrQixlQUFlLEdBQUcsVUFBWTtJQUNqQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO0lBRS9CLE9BQU87UUFBRXJCLE9BQU9vQjtJQUFLO0FBQ3ZCO0FBRUEsK0RBQWVyQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG4vLyBpbXBvcnQgRXhpc3RpbmdQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL0V4aXN0aW5nUG9zdHMnO1xyXG4vLyBpbXBvcnQgQWRkUG9zdCBmcm9tICcuL2FwaS9wb3N0cy9hZGQtcG9zdCc7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuXHJcblxyXG5jb25zdCBIb21lID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGNvbnN0IGJsdWUgPSAnY29sb3I6ICMzZjUxYjUnO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogQ29tbWVudGVkIG91dCB3aGlsZSBJIG1ha2UgaXQgYSBtb2RhbC4uLiBGaWxlIG1vdmVkIGludG8gcGFnZXMvYXBpL3Bvc3RzICovfVxyXG4gICAgICB7LyogPEFkZFBvc3QgLz4gKi99XHJcbiAgICAgIHsvKiA8RXhpc3RpbmdQb3N0cyAvPiAqL31cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgyPkV4aXN0aW5nIFBvc3RzPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxoND57cG9zdC51c2VybmFtZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0Ll9pZH0vZWRpdGB9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwYWxldHRlLnByaW1hcnkubWFpblwiPkVkaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nPjwvaW1nPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMnKTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7IHBvc3RzOiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkJ1dHRvbiIsIkhvbWUiLCJwb3N0cyIsImJsdWUiLCJzZWN0aW9uIiwiaDIiLCJkaXYiLCJtYXAiLCJwb3N0IiwiY2xhc3NOYW1lIiwiY2FyZCIsImg0IiwidXNlcm5hbWUiLCJwIiwiY29udGVudCIsImhyZWYiLCJfaWQiLCJ2YXJpYW50IiwiY29sb3IiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});