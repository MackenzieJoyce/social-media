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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Post = (param)=>{\n    let { post  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleDeletePost = async ()=>{\n        const postid = router.query.id;\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts/\".concat(postid), {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            backHome();\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    const backHome = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: post.username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeletePost,\n                children: \"Yes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: backHome,\n                children: \"No\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n// ctx = context object \nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(\"http://localhost:3000/api/posts/\".concat(id));\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF3QztBQUV4QyxNQUFNQyxPQUFPLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxtQkFBbUIsVUFBWTtRQUNqQyxNQUFNQyxTQUFTRixPQUFPRyxLQUFLLENBQUNDLEVBQUU7UUFDOUIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxtQ0FBMEMsT0FBUEosU0FBVTtnQkFDakVLLFFBQVE7WUFDWjtZQUNBQyxNQUFNO1lBQ05DO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRUEsTUFBTUgsV0FBVyxJQUFNO1FBQ25CVCxPQUFPYSxJQUFJLENBQUM7SUFDaEI7SUFFQSxxQkFDSTs7MEJBRUksOERBQUNDOzBCQUFJZixLQUFLZ0IsUUFBUTs7Ozs7OzBCQUNsQiw4REFBQ0M7MEJBQUdqQixLQUFLa0IsT0FBTzs7Ozs7OzBCQUNoQiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0U7Z0JBQU9DLFNBQVNsQjswQkFBa0I7Ozs7OzswQkFDbkMsOERBQUNpQjtnQkFBT0MsU0FBU1Y7MEJBQVU7Ozs7Ozs7O0FBR3ZDO0dBOUJNWDs7UUFDYUQsa0RBQVNBOzs7S0FEdEJDO0FBZ0NOLHdCQUF3QjtBQUN4QkEsS0FBS3NCLGVBQWUsR0FBRyxPQUFPQyxNQUFZO0lBQ3RDLE1BQU0sRUFBRWpCLEdBQUUsRUFBRSxHQUFHaUIsSUFBSWxCLEtBQUs7SUFFeEIsTUFBTUUsTUFBTSxNQUFNQyxNQUFNLG1DQUFzQyxPQUFIRjtJQUUzRCxNQUFNLEVBQUVrQixLQUFJLEVBQUUsR0FBRyxNQUFNakIsSUFBSWtCLElBQUk7SUFFL0IsT0FBTztRQUFFeEIsTUFBTXVCO0lBQUs7QUFDeEI7QUFFQSwrREFBZXhCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS9pbmRleC50c3g/NzYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdGlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQb3N0IGRlbGV0ZWQhJyk7XHJcbiAgICAgICAgICAgIGJhY2tIb21lKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBERUxFVEVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYWNrSG9tZSA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiBDcmVhdGUgbW9kYWwgKi99XHJcbiAgICAgICAgICAgIDxoND57cG9zdC51c2VybmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlPzwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVQb3N0fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtiYWNrSG9tZX0+Tm88L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBjdHggPSBjb250ZXh0IG9iamVjdCBcclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OmFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7aWR9YCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJoYW5kbGVEZWxldGVQb3N0IiwicG9zdGlkIiwicXVlcnkiLCJpZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYWxlcnQiLCJiYWNrSG9tZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJoNCIsInVzZXJuYW1lIiwicCIsImNvbnRlbnQiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});