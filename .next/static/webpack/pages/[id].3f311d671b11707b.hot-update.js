"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id]/index.tsx":
/*!******************************!*\
  !*** ./pages/[id]/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Post = (param)=>{\n    let { post  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleDeletePost = async ()=>{\n        const postid = router.query.id;\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts/\".concat(postid), {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            backHome();\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    const backHome = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: post.username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeletePost,\n                children: \"Yes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: backHome,\n                children: \"No\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n// ctx = context object \nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(\"http://localhost:3000/api/posts/\".concat(id));\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF3QztBQUV4QyxNQUFNQyxPQUFPLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxtQkFBbUIsVUFBWTtRQUNqQyxNQUFNQyxTQUFTRixPQUFPRyxLQUFLLENBQUNDLEVBQUU7UUFDOUIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxtQ0FBMEMsT0FBUEosU0FBVTtnQkFDakVLLFFBQVE7WUFDWjtZQUNBQyxNQUFNO1lBQ05DO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRUEsTUFBTUgsV0FBVyxJQUFNO1FBQ25CVCxPQUFPYSxJQUFJLENBQUM7SUFDaEI7SUFHQSxxQkFDSTs7MEJBRUksOERBQUNDOzBCQUFJZixLQUFLZ0IsUUFBUTs7Ozs7OzBCQUNsQiw4REFBQ0M7MEJBQUdqQixLQUFLa0IsT0FBTzs7Ozs7OzBCQUNoQiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0U7Z0JBQU9DLFNBQVNsQjswQkFBa0I7Ozs7OzswQkFDbkMsOERBQUNpQjtnQkFBT0MsU0FBU1Y7MEJBQVU7Ozs7Ozs7O0FBR3ZDO0dBL0JNWDs7UUFDYUQsa0RBQVNBOzs7S0FEdEJDO0FBaUNOLHdCQUF3QjtBQUN4QkEsS0FBS3NCLGVBQWUsR0FBRyxPQUFPQyxNQUFZO0lBQ3RDLE1BQU0sRUFBRWpCLEdBQUUsRUFBRSxHQUFHaUIsSUFBSWxCLEtBQUs7SUFFeEIsTUFBTUUsTUFBTSxNQUFNQyxNQUFNLG1DQUFzQyxPQUFIRjtJQUUzRCxNQUFNLEVBQUVrQixLQUFJLEVBQUUsR0FBRyxNQUFNakIsSUFBSWtCLElBQUk7SUFFL0IsT0FBTztRQUFFeEIsTUFBTXVCO0lBQUs7QUFDeEI7QUFFQSwrREFBZXhCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS9pbmRleC50c3g/NzYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdGlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQb3N0IGRlbGV0ZWQhJyk7XHJcbiAgICAgICAgICAgIGJhY2tIb21lKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBERUxFVEVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYWNrSG9tZSA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogQ3JlYXRlIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8aDQ+e3Bvc3QudXNlcm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZT88L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlUG9zdH0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YmFja0hvbWV9Pk5vPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gY3R4ID0gY29udGV4dCBvYmplY3QgXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDphbnkpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGN0eC5xdWVyeTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cy8ke2lkfWApO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlBvc3QiLCJwb3N0Iiwicm91dGVyIiwiaGFuZGxlRGVsZXRlUG9zdCIsInBvc3RpZCIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImFsZXJ0IiwiYmFja0hvbWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiaDQiLCJ1c2VybmFtZSIsInAiLCJjb250ZW50IiwiYnV0dG9uIiwib25DbGljayIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});