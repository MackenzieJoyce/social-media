/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/[id]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cmacki%5CDocuments%5CCoding%5CPersonal%20Projects%5Csocial-media%5Cpages%5C%5Bid%5D%5Cindex.tsx&page=%2F%5Bid%5D!":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cmacki%5CDocuments%5CCoding%5CPersonal%20Projects%5Csocial-media%5Cpages%5C%5Bid%5D%5Cindex.tsx&page=%2F%5Bid%5D! ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[id]\",\n      function () {\n        return __webpack_require__(/*! ./pages/[id]/index.tsx */ \"./pages/[id]/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[id]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNtYWNraSU1Q0RvY3VtZW50cyU1Q0NvZGluZyU1Q1BlcnNvbmFsJTIwUHJvamVjdHMlNUNzb2NpYWwtbWVkaWElNUNwYWdlcyU1QyU1QmlkJTVEJTVDaW5kZXgudHN4JnBhZ2U9JTJGJTVCaWQlNUQhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsc0RBQXdCO0FBQy9DO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8zYTg0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvW2lkXVwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvW2lkXS9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1tpZF1cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cmacki%5CDocuments%5CCoding%5CPersonal%20Projects%5Csocial-media%5Cpages%5C%5Bid%5D%5Cindex.tsx&page=%2F%5Bid%5D!\n"));

/***/ }),

/***/ "./pages/[id]/index.tsx":
/*!******************************!*\
  !*** ./pages/[id]/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Post = (param)=>{\n    let { post  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleDeletePost = async ()=>{\n        const postid = router.query.id;\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts/\".concat(postid), {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: post.username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeletePost,\n                children: \"Yes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"No\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n// ctx = context object \nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(\"http://localhost:3000/api/posts/\".concat(id));\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF3QztBQUV4QyxNQUFNQyxPQUFPLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ2xCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxtQkFBbUIsVUFBWTtRQUNqQyxNQUFNQyxTQUFTRixPQUFPRyxLQUFLLENBQUNDLEVBQUU7UUFDOUIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxtQ0FBMEMsT0FBUEosU0FBVTtnQkFDakVLLFFBQVE7WUFDWjtZQUNBQyxNQUFNO1lBQ05SLE9BQU9TLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFHQSxxQkFDSTs7MEJBRUksOERBQUNDOzBCQUFJZCxLQUFLZSxRQUFROzs7Ozs7MEJBQ2xCLDhEQUFDQzswQkFBR2hCLEtBQUtpQixPQUFPOzs7Ozs7MEJBQ2hCLDhEQUFDRDswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRTtnQkFBT0MsU0FBU2pCOzBCQUFrQjs7Ozs7OzBCQUNuQyw4REFBQ2dCOzBCQUFPOzs7Ozs7OztBQUdwQjtHQTNCTW5COztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUE2Qk4sd0JBQXdCO0FBQ3hCQSxLQUFLcUIsZUFBZSxHQUFHLE9BQU9DLE1BQVk7SUFDdEMsTUFBTSxFQUFFaEIsR0FBRSxFQUFFLEdBQUdnQixJQUFJakIsS0FBSztJQUV4QixNQUFNRSxNQUFNLE1BQU1DLE1BQU0sbUNBQXNDLE9BQUhGO0lBRTNELE1BQU0sRUFBRWlCLEtBQUksRUFBRSxHQUFHLE1BQU1oQixJQUFJaUIsSUFBSTtJQUUvQixPQUFPO1FBQUV2QixNQUFNc0I7SUFBSztBQUN4QjtBQUVBLCtEQUFldkIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9baWRdL2luZGV4LnRzeD83NjAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0aWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMvJHtwb3N0aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWxlcnQoJ1Bvc3QgZGVsZXRlZCEnKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIERFTEVURVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiBDcmVhdGUgbW9kYWwgKi99XHJcbiAgICAgICAgICAgIDxoND57cG9zdC51c2VybmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlPzwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVQb3N0fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5ObzwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGN0eCA9IGNvbnRleHQgb2JqZWN0IFxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6YW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMvJHtpZH1gKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcG9zdDogZGF0YSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQb3N0IiwicG9zdCIsInJvdXRlciIsImhhbmRsZURlbGV0ZVBvc3QiLCJwb3N0aWQiLCJxdWVyeSIsImlkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJhbGVydCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoNCIsInVzZXJuYW1lIiwicCIsImNvbnRlbnQiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cmacki%5CDocuments%5CCoding%5CPersonal%20Projects%5Csocial-media%5Cpages%5C%5Bid%5D%5Cindex.tsx&page=%2F%5Bid%5D!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);