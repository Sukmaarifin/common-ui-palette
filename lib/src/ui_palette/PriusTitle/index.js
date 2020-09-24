import React, { useContext, useEffect } from "react";
import { TenantContext } from "../PriusSSSO";
var PriusTitle = function () {
    var tenant = useContext(TenantContext).tenant;
    var tenantName = (tenant === null || tenant === void 0 ? void 0 : tenant.name) ? tenant.name : "SIRCLO";
    useEffect(function () {
        document.title = tenantName + " - Admin Page";
    }, [tenantName]);
    return React.createElement(React.Fragment, null);
};
export default PriusTitle;
