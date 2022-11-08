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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst EditPost = (param)=>{\n    let { post  } = param;\n    _s();\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        content: post.content\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleFormSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const res = await fetch(\"http://localhost:3000/api/posts/\".concat(post._id), {\n                method: \"PUT\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formState)\n            });\n            alert(\"Post entry was updated!\");\n            router.push(\"/\");\n        } catch (error) {\n            console.log(\"Error on handleFormSubmit \" + error);\n        }\n    };\n    const handleChange = (event)=>{\n        const { name , value  } = event.target;\n        setFormState({\n            ...formState,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Edit Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleFormSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: post.username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"content\",\n                        name: \"content\",\n                        required: true,\n                        // value={formState.content} \n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        children: \"Finished\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macki\\\\Documents\\\\Coding\\\\Personal Projects\\\\social-media\\\\pages\\\\[id]\\\\edit.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditPost, \"UY4JlNuO9+QJeprr9WljCH7WItI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditPost;\nEditPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const res = await fetch(\"http://localhost:3000/api/posts/\".concat(id));\n    const { data  } = await res.json();\n    return {\n        post: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2VkaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUDtBQUVqQyxNQUFNRSxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUN2Q0ssU0FBU0gsS0FBS0csT0FBTztJQUN6QjtJQUNBLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUV4QixNQUFNUSxtQkFBbUIsT0FBT0MsUUFBZTtRQUMzQ0EsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0EsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLG1DQUE0QyxPQUFUVCxLQUFLVSxHQUFHLEdBQUk7Z0JBQ25FQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLFVBQVU7b0JBQ1YsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDZDtZQUN6QjtZQUNBZSxNQUFNO1lBQ05aLE9BQU9hLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDLCtCQUErQkY7UUFDL0M7SUFDSjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ2YsUUFBYztRQUNoQyxNQUFNLEVBQUVnQixLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHakIsTUFBTWtCLE1BQU07UUFFcEN0QixhQUFhO1lBQ1QsR0FBR0QsU0FBUztZQUNaLENBQUNxQixLQUFLLEVBQUVDO1FBQ1o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVdkI7O2tDQUNaLDhEQUFDd0I7a0NBQUk3QixLQUFLOEIsUUFBUTs7Ozs7O2tDQUNsQiw4REFBQ0M7d0JBQ0RDLElBQUc7d0JBQ0hWLE1BQUs7d0JBQ0xXLFFBQVE7d0JBQ1IsNkJBQTZCO3dCQUM3QkMsVUFBVWI7Ozs7OztrQ0FDViw4REFBQ2M7d0JBQU1DLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQztHQWpETXJDOztRQUlhRixrREFBU0E7OztLQUp0QkU7QUFtRE5BLFNBQVNzQyxlQUFlLEdBQUcsT0FBT0MsTUFBYTtJQUMzQyxNQUFNLEVBQUVOLEdBQUUsRUFBRSxHQUFHTSxJQUFJQyxLQUFLO0lBQ3hCLE1BQU0vQixNQUFNLE1BQU1DLE1BQU0sbUNBQXNDLE9BQUh1QjtJQUMzRCxNQUFNLEVBQUVRLEtBQUksRUFBRSxHQUFHLE1BQU1oQyxJQUFJaUMsSUFBSTtJQUMvQixPQUFPO1FBQUV6QyxNQUFNd0M7SUFBSztBQUN4QjtBQUVBLCtEQUFlekMsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9baWRdL2VkaXQudHN4PzhjMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBFZGl0UG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHsgXHJcbiAgICAgICAgY29udGVudDogcG9zdC5jb250ZW50XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdC5faWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybVN0YXRlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUG9zdCBlbnRyeSB3YXMgdXBkYXRlZCFcIik7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvbiBoYW5kbGVGb3JtU3VibWl0IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+RWRpdCBQb3N0PC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGg0Pntwb3N0LnVzZXJuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIGlkPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e2Zvcm1TdGF0ZS5jb250ZW50fSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPkZpbmlzaGVkPC9pbnB1dD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5FZGl0UG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGN0eC5xdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7aWR9YCk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XHJcbn1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkVkaXRQb3N0IiwicG9zdCIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsImNvbnRlbnQiLCJyb3V0ZXIiLCJoYW5kbGVGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwiX2lkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJoNCIsInVzZXJuYW1lIiwidGV4dGFyZWEiLCJpZCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJpbnB1dCIsInR5cGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/edit.tsx\n"));

/***/ })

});