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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Post = ({ post  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleDeletePost = async ()=>{\n        try {\n            const res = await fetch(`http://localhost:3000/api/posts/${post._id}`, {\n                method: \"DELETE\"\n            });\n            alert(\"Post deleted!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error in DELETE\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeletePost,\n                children: \"Yes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"No\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n// ctx = context object \nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(`http://localhost:3000/api/posts/${id}`);\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXhDLE1BQU1DLE9BQU8sQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUN2QixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUksbUJBQW1CLFVBQVk7UUFDakMsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLGdDQUFnQyxFQUFFSixLQUFLSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuRUMsUUFBUTtZQUNaO1lBQ0FDLE1BQU07WUFDTk4sT0FBT08sSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUdBLHFCQUNJOzswQkFFSSw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQU9DLFNBQVNaOzBCQUFrQjs7Ozs7OzBCQUNuQyw4REFBQ1c7MEJBQU87Ozs7Ozs7O0FBR3BCO0FBRUEsd0JBQXdCO0FBQ3hCZCxLQUFLZ0IsZUFBZSxHQUFHLE9BQU9DLE1BQVk7SUFDdEMsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0QsSUFBSUUsS0FBSztJQUV4QixNQUFNZixNQUFNLE1BQU1DLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRWEsR0FBRyxDQUFDO0lBRS9ELE1BQU0sRUFBRUUsS0FBSSxFQUFFLEdBQUcsTUFBTWhCLElBQUlpQixJQUFJO0lBRS9CLE9BQU87UUFBRXBCLE1BQU1tQjtJQUFLO0FBQ3hCO0FBRUEsaUVBQWVwQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vcGFnZXMvW2lkXS9pbmRleC50c3g/NzYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMvJHtwb3N0Ll9pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGVydCgnUG9zdCBkZWxldGVkIScpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gREVMRVRFXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIENyZWF0ZSBtb2RhbCAqL31cclxuICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlPzwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVQb3N0fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5ObzwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGN0eCA9IGNvbnRleHQgb2JqZWN0IFxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6YW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMvJHtpZH1gKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcG9zdDogZGF0YSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQb3N0IiwicG9zdCIsInJvdXRlciIsImhhbmRsZURlbGV0ZVBvc3QiLCJyZXMiLCJmZXRjaCIsIl9pZCIsIm1ldGhvZCIsImFsZXJ0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiaWQiLCJxdWVyeSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n");

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