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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddPost = ()=>{\n    _s();\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        content: \"\"\n    });\n    // console.log(formState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleChange = (event)=>{\n        console.log(\"The event on handleChange: \" + event);\n        // const { name, value } = event.target;\n        setFormState({\n            ...formState,\n            // [name]: value,\n            [event.target.name]: event.target.value\n        });\n        console.log(formState.username);\n        console.log(formState.username);\n    };\n    // TRYING TO GET THE POST TO SAVE TO THE DATABASE \n    const handleFormSubmit = async (event)=>{\n        event.preventDefault();\n        console.log(\"The event on handleFormSubmit: \" + event);\n        console.log(formState + \" was submitted\");\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts\", {\n                method: \"POST\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formState)\n            });\n            // const { data } = await res.json();\n            // console.log(\"This is the data: \" + data);\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                required: true,\n                                // onChange={handleChange}\n                                // value={formState.username}\n                                placeholder: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                children: \"Content\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                required: true,\n                                // onChange={handleChange}\n                                // value={formState.content}\n                                placeholder: \"Enter a message\",\n                                rows: \"4\",\n                                cols: \"50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddPost, \"kA+pEoHZ+nTHlvhGOCX2Dqctwdc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddPost);\nvar _c;\n$RefreshReg$(_c, \"AddPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtcG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2lDO0FBQ087QUFDTztBQUcvQyxNQUFNRyxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxVQUFVO1FBQUlDLFNBQVM7SUFBRTtJQUN0RSwwQkFBMEI7SUFDMUIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBRXhCLE1BQU1RLGVBQWUsQ0FBQ0MsUUFBVTtRQUM1QkMsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ0Y7UUFDNUMsd0NBQXdDO1FBQ3hDTCxhQUFhO1lBQ1QsR0FBR0QsU0FBUztZQUNaLGlCQUFpQjtZQUNqQixDQUFDTSxNQUFNRyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSixNQUFNRyxNQUFNLENBQUNFLEtBQUs7UUFDM0M7UUFDQUosUUFBUUMsR0FBRyxDQUFDUixVQUFVRSxRQUFRO1FBQzlCSyxRQUFRQyxHQUFHLENBQUNSLFVBQVVFLFFBQVE7SUFFbEM7SUFFQSxrREFBa0Q7SUFDbEQsTUFBTVUsbUJBQW1CLE9BQU9OLFFBQWM7UUFDMUNBLE1BQU1PLGNBQWM7UUFDcEJOLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBb0NGO1FBRWhEQyxRQUFRQyxHQUFHLENBQUNSLFlBQVk7UUFFeEIsSUFBSTtZQUNBLE1BQU1jLE1BQU0sTUFBTUMsTUFBTSxtQ0FBbUM7Z0JBQ3ZEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLFVBQVU7b0JBQ1YsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDcEI7WUFDekI7WUFDQSxxQ0FBcUM7WUFDckMsNENBQTRDO1lBQzVDSSxPQUFPaUIsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaZixRQUFRQyxHQUFHLENBQUMsK0JBQStCYztRQUMvQztJQUNKO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVWI7Z0JBQWtCYyxXQUFXNUIscUVBQVc7O2tDQUNwRCw4REFBQzZCO3dCQUFJRCxXQUFXNUIsMEVBQWdCOzswQ0FDaEMsOERBQUMrQjtnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUN0Qiw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLFFBQVE7Z0NBQ1IsMEJBQTBCO2dDQUMxQiw2QkFBNkI7Z0NBQzdCQyxhQUFZOzs7Ozs7Ozs7Ozs7a0NBRXBCLDhEQUFDUjt3QkFBSUQsV0FBVzVCLDBFQUFnQjs7MENBQ2hDLDhEQUFDK0I7Z0NBQU1DLFNBQVE7MENBQVU7Ozs7OzswQ0FDckIsOERBQUNNO2dDQUNHSCxJQUFHO2dDQUNIQyxRQUFRO2dDQUNSLDBCQUEwQjtnQ0FDMUIsNEJBQTRCO2dDQUM1QkMsYUFBWTtnQ0FDWkUsTUFBSztnQ0FBSUMsTUFBSzs7Ozs7Ozs7Ozs7O2tDQVF0Qiw4REFBQ1A7d0JBQ0dDLE1BQUs7d0JBQ0xyQixPQUFNO3dCQUNOZSxXQUFXNUIsb0VBQVU7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBL0VNQzs7UUFHYUYsa0RBQVNBOzs7S0FIdEJFO0FBaUZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZC1wb3N0LnRzeD81ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gJ2NvbnNvbGUnO1xyXG4gICAgXHJcbmNvbnN0IEFkZFBvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogJycsIGNvbnRlbnQ6ICcnfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JtU3RhdGUpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZXZlbnQgb24gaGFuZGxlQ2hhbmdlOiBcIiArIGV2ZW50KTtcclxuICAgICAgICAvLyBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICAgICAgICAvLyBbbmFtZV06IHZhbHVlLFxyXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVN0YXRlLnVzZXJuYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtU3RhdGUudXNlcm5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUUllJTkcgVE8gR0VUIFRIRSBQT1NUIFRPIFNBVkUgVE8gVEhFIERBVEFCQVNFIFxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGV2ZW50IG9uIGhhbmRsZUZvcm1TdWJtaXQ6IFwiICsgZXZlbnQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtU3RhdGUgKyBcIiB3YXMgc3VibWl0dGVkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cycsIHsgXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1TdGF0ZSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgZGF0YTogXCIgKyBkYXRhKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9uIGhhbmRsZUZvcm1TdWJtaXQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPkNyZWF0ZSBQb3N0PC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e2Zvcm1TdGF0ZS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17Zm9ybVN0YXRlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIiBjb2xzPVwiNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG59IC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUG9zdCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIkFkZFBvc3QiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJ1c2VybmFtZSIsImNvbnRlbnQiLCJyb3V0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnJvciIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybUdyb3VwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwiY29scyIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/add-post.tsx\n"));

/***/ })

});