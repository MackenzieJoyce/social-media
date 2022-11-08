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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Post = ({ post  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleDeletePost = async ()=>{\n        const postid = router.query.id;\n        try {\n            const res = await fetch(`http://localhost:3000/api/posts/${postid}`, {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: post.username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeletePost,\n                children: \"Yes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"No\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n// ctx = context object \nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(`http://localhost:3000/api/posts/${id}`);\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXhDLE1BQU1DLE9BQU8sQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUN2QixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUksbUJBQW1CLFVBQVk7UUFDakMsTUFBTUMsU0FBU0YsT0FBT0csS0FBSyxDQUFDQyxFQUFFO1FBQzlCLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRUosT0FBTyxDQUFDLEVBQUU7Z0JBQ2pFSyxRQUFRO1lBQ1o7WUFDQUMsTUFBTTtZQUNOUixPQUFPUyxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBR0EscUJBQ0k7OzBCQUVJLDhEQUFDQzswQkFBSWQsS0FBS2UsUUFBUTs7Ozs7OzBCQUNsQiw4REFBQ0M7MEJBQUdoQixLQUFLaUIsT0FBTzs7Ozs7OzBCQUNoQiw4REFBQ0Q7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0U7Z0JBQU9DLFNBQVNqQjswQkFBa0I7Ozs7OzswQkFDbkMsOERBQUNnQjswQkFBTzs7Ozs7Ozs7QUFHcEI7QUFFQSx3QkFBd0I7QUFDeEJuQixLQUFLcUIsZUFBZSxHQUFHLE9BQU9DLE1BQVk7SUFDdEMsTUFBTSxFQUFFaEIsR0FBRSxFQUFFLEdBQUdnQixJQUFJakIsS0FBSztJQUV4QixNQUFNRSxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRUYsR0FBRyxDQUFDO0lBRS9ELE1BQU0sRUFBRWlCLEtBQUksRUFBRSxHQUFHLE1BQU1oQixJQUFJaUIsSUFBSTtJQUUvQixPQUFPO1FBQUV2QixNQUFNc0I7SUFBSztBQUN4QjtBQUVBLGlFQUFldkIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3BhZ2VzL1tpZF0vaW5kZXgudHN4Pzc2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc3RpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cy8ke3Bvc3RpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGVydCgnUG9zdCBkZWxldGVkIScpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gREVMRVRFXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIENyZWF0ZSBtb2RhbCAqL31cclxuICAgICAgICAgICAgPGg0Pntwb3N0LnVzZXJuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmU/PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZVBvc3R9PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uPk5vPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gY3R4ID0gY29udGV4dCBvYmplY3QgXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDphbnkpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGN0eC5xdWVyeTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cy8ke2lkfWApO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlBvc3QiLCJwb3N0Iiwicm91dGVyIiwiaGFuZGxlRGVsZXRlUG9zdCIsInBvc3RpZCIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImFsZXJ0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImg0IiwidXNlcm5hbWUiLCJwIiwiY29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n");

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