"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id]/index.tsx":
/*!******************************!*\
  !*** ./pages/[id]/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Post = ({ post  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleDeletePost = async ()=>{\n        const postid = router.query.id;\n        try {\n            const res = await fetch(`http://localhost:3000/api/posts/${postid}`, {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            backHome();\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    const backHome = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: post.username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeletePost,\n                children: \"Yes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: backHome,\n                children: \"No\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n// ctx = context object \nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(`http://localhost:3000/api/posts/${id}`);\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXhDLE1BQU1DLE9BQU8sQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUN2QixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUksbUJBQW1CLFVBQVk7UUFDakMsTUFBTUMsU0FBU0YsT0FBT0csS0FBSyxDQUFDQyxFQUFFO1FBQzlCLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRUosT0FBTyxDQUFDLEVBQUU7Z0JBQ2pFSyxRQUFRO1lBQ1o7WUFDQUMsTUFBTTtZQUNOQztRQUNKLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUVBLE1BQU1ILFdBQVcsSUFBTTtRQUNuQlQsT0FBT2EsSUFBSSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0k7OzBCQUVJLDhEQUFDQzswQkFBSWYsS0FBS2dCLFFBQVE7Ozs7OzswQkFDbEIsOERBQUNDOzBCQUFHakIsS0FBS2tCLE9BQU87Ozs7OzswQkFDaEIsOERBQUNEOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNFO2dCQUFPQyxTQUFTbEI7MEJBQWtCOzs7Ozs7MEJBQ25DLDhEQUFDaUI7Z0JBQU9DLFNBQVNWOzBCQUFVOzs7Ozs7OztBQUd2QztBQUVBLHdCQUF3QjtBQUN4QlgsS0FBS3NCLGVBQWUsR0FBRyxPQUFPQyxNQUFZO0lBQ3RDLE1BQU0sRUFBRWpCLEdBQUUsRUFBRSxHQUFHaUIsSUFBSWxCLEtBQUs7SUFFeEIsTUFBTUUsTUFBTSxNQUFNQyxNQUFNLENBQUMsZ0NBQWdDLEVBQUVGLEdBQUcsQ0FBQztJQUUvRCxNQUFNLEVBQUVrQixLQUFJLEVBQUUsR0FBRyxNQUFNakIsSUFBSWtCLElBQUk7SUFFL0IsT0FBTztRQUFFeEIsTUFBTXVCO0lBQUs7QUFDeEI7QUFFQSxpRUFBZXhCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9baWRdL2luZGV4LnRzeD83NjAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0aWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMvJHtwb3N0aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWxlcnQoJ1Bvc3QgZGVsZXRlZCEnKTtcclxuICAgICAgICAgICAgYmFja0hvbWUoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIERFTEVURVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhY2tIb21lID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIENyZWF0ZSBtb2RhbCAqL31cclxuICAgICAgICAgICAgPGg0Pntwb3N0LnVzZXJuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmU/PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZVBvc3R9PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2JhY2tIb21lfT5ObzwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGN0eCA9IGNvbnRleHQgb2JqZWN0IFxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6YW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMvJHtpZH1gKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcG9zdDogZGF0YSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQb3N0IiwicG9zdCIsInJvdXRlciIsImhhbmRsZURlbGV0ZVBvc3QiLCJwb3N0aWQiLCJxdWVyeSIsImlkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJhbGVydCIsImJhY2tIb21lIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImg0IiwidXNlcm5hbWUiLCJwIiwiY29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id]/index.tsx"));
module.exports = __webpack_exports__;

})();