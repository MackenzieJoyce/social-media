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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddPost = ()=>{\n    _s();\n    const [formState, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        content: \"\"\n    });\n    console.log(formState);\n    // const [username, setUsername] = useState('');\n    // console.log(\"Username is: \" + username);\n    // const [content, setContent] = useState('');\n    // console.log(\"Content is: \" + content); \n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleChange = (event)=>{\n        console.log(\"The event on handleChange: \" + event);\n        // const { name, value } = event.target;\n        setForm({\n            ...formState,\n            // [name]: value,\n            [event.target.name]: event.target.value\n        });\n    };\n    // TRYING TO GET THE POST TO SAVE TO THE DATABASE \n    const handleFormSubmit = async (event)=>{\n        event.preventDefault();\n        console.log(\"The event on handleFormSubmit: \" + event);\n        console.log(formState + \" was submitted\");\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts\", {\n                method: \"POST\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formState)\n            });\n            // const { data } = await res.json();\n            // console.log(\"This is the data: \" + data);\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                required: true,\n                                // onChange={(event) => setUsername(event.target.value)}\n                                onChange: handleChange,\n                                placeholder: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                children: \"Content\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                required: true,\n                                // onChange={(event) => setContent(event.target.value)}\n                                onChange: handleChange,\n                                placeholder: \"Enter a message\",\n                                rows: \"4\",\n                                cols: \"50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\add-post.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddPost, \"wA62ZP9MPQ48eNMpP3myk5/iqM0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddPost);\nvar _c;\n$RefreshReg$(_c, \"AddPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtcG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2lDO0FBQ087QUFDTztBQUcvQyxNQUFNRyxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNsQ00sVUFBVTtRQUNWQyxTQUFTO0lBQ2I7SUFDQUMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLGdEQUFnRDtJQUNoRCwyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLDBDQUEwQztJQUUxQyxNQUFNTSxTQUFTVCxzREFBU0E7SUFFeEIsTUFBTVUsZUFBZSxDQUFDQyxRQUFjO1FBQ2hDSixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDRztRQUU1Qyx3Q0FBd0M7UUFFeENQLFFBQVE7WUFDSixHQUFHRCxTQUFTO1lBQ1osaUJBQWlCO1lBQ2pCLENBQUNRLE1BQU1DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLE1BQU1DLE1BQU0sQ0FBQ0UsS0FBSztRQUMzQztJQUNKO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1DLG1CQUFtQixPQUFPSixRQUFjO1FBQzFDQSxNQUFNSyxjQUFjO1FBRXBCVCxRQUFRQyxHQUFHLENBQUMsb0NBQW9DRztRQUVoREosUUFBUUMsR0FBRyxDQUFDTCxZQUFZO1FBRXhCLElBQUk7WUFDQSxNQUFNYyxNQUFNLE1BQU1DLE1BQU0sbUNBQW1DO2dCQUN2REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxVQUFVO29CQUNWLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ3BCO1lBQ3pCO1lBQ0EscUNBQXFDO1lBQ3JDLDRDQUE0QztZQUM1Q00sT0FBT2UsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNabEIsUUFBUUMsR0FBRyxDQUFDLCtCQUErQmlCO1FBQy9DO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVYjtnQkFBa0JjLFdBQVc1QixxRUFBVzs7a0NBQ3BELDhEQUFDNkI7d0JBQUlELFdBQVc1QiwwRUFBZ0I7OzBDQUNoQyw4REFBQytCO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQ3RCLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsUUFBUTtnQ0FDUix3REFBd0Q7Z0NBQ3hEQyxVQUFVNUI7Z0NBQ1Y2QixhQUFZOzs7Ozs7Ozs7Ozs7a0NBRXBCLDhEQUFDVDt3QkFBSUQsV0FBVzVCLDBFQUFnQjs7MENBQ2hDLDhEQUFDK0I7Z0NBQU1DLFNBQVE7MENBQVU7Ozs7OzswQ0FDckIsOERBQUNPO2dDQUNHSixJQUFHO2dDQUNIQyxRQUFRO2dDQUNSLHVEQUF1RDtnQ0FDdkRDLFVBQVU1QjtnQ0FDVjZCLGFBQVk7Z0NBQ1pFLE1BQUs7Z0NBQUlDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FRdEIsOERBQUNSO3dCQUNHQyxNQUFLO3dCQUNMckIsT0FBTTt3QkFDTmUsV0FBVzVCLG9FQUFVOzs7Ozs7Ozs7Ozs7OztBQUl6QztHQXhGTUM7O1FBWWFGLGtEQUFTQTs7O0tBWnRCRTtBQTBGTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZGQtcG9zdC50c3g/NWYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBsb2cgfSBmcm9tICdjb25zb2xlJztcclxuICAgIFxyXG5jb25zdCBBZGRQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1TdGF0ZSk7XHJcblxyXG4gICAgLy8gY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlVzZXJuYW1lIGlzOiBcIiArIHVzZXJuYW1lKTtcclxuICAgIC8vIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29udGVudCBpczogXCIgKyBjb250ZW50KTsgXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGV2ZW50IG9uIGhhbmRsZUNoYW5nZTogXCIgKyBldmVudCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgICAgICAgLy8gW25hbWVdOiB2YWx1ZSxcclxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUUllJTkcgVE8gR0VUIFRIRSBQT1NUIFRPIFNBVkUgVE8gVEhFIERBVEFCQVNFIFxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudDphbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBldmVudCBvbiBoYW5kbGVGb3JtU3VibWl0OiBcIiArIGV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVN0YXRlICsgXCIgd2FzIHN1Ym1pdHRlZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkgeyBcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMnLCB7IFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtU3RhdGUpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGRhdGE6IFwiICsgZGF0YSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvbiBoYW5kbGVGb3JtU3VibWl0IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj5DcmVhdGUgUG9zdDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q29udGVudChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI0XCIgY29scz1cIjUwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFBvc3QiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJBZGRQb3N0IiwiZm9ybVN0YXRlIiwic2V0Rm9ybSIsInVzZXJuYW1lIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwicm93cyIsImNvbHMiLCJidG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add-post.tsx\n"));

/***/ })

});