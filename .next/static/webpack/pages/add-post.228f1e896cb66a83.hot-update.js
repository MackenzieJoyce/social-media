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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddPost = ()=>{\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        content: \"\"\n    });\n    console.log(form);\n    // const [username, setUsername] = useState('');\n    // console.log(\"Username is: \" + username);\n    // const [content, setContent] = useState('');\n    // console.log(\"Content is: \" + content); \n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // TRYING TO GET THE POST TO SAVE TO THE DATABASE \n    const addPost = async (event)=>{\n        event.preventDefault();\n        console.log(\"The event on addPost: \" + event);\n        console.log(form + \" was submitted\");\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts\", {\n                method: \"POST\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(form)\n            });\n            // const { data } = await res.json();\n            // console.log(\"This is the data: \" + data);\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    const handleFormSubmit = (event)=>{\n        event.preventDefault();\n        addPost(event);\n    };\n    const handleChange = (event)=>{\n        console.log(\"The event on handleChange: \" + event);\n        // const { name, value } = event.target;\n        setForm({\n            ...form,\n            // [name]: value,\n            [event.target.name]: event.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                required: true,\n                                // onChange={(event) => setUsername(event.target.value)}\n                                onChange: handleChange,\n                                placeholder: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                children: \"Content\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                required: true,\n                                // onChange={(event) => setContent(event.target.value)}\n                                onChange: handleChange,\n                                placeholder: \"Enter a message\",\n                                rows: \"4\",\n                                cols: \"50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddPost, \"FMLr0kns46WcrhG9yU6+FhNC2aQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddPost);\nvar _c;\n$RefreshReg$(_c, \"AddPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtcG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2lDO0FBQ087QUFDTztBQUcvQyxNQUFNRyxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUM3Qk0sVUFBVTtRQUNWQyxTQUFTO0lBQ2I7SUFDQUMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLGdEQUFnRDtJQUNoRCwyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLDBDQUEwQztJQUUxQyxNQUFNTSxTQUFTVCxzREFBU0E7SUFFeEIsa0RBQWtEO0lBQ2xELE1BQU1VLFVBQVUsT0FBT0MsUUFBYztRQUNqQ0EsTUFBTUMsY0FBYztRQUVwQkwsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkc7UUFFdkNKLFFBQVFDLEdBQUcsQ0FBQ0wsT0FBTztRQUVuQixJQUFJO1lBQ0EsTUFBTVUsTUFBTSxNQUFNQyxNQUFNLG1DQUFtQztnQkFDdkRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsVUFBVTtvQkFDVixnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNoQjtZQUN6QjtZQUNBLHFDQUFxQztZQUNyQyw0Q0FBNEM7WUFDNUNNLE9BQU9XLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWmQsUUFBUUMsR0FBRyxDQUFDLCtCQUErQmE7UUFDL0M7SUFDSjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDWCxRQUFlO1FBQ3JDQSxNQUFNQyxjQUFjO1FBQ3BCRixRQUFRQztJQUNaO0lBR0EsTUFBTVksZUFBZSxDQUFDWixRQUFjO1FBQ2hDSixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDRztRQUU1Qyx3Q0FBd0M7UUFFeENQLFFBQVE7WUFDSixHQUFHRCxJQUFJO1lBQ1AsaUJBQWlCO1lBQ2pCLENBQUNRLE1BQU1hLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVkLE1BQU1hLE1BQU0sQ0FBQ0UsS0FBSztRQUMzQztJQUNKO0lBS0EscUJBQ0k7OzBCQUNJLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDeEI7Z0JBQUt5QixVQUFVTjtnQkFBa0JPLFdBQVc1QixxRUFBVzs7a0NBQ3BELDhEQUFDNkI7d0JBQUlELFdBQVc1QiwwRUFBZ0I7OzBDQUNoQyw4REFBQytCO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQ3RCLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsUUFBUTtnQ0FDUix3REFBd0Q7Z0NBQ3hEQyxVQUFVZjtnQ0FDVmdCLGFBQVk7Ozs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNUO3dCQUFJRCxXQUFXNUIsMEVBQWdCOzswQ0FDaEMsOERBQUMrQjtnQ0FBTUMsU0FBUTswQ0FBVTs7Ozs7OzBDQUNyQiw4REFBQ087Z0NBQ0dKLElBQUc7Z0NBQ0hDLFFBQVE7Z0NBQ1IsdURBQXVEO2dDQUN2REMsVUFBVWY7Z0NBQ1ZnQixhQUFZO2dDQUNaRSxNQUFLO2dDQUFJQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBUXRCLDhEQUFDUjt3QkFDR0MsTUFBSzt3QkFDTFQsT0FBTTt3QkFDTkcsV0FBVzVCLG9FQUFVOzs7Ozs7Ozs7Ozs7OztBQUl6QztHQWpHTUM7O1FBWWFGLGtEQUFTQTs7O0tBWnRCRTtBQW1HTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZGQtcG9zdC50c3g/NWYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBsb2cgfSBmcm9tICdjb25zb2xlJztcclxuICAgIFxyXG5jb25zdCBBZGRQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBjb250ZW50OiAnJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuXHJcbiAgICAvLyBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVXNlcm5hbWUgaXM6IFwiICsgdXNlcm5hbWUpO1xyXG4gICAgLy8gY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJDb250ZW50IGlzOiBcIiArIGNvbnRlbnQpOyBcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBUUllJTkcgVE8gR0VUIFRIRSBQT1NUIFRPIFNBVkUgVE8gVEhFIERBVEFCQVNFIFxyXG4gICAgY29uc3QgYWRkUG9zdCA9IGFzeW5jIChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBldmVudCBvbiBhZGRQb3N0OiBcIiArIGV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybSArIFwiIHdhcyBzdWJtaXR0ZWRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHsgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzJywgeyBcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgZGF0YTogXCIgKyBkYXRhKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9uIGhhbmRsZUZvcm1TdWJtaXQgXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYWRkUG9zdChldmVudCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZXZlbnQgb24gaGFuZGxlQ2hhbmdlOiBcIiArIGV2ZW50KTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgLy8gW25hbWVdOiB2YWx1ZSxcclxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj5DcmVhdGUgUG9zdDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q29udGVudChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI0XCIgY29scz1cIjUwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFBvc3QiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJBZGRQb3N0IiwiZm9ybSIsInNldEZvcm0iLCJ1c2VybmFtZSIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiYWRkUG9zdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnJvciIsImhhbmRsZUZvcm1TdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoMiIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybUdyb3VwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwiYnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/add-post.tsx\n"));

/***/ })

});