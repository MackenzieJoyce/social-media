"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]/edit",{

/***/ "./pages/[id]/edit.tsx":
/*!*****************************!*\
  !*** ./pages/[id]/edit.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst EditPost = (param)=>{\n    let { post  } = param;\n    _s();\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        content: post.content\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleChange = (event)=>{\n        const { name , value  } = event.target;\n        setFormState({\n            ...formState,\n            [name]: value\n        });\n    };\n    const handleFormSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts/\".concat(post._id), {\n                method: \"PUT\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formState)\n            });\n            alert(\"Post entry was updated!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Edit Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: post.username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        label: true,\n                        name: \"content\",\n                        value: formState.content,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        children: \"Finished\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditPost, \"UY4JlNuO9+QJeprr9WljCH7WItI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditPost;\nEditPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(\"http://localhost:3000/api/posts/\".concat(id));\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2VkaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUDtBQUVqQyxNQUFNRSxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUN2Q0ssU0FBU0gsS0FBS0csT0FBTztJQUN6QjtJQUNBLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUV4QixNQUFNUSxlQUFlLENBQUNDLFFBQWM7UUFDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBRXBDUCxhQUFhO1lBQ1QsR0FBR0QsU0FBUztZQUNaLENBQUNNLEtBQUssRUFBRUM7UUFDWjtJQUNKO0lBRUEsTUFBTUUsbUJBQW1CLE9BQU9KLFFBQWU7UUFDM0NBLE1BQU1LLGNBQWM7UUFFcEIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxtQ0FBNEMsT0FBVGIsS0FBS2MsR0FBRyxHQUFJO2dCQUNuRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxVQUFVO29CQUNWLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xCO1lBQ3pCO1lBQ0FtQixNQUFNO1lBQ05oQixPQUFPaUIsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUMsK0JBQStCRjtRQUMvQztJQUNKO0lBRUEscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVsQjs7a0NBQ1osOERBQUNtQjtrQ0FBSTdCLEtBQUs4QixRQUFROzs7Ozs7a0NBQ2xCLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsS0FBSzt3QkFBQzFCLE1BQUs7d0JBQVVDLE9BQU9QLFVBQVVFLE9BQU87d0JBQUUrQixVQUFVN0I7Ozs7OztrQ0FDNUUsOERBQUMwQjt3QkFBTUMsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJDO0dBNUNNakM7O1FBSWFGLGtEQUFTQTs7O0tBSnRCRTtBQThDTkEsU0FBU29DLGVBQWUsR0FBRyxPQUFPQyxNQUFhO0lBQzNDLE1BQU0sRUFBRUMsR0FBRSxFQUFFLEdBQUdELElBQUlFLEtBQUs7SUFDeEIsTUFBTTFCLE1BQU0sTUFBTUMsTUFBTSxtQ0FBc0MsT0FBSHdCO0lBQzNELE1BQU0sRUFBRUUsS0FBSSxFQUFFLEdBQUcsTUFBTTNCLElBQUk0QixJQUFJO0lBQy9CLE9BQU87UUFBRXhDLE1BQU11QztJQUFLO0FBQ3hCO0FBRUEsK0RBQWV4QyxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0vZWRpdC50c3g/OGMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEVkaXRQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoeyBcclxuICAgICAgICBjb250ZW50OiBwb3N0LmNvbnRlbnRcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCkgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cy8ke3Bvc3QuX2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1TdGF0ZSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGVydChcIlBvc3QgZW50cnkgd2FzIHVwZGF0ZWQhXCIpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb24gaGFuZGxlRm9ybVN1Ym1pdCBcIiArIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5FZGl0IFBvc3Q8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QudXNlcm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsIG5hbWU9XCJjb250ZW50XCIgdmFsdWU9e2Zvcm1TdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj5GaW5pc2hlZDwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuRWRpdFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cy8ke2lkfWApO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgcG9zdDogZGF0YSB9O1xyXG59XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgRWRpdFBvc3QiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJFZGl0UG9zdCIsInBvc3QiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJjb250ZW50Iiwicm91dGVyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIl9pZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFsZXJ0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaDQiLCJ1c2VybmFtZSIsImlucHV0IiwidHlwZSIsImxhYmVsIiwib25DaGFuZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/edit.tsx\n"));

/***/ })

});