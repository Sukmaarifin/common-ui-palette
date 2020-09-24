import React, { createContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/react-hooks";
import CryptoJS from "crypto-js";
import PriusCircularProgress from "../PriusCircularProgress";
import usePersistedState from "../../helpers/usePersistedState";
import { PRIUS_NAME, PRIUS_URL, RADEN_URL, MODE, SECRET_KEY, } from "../../configs";
import { GET_TOKEN, } from "../../graphql";
var useStyles = makeStyles(function () { return ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: "50px",
    },
}); });
//TODO: get active language and currency from current user information
var DEFAULT_LANGUAGE = "ID";
var DEFAULT_CURRENCY = "IDR";
export var TenantContext = createContext({
    account: {
        ID: "",
        email: "",
        firstName: "",
        lastName: "",
    },
    brandID: "",
    brands: [],
    currency: "",
    lang: "",
    mode: "",
    tenant: {
        ID: "",
        name: "",
    },
    token: "",
});
var redirectToPriusSSSO = function () {
    var state = Math.random().toString(36).substring(7).toUpperCase(); // GENERATE 15 RANDOM STRING
    var url = RADEN_URL + "/authorize?client_id=" + PRIUS_NAME + "&redirect_uri=" + encodeURIComponent(PRIUS_URL) + "&response_type=code&scope=open&state=" + state;
    window.location.replace(url);
};
export var logoutSSSO = function () {
    window.localStorage.clear();
    redirectToPriusSSSO();
};
export var PriusSSSO = function (props) {
    var classes = useStyles();
    // BRAND_ID is an active or a selected brand
    var _a = usePersistedState("BRAND_ID", ""), brandId = _a[0], setBrandId = _a[1];
    var _b = usePersistedState("TENANT", ""), tenant = _b[0], setTenant = _b[1];
    var _c = usePersistedState("BRANDS", ""), brands = _c[0], setBrands = _c[1];
    var _d = usePersistedState("ACCOUNT", ""), account = _d[0], setAccount = _d[1];
    var _e = usePersistedState("TOKEN", ""), token = _e[0], setToken = _e[1];
    var getToken = useMutation(GET_TOKEN, {
        onCompleted: function (data) {
            var _a;
            if ((_a = data === null || data === void 0 ? void 0 : data.exchangeAuthorizationCode) === null || _a === void 0 ? void 0 : _a.accessToken) {
                var brandsInfo = data.exchangeAuthorizationCode.tenant.brands.items.map(function (brand) { return ({
                    ID: brand.ID,
                    name: brand.name,
                }); });
                setBrands(brandsInfo);
                setBrandId(data.exchangeAuthorizationCode.tenant.brands.items[0].ID);
                setAccount({
                    ID: data.exchangeAuthorizationCode.account.ID,
                    email: data.exchangeAuthorizationCode.account.email,
                    firstName: data.exchangeAuthorizationCode.account.firstName,
                    lastName: data.exchangeAuthorizationCode.account.lastName,
                });
                setTenant({
                    ID: data.exchangeAuthorizationCode.tenant.ID,
                    name: data.exchangeAuthorizationCode.tenant.name,
                });
                var accessToken = data.exchangeAuthorizationCode.accessToken;
                var encryptedToken = CryptoJS.AES.encrypt(JSON.stringify({ accessToken: accessToken }), SECRET_KEY).toString();
                setToken(encryptedToken);
            }
        },
        onError: function (error) {
            console.log("Error: " + error.message);
        },
    })[0];
    useEffect(function () {
        if (!brandId || brandId === "") {
            if (new URL(window.location.href).href.includes("?code=")) {
                // if user is authenticated and set local storage
                var hrefData = window.location.href.split("?")[1].split("&");
                var access_token = hrefData[0].split("=")[1];
                getToken({
                    variables: {
                        input: {
                            authorizationCode: access_token,
                            redirectURI: PRIUS_URL,
                            isAdmin: true,
                        },
                    },
                });
            }
            else {
                // if user not logged in
                redirectToPriusSSSO();
            }
        }
    }, [brandId, getToken]);
    return (React.createElement(TenantContext.Provider, { value: {
            account: account,
            brandID: brandId,
            currency: DEFAULT_CURRENCY,
            lang: DEFAULT_LANGUAGE,
            mode: MODE,
            brands: brands,
            tenant: tenant,
            token: token,
        } }, brandId !== "" ? (props.children) : (React.createElement("div", { className: classes.container },
        React.createElement(PriusCircularProgress, { size: 80 })))));
};
