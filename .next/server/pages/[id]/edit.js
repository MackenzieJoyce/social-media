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
exports.id = "pages/[id]/edit";
exports.ids = ["pages/[id]/edit"];
exports.modules = {

/***/ "./pages/[id]/edit.tsx":
/*!*****************************!*\
  !*** ./pages/[id]/edit.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst EditPost = ({ post  })=>{\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        content: post.content\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleFormSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const res = await fetch(`http://localhost:3000/api/posts/${post._id}`, {\n                method: \"PUT\",\n                headers: {\n                    Accept: \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formState)\n            });\n            alert(post.username + \"'s post was updated!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    const handleChange = (event)=>{\n        const { name , value  } = event.target;\n        setFormState({\n            ...formState,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Edit Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: post.username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"content\",\n                        name: \"content\",\n                        required: true,\n                        onChange: handleChange,\n                        value: formState.content,\n                        placeholder: \"Enter a message\",\n                        rows: \"4\",\n                        cols: \"50\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\nEditPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(`http://localhost:3000/api/posts/${id}`);\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2VkaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNQO0FBRWpDLE1BQU1FLFdBQVcsQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUM3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7UUFDekNLLFNBQVNILEtBQUtHLE9BQU87SUFDdkI7SUFDQSxNQUFNQyxTQUFTUCxzREFBU0E7SUFFeEIsTUFBTVEsbUJBQW1CLE9BQU9DLFFBQWU7UUFDN0NBLE1BQU1DLGNBQWM7UUFFcEIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLGdDQUFnQyxFQUFFVCxLQUFLVSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUEMsUUFBUTtvQkFDUixnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNmO1lBQ3ZCO1lBQ0FnQixNQUFNakIsS0FBS2tCLFFBQVEsR0FBRztZQUN0QmQsT0FBT2UsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JGO1FBQzdDO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlLENBQUNqQixRQUFlO1FBQ25DLE1BQU0sRUFBRWtCLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUduQixNQUFNb0IsTUFBTTtRQUVwQ3hCLGFBQWE7WUFDWCxHQUFHRCxTQUFTO1lBQ1osQ0FBQ3VCLEtBQUssRUFBRUM7UUFDVjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVV6Qjs7a0NBQ2QsOERBQUMwQjtrQ0FBSS9CLEtBQUtrQixRQUFROzs7Ozs7a0NBQ2xCLDhEQUFDYzt3QkFDQ0MsSUFBRzt3QkFDSFQsTUFBSzt3QkFDTFUsUUFBUTt3QkFDQUMsVUFBVVo7d0JBQ1JFLE9BQU94QixVQUFVRSxPQUFPO3dCQUNsQ2lDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ0M7d0JBQU1DLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQjtBQUVBekMsU0FBUzBDLGVBQWUsR0FBRyxPQUFPQyxNQUFhO0lBQzdDLE1BQU0sRUFBRVQsR0FBRSxFQUFFLEdBQUdTLElBQUlDLEtBQUs7SUFDeEIsTUFBTW5DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLGdDQUFnQyxFQUFFd0IsR0FBRyxDQUFDO0lBQy9ELE1BQU0sRUFBRVcsS0FBSSxFQUFFLEdBQUcsTUFBTXBDLElBQUlxQyxJQUFJO0lBQy9CLE9BQU87UUFBRTdDLE1BQU00QztJQUFLO0FBQ3RCO0FBRUEsaUVBQWU3QyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vcGFnZXMvW2lkXS9lZGl0LnRzeD84YzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBFZGl0UG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb250ZW50OiBwb3N0LmNvbnRlbnRcclxuICB9KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdC5faWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtU3RhdGUpXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbGVydChwb3N0LnVzZXJuYW1lICsgJ1xcJ3MgcG9zdCB3YXMgdXBkYXRlZCEnKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBvbiBoYW5kbGVGb3JtU3VibWl0ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+RWRpdCBQb3N0PC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxyXG4gICAgICAgIDxoND57cG9zdC51c2VybmFtZX08L2g0PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5jb250ZW50fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgY29scz1cIjUwXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkVkaXRQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cy8ke2lkfWApO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4geyBwb3N0OiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiRWRpdFBvc3QiLCJwb3N0IiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwiY29udGVudCIsInJvdXRlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsInVzZXJuYW1lIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaDQiLCJ0ZXh0YXJlYSIsImlkIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicm93cyIsImNvbHMiLCJpbnB1dCIsInR5cGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/edit.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id]/edit.tsx"));
module.exports = __webpack_exports__;

})();