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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new mongoose.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n        min: 3,\n        max: 20\n    },\n    password: {\n        type: String,\n        required: true,\n        min: 6\n    }\n});\nmongoose.connect(process.env.MONGODB_URI || \"mongodb://127.0.0.1:27017/social-media\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ3JDQyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxRQUFRLElBQUk7UUFDWkMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQUMsVUFBVTtRQUNSTixNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEUsS0FBSztJQUNQO0FBQ0Y7QUFFQVQsU0FBU1ksT0FBTyxDQUNkQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSwwQ0FDM0I7SUFDRUMsaUJBQWlCLElBQUk7SUFDckJDLG9CQUFvQixJQUFJO0FBQzFCO0FBR0ZDLE9BQU9DLE9BQU8sR0FBR25CLFNBQVNvQixNQUFNLENBQUNDLElBQUksSUFBSXJCLFNBQVNzQixLQUFLLENBQUMsUUFBUXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgbWluOiAzLFxyXG4gICAgbWF4OiAyMFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbWluOiA2XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoXHJcbiAgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvc29jaWFsLW1lZGlhJyxcclxuICB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICB9XHJcbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJtaW4iLCJtYXgiLCJwYXNzd29yZCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/index.tsx":
/*!***********************************!*\
  !*** ./pages/api/users/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnection */ \"(api)/./utils/dbConnection.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,_utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const users = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                res.status(200).json({\n                    success: true,\n                    data: users\n                });\n            } catch (error) {\n                res.status(\"Error on GET try\" + 400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: user\n                });\n            } catch (error1) {\n                res.status(\"Error on POST try\" + 400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUQ7QUFDZjtBQUV4Q0EsK0RBQVlBO0FBRVoscURBQXFELEdBQ3JELGlFQUFlLE9BQU9FLEtBQVVDLE1BQWE7SUFDekMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkIsT0FBUUU7UUFDSixLQUFLO1lBQ0wsSUFBSTtnQkFDQSxNQUFNQyxRQUFRLE1BQU1KLHdEQUFTLENBQUMsQ0FBQztnQkFDL0JFLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVMsSUFBSTtvQkFBRUMsTUFBTUw7Z0JBQU07WUFDdEQsRUFBRSxPQUFPTSxPQUFPO2dCQUNaUixJQUFJSSxNQUFNLENBQUMscUJBQXFCLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO2dCQUFDO1lBQy9EO1lBQ0EsS0FBTTtRQUNOLEtBQUs7WUFDTCxJQUFJO2dCQUNBLE1BQU1HLE9BQU8sTUFBTVgsMERBQVcsQ0FBQ0MsSUFBSVksSUFBSTtnQkFDdkNYLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVMsSUFBSTtvQkFBRUMsTUFBTUU7Z0JBQUs7WUFDckQsRUFBRSxPQUFPRCxRQUFPO2dCQUNaUixJQUFJSSxNQUFNLENBQUMsc0JBQXNCLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO2dCQUFDO1lBQ2hFO1lBQ0EsS0FBTTtRQUNOO1lBQ0FOLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztZQUFDO1lBQ3RDLEtBQU07SUFDVjtBQUNKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHN4P2E2OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3Rpb24nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXNlcic7XHJcblxyXG5kYkNvbm5lY3Rpb24oKTtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZCh7fSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlcnMgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyhcIkVycm9yIG9uIEdFVCB0cnlcIiArIDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyhcIkVycm9yIG9uIFBPU1QgdHJ5XCIgKyA0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG4gICAgIl0sIm5hbWVzIjpbImRiQ29ubmVjdGlvbiIsIlVzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VycyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsInVzZXIiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.tsx"));
module.exports = __webpack_exports__;

})();