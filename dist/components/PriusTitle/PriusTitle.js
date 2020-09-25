"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var PriusSSSO_1 = require("../PriusSSSO");
var PriusTitle = function () {
    var tenant = react_1.useContext(PriusSSSO_1.TenantContext).tenant;
    var tenantName = (tenant === null || tenant === void 0 ? void 0 : tenant.name) ? tenant.name : 'SIRCLO';
    react_1.useEffect(function () {
        document.title = tenantName + " - Admin Page";
    }, [tenantName]);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = PriusTitle;
