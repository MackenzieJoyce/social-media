"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add-post",{

/***/ "./pages/add-post.tsx":
/*!****************************!*\
  !*** ./pages/add-post.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddPost = ()=>{\n    _s();\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        content: \"\"\n    });\n    console.log(formState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const addPost = async (event)=>{\n        event.preventDefault();\n        console.log(\"The event on addPost: \" + event);\n        console.log(formState + \" was submitted\");\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts\", {\n                method: \"POST\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formState)\n            });\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    const handleFormSubmit = (event)=>{\n        event.preventDefault();\n        addPost(event);\n    };\n    const handleChange = (event)=>{\n        console.log(\"The event on handleChange: \" + event);\n        const { name , value  } = event.target;\n        setFormState({\n            ...formState,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"username\",\n                                id: \"username\",\n                                required: true,\n                                onChange: handleChange,\n                                placeholder: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                children: \"Content\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                name: \"content\",\n                                required: true,\n                                onChange: handleChange,\n                                placeholder: \"Enter a message\",\n                                rows: \"4\",\n                                cols: \"50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddPost, \"/NUPkEpah+Uo32Qs3PDvB9lIc9g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddPost);\nvar _c;\n$RefreshReg$(_c, \"AddPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtcG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2lDO0FBQ087QUFDTztBQUUvQyxNQUFNRyxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUN2Q00sVUFBVTtRQUNWQyxTQUFTO0lBQ2I7SUFDQUMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLE1BQU1NLFNBQVNULHNEQUFTQTtJQUV4QixNQUFNVSxVQUFVLE9BQU9DLFFBQWM7UUFDakNBLE1BQU1DLGNBQWM7UUFFcEJMLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJHO1FBRXZDSixRQUFRQyxHQUFHLENBQUNMLFlBQVk7UUFFeEIsSUFBSTtZQUNBLE1BQU1VLE1BQU0sTUFBTUMsTUFBTSxtQ0FBbUM7Z0JBQ3ZEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLFVBQVU7b0JBQ1YsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDaEI7WUFDekI7WUFDQU0sT0FBT1csSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaZCxRQUFRQyxHQUFHLENBQUMsK0JBQStCYTtRQUMvQztJQUNKO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNYLFFBQWU7UUFDckNBLE1BQU1DLGNBQWM7UUFDcEJGLFFBQVFDO0lBQ1o7SUFHQSxNQUFNWSxlQUFlLENBQUNaLFFBQWM7UUFDaENKLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NHO1FBRTVDLE1BQU0sRUFBRWEsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR2QsTUFBTWUsTUFBTTtRQUVwQ3RCLGFBQWE7WUFDVCxHQUFHRCxTQUFTO1lBQ1osQ0FBQ3FCLEtBQUssRUFBRUM7UUFDWjtJQUNKO0lBS0EscUJBQ0k7OzBCQUNJLDhEQUFDRTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVVA7Z0JBQWtCUSxXQUFXN0IscUVBQVc7O2tDQUNwRCw4REFBQzhCO3dCQUFJRCxXQUFXN0IsMEVBQWdCOzswQ0FDaEMsOERBQUNnQztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUN0Qiw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xaLE1BQUs7Z0NBQ0xhLElBQUc7Z0NBQ0hDLFFBQVE7Z0NBQ1JDLFVBQVVoQjtnQ0FDVmlCLGFBQVk7Ozs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNUO3dCQUFJRCxXQUFXN0IsMEVBQWdCOzswQ0FDaEMsOERBQUNnQztnQ0FBTUMsU0FBUTswQ0FBVTs7Ozs7OzBDQUNyQiw4REFBQ087Z0NBQ0dKLElBQUc7Z0NBQ0hiLE1BQUs7Z0NBQ0xjLFFBQVE7Z0NBQ1JDLFVBQVVoQjtnQ0FDVmlCLGFBQVk7Z0NBQ1pFLE1BQUs7Z0NBQUlDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FRdEIsOERBQUNSO3dCQUNHQyxNQUFLO3dCQUNMWCxPQUFNO3dCQUNOSyxXQUFXN0Isb0VBQVU7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBeEZNQzs7UUFPYUYsa0RBQVNBOzs7S0FQdEJFO0FBMEZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZC1wb3N0LnRzeD81ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbiAgICBcclxuY29uc3QgQWRkUG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1TdGF0ZSk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgYWRkUG9zdCA9IGFzeW5jIChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBldmVudCBvbiBhZGRQb3N0OiBcIiArIGV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVN0YXRlICsgXCIgd2FzIHN1Ym1pdHRlZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMnLCB7IFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtU3RhdGUpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9uIGhhbmRsZUZvcm1TdWJtaXQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYWRkUG9zdChldmVudCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZXZlbnQgb24gaGFuZGxlQ2hhbmdlOiBcIiArIGV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPkNyZWF0ZSBQb3N0PC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIiBjb2xzPVwiNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG59IC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUG9zdCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIkFkZFBvc3QiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJ1c2VybmFtZSIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiYWRkUG9zdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnJvciIsImhhbmRsZUZvcm1TdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImZvcm1Hcm91cCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwiY29scyIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/add-post.tsx\n"));

/***/ })

});