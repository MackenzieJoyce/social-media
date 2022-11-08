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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// import Head from 'next/head';\n\n\n// import ExistingPosts from '../components/ExistingPosts';\n// import AddPost from './api/posts/add-post';\n// import { useState } from 'react';\n\n\nconst Home = (param)=>{\n    let { posts  } = param;\n    const handleDeletePost = async ()=>{\n        const postid = router.query.id;\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts/\".concat(postid), {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: posts.map((post)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: post.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/api/posts/\".concat(post._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleDeletePost,\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Edit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, post._id, true, {\n                            fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nHome.getInitialProps = async ()=>{\n    const res = await fetch(\"http://localhost:3000/api/posts\");\n    const { data  } = await res.json();\n    return {\n        posts: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEM7QUFBMEM7QUFDMUMsMkRBQTJEO0FBQzNELDhDQUE4QztBQUM5QyxvQ0FBb0M7QUFDUDtBQUNrQjtBQUUvQyxNQUFNRyxPQUFPLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFFckIsTUFBTUMsbUJBQW1CLFVBQVk7UUFDbkMsTUFBTUMsU0FBU0MsT0FBT0MsS0FBSyxDQUFDQyxFQUFFO1FBQzlCLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sbUNBQTBDLE9BQVBMLFNBQVU7Z0JBQ2pFTSxRQUFRO1lBQ1o7WUFDQUMsTUFBTTtZQUNOTixPQUFPTyxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRUUscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdqQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ21COzBCQUNDLDRFQUFDckIsMERBQU1BOzs7Ozs7Ozs7OzBCQUdULDhEQUFDc0I7MEJBSUMsNEVBQUNDOzhCQUNFbkIsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDQyxPQUFjO3dCQUN4QixxQkFDRSw4REFBQ1A7NEJBQW1CQyxXQUFXakIscUVBQVc7OzhDQUN4Qyw4REFBQ3lCOzhDQUFJRixLQUFLRyxRQUFROzs7Ozs7OENBRWxCLDhEQUFDQzs4Q0FBR0osS0FBS0ssT0FBTzs7Ozs7OzhDQUVoQiw4REFBQzdCLGtEQUFJQTtvQ0FBQzhCLE1BQU0sY0FBdUIsT0FBVE4sS0FBS08sR0FBRzs4Q0FDaEMsNEVBQUNDO3dDQUFPQyxTQUFTN0I7a0RBQWtCOzs7Ozs7Ozs7Ozs4Q0FHckMsOERBQUM0Qjs4Q0FBTzs7Ozs7OzsyQkFUQVIsS0FBS08sR0FBRzs7Ozs7b0JBYXRCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0tBOUNNN0I7QUFnRE5BLEtBQUtnQyxlQUFlLEdBQUcsVUFBWTtJQUNqQyxNQUFNekIsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLE1BQU0sRUFBRXlCLEtBQUksRUFBRSxHQUFHLE1BQU0xQixJQUFJMkIsSUFBSTtJQUUvQixPQUFPO1FBQUVqQyxPQUFPZ0M7SUFBSztBQUN2QjtBQUVBLCtEQUFlakMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuLy8gaW1wb3J0IEV4aXN0aW5nUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9FeGlzdGluZ1Bvc3RzJztcclxuLy8gaW1wb3J0IEFkZFBvc3QgZnJvbSAnLi9hcGkvcG9zdHMvYWRkLXBvc3QnO1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBwb3N0cyB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0aWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdGlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsZXJ0KCdQb3N0IGRlbGV0ZWQhJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBERUxFVEVcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHsvKiBDb21tZW50ZWQgb3V0IHdoaWxlIEkgbWFrZSBpdCBhIG1vZGFsLi4uIEZpbGUgbW92ZWQgaW50byBwYWdlcy9hcGkvcG9zdHMgKi99XHJcbiAgICAgICAgey8qIDxBZGRQb3N0IC8+ICovfVxyXG4gICAgICAgIHsvKiA8RXhpc3RpbmdQb3N0cyAvPiAqL31cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0Ll9pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QudXNlcm5hbWV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FwaS9wb3N0cy8ke3Bvc3QuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZVBvc3R9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWc+PC9pbWc+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMnKTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7IHBvc3RzOiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTGluayIsInN0eWxlcyIsIkhvbWUiLCJwb3N0cyIsImhhbmRsZURlbGV0ZVBvc3QiLCJwb3N0aWQiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJhbGVydCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZWFkZXIiLCJtYWluIiwic2VjdGlvbiIsIm1hcCIsInBvc3QiLCJjYXJkIiwiaDQiLCJ1c2VybmFtZSIsInAiLCJjb250ZW50IiwiaHJlZiIsIl9pZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});