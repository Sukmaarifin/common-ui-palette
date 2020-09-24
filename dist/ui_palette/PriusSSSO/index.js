"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var react_hooks_1 = require("@apollo/react-hooks");
var crypto_js_1 = __importDefault(require("crypto-js"));
var PriusCircularProgress_1 = __importDefault(require("../PriusCircularProgress"));
var usePersistedState_1 = __importDefault(require("../../helpers/usePersistedState"));
var configs_1 = require("../../configs");
var graphql_1 = require("../../graphql");
var useStyles = styles_1.makeStyles(function () { return ({
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
exports.TenantContext = react_1.createContext({
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
    var url = configs_1.RADEN_URL + "/authorize?client_id=" + configs_1.PRIUS_NAME + "&redirect_uri=" + encodeURIComponent(configs_1.PRIUS_URL) + "&response_type=code&scope=open&state=" + state;
    window.location.replace(url);
};
exports.logoutSSSO = function () {
    window.localStorage.clear();
    redirectToPriusSSSO();
};
exports.PriusSSSO = function (props) {
    var classes = useStyles();
    // BRAND_ID is an active or a selected brand
    var _a = usePersistedState_1.default("BRAND_ID", ""), brandId = _a[0], setBrandId = _a[1];
    var _b = usePersistedState_1.default("TENANT", ""), tenant = _b[0], setTenant = _b[1];
    var _c = usePersistedState_1.default("BRANDS", ""), brands = _c[0], setBrands = _c[1];
    var _d = usePersistedState_1.default("ACCOUNT", ""), account = _d[0], setAccount = _d[1];
    var _e = usePersistedState_1.default("TOKEN", ""), token = _e[0], setToken = _e[1];
    var getToken = react_hooks_1.useMutation(graphql_1.GET_TOKEN, {
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
                var encryptedToken = crypto_js_1.default.AES.encrypt(JSON.stringify({ accessToken: accessToken }), configs_1.SECRET_KEY).toString();
                setToken(encryptedToken);
            }
        },
        onError: function (error) {
            console.log("Error: " + error.message);
        },
    })[0];
    react_1.useEffect(function () {
        if (!brandId || brandId === "") {
            if (new URL(window.location.href).href.includes("?code=")) {
                // if user is authenticated and set local storage
                var hrefData = window.location.href.split("?")[1].split("&");
                var access_token = hrefData[0].split("=")[1];
                getToken({
                    variables: {
                        input: {
                            authorizationCode: access_token,
                            redirectURI: configs_1.PRIUS_URL,
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
    return (react_1.default.createElement(exports.TenantContext.Provider, { value: {
            account: account,
            brandID: brandId,
            currency: DEFAULT_CURRENCY,
            lang: DEFAULT_LANGUAGE,
            mode: configs_1.MODE,
            brands: brands,
            tenant: tenant,
            token: token,
        } }, brandId !== "" ? (props.children) : (react_1.default.createElement("div", { className: classes.container },
        react_1.default.createElement(PriusCircularProgress_1.default, { size: 80 })))));
};
