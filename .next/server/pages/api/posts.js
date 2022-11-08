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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst PostSchema = new mongoose.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n        min: 3,\n        max: 20\n    },\n    content: {\n        type: String,\n        required: true,\n        max: 1000\n    }\n});\nmongoose.connect(process.env.MONGODB_URI || \"mongodb://127.0.0.1:27017/social-media\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n});\nmodule.exports = mongoose.models.Post || mongoose.model(\"Post\", PostSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ25DQyxVQUFVO1FBQ05DLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxRQUFRLElBQUk7UUFDWkMsS0FBSztRQUNMQyxLQUFLO0lBQ1Q7SUFDQUMsU0FBUztRQUNMTixNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEcsS0FBSztJQUNUO0FBQ0o7QUFHQVYsU0FBU1ksT0FBTyxDQUNWQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSwwQ0FDM0I7SUFDRUMsaUJBQWlCLElBQUk7SUFDckJDLG9CQUFvQixJQUFJO0FBQzFCO0FBR05DLE9BQU9DLE9BQU8sR0FBR25CLFNBQVNvQixNQUFNLENBQUNDLElBQUksSUFBSXJCLFNBQVNzQixLQUFLLENBQUMsUUFBUXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vbW9kZWxzL1Bvc3QuanM/NDZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7IFxyXG5cclxuY29uc3QgUG9zdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgIG1pbjogMyxcclxuICAgICAgICBtYXg6IDIwLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4OiAxMDAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxubW9uZ29vc2UuY29ubmVjdChcclxuICAgICAgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvc29jaWFsLW1lZGlhJyxcclxuICAgICAge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Qb3N0IHx8IG1vbmdvb3NlLm1vZGVsKCdQb3N0JywgUG9zdFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlBvc3RTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsIm1pbiIsIm1heCIsImNvbnRlbnQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlBvc3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Post.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/index.tsx":
/*!***********************************!*\
  !*** ./pages/api/posts/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnection */ \"(api)/./utils/dbConnection.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Post */ \"(api)/./models/Post.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Post__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,_utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                res.status(200).json({\n                    success: true,\n                    data: posts\n                });\n            } catch (error) {\n                res.status(\"Error on GET try\" + 400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const post = await _models_Post__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: post\n                });\n            } catch (error1) {\n                res.status(\"Error on POST try\" + 400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUQ7QUFDZjtBQUV4Q0EsK0RBQVlBO0FBRVoscURBQXFELEdBQ3JELGlFQUFlLE9BQU9FLEtBQVVDLE1BQWE7SUFDM0MsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsT0FBUUU7UUFDTixLQUFLO1lBQ0gsSUFBSTtnQkFDRixNQUFNQyxRQUFRLE1BQU1KLHdEQUFTLENBQUMsQ0FBQztnQkFDL0JFLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVMsSUFBSTtvQkFBRUMsTUFBTUw7Z0JBQU07WUFDcEQsRUFBRSxPQUFPTSxPQUFPO2dCQUNkUixJQUFJSSxNQUFNLENBQUMscUJBQXFCLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO2dCQUFDO1lBQzdEO1lBQ0EsS0FBTTtRQUNSLEtBQUs7WUFDSCxJQUFJO2dCQUNGLE1BQU1HLE9BQU8sTUFBTVgsMERBQVcsQ0FBQ0MsSUFBSVksSUFBSTtnQkFDdkNYLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVMsSUFBSTtvQkFBRUMsTUFBTUU7Z0JBQUs7WUFDbkQsRUFBRSxPQUFPRCxRQUFPO2dCQUNkUixJQUFJSSxNQUFNLENBQUMsc0JBQXNCLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO2dCQUFDO1lBQzlEO1lBQ0EsS0FBTTtRQUNSO1lBQ0VOLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztZQUFDO1lBQ3RDLEtBQU07SUFDVjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXgudHN4P2EwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3Rpb24nO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvUG9zdCc7XHJcblxyXG5kYkNvbm5lY3Rpb24oKTtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBQb3N0LmZpbmQoe30pO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcG9zdHMgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhcIkVycm9yIG9uIEdFVCB0cnlcIiArIDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBvc3QgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhcIkVycm9yIG9uIFBPU1QgdHJ5XCIgKyA0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdGlvbiIsIlBvc3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwb3N0cyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsInBvc3QiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/index.tsx\n");

/***/ }),

/***/ "(api)/./utils/dbConnection.js":
/*!*******************************!*\
  !*** ./utils/dbConnection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dbConnection)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnection() {\n    if (connection.isConnected) {\n        console.log(\"Using existing connection\");\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"DB Connected\");\n    connection.isConnected = db.connections[0].readyState;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsQ0FBQztBQUVMLGVBQWVDLGVBQWU7SUFDekMsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQ3hCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNKLENBQUM7SUFDRCxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtRQUN2REMsaUJBQWlCLElBQUk7UUFDckJDLG9CQUFvQixJQUFJO0lBQzVCO0lBQ0FSLFFBQVFDLEdBQUcsQ0FBQztJQUNaSixXQUFXRSxXQUFXLEdBQUdHLEdBQUdPLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVU7QUFDekQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL2RiQ29ubmVjdGlvbi5qcz85MzJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0aW9uKCkge1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgZXhpc3RpbmcgY29ubmVjdGlvbicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdEQiBDb25uZWN0ZWQnKTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnection.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/index.tsx"));
module.exports = __webpack_exports__;

})();