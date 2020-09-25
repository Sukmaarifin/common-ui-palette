"use strict";
/**
 * @todo
 * [ ] Unit test
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_hooks_1 = require("@apollo/react-hooks");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var PriusSSSO_1 = require("../PriusSSSO");
var PriusMultipleSelect_1 = __importDefault(require("../PriusMultipleSelect"));
var PriusSelect_1 = __importDefault(require("../PriusSelect"));
var material_ui_theme_1 = __importDefault(require("../../styles/material-ui-theme"));
exports.GET_BRANDS = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query Brands($ID: ID!) {\n    tenant(ID: $ID) {\n      ID\n      brands {\n        items {\n          ID\n          name\n          logoURL\n        }\n      }\n    }\n  }\n"], ["\n  query Brands($ID: ID!) {\n    tenant(ID: $ID) {\n      ID\n      brands {\n        items {\n          ID\n          name\n          logoURL\n        }\n      }\n    }\n  }\n"])));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        backgroundColor: '#1C1B1B',
        color: theme.colors.white,
        margin: '0 15px',
        border: "1px solid #1C1B1B",
    },
    selectedMenuColor: {
        color: theme.colors.white,
    },
}); });
function PriusBrandDropdown(_a) {
    var id = _a.id, placeholder = _a.placeholder, _b = _a.isMulti, isMulti = _b === void 0 ? false : _b, _c = _a.isClearable, isClearable = _c === void 0 ? false : _c, selectedData = _a.selectedData, onChangeSelect = _a.onChangeSelect, _d = _a.isWithLogo, isWithLogo = _d === void 0 ? false : _d;
    var brandID = react_1.useContext(PriusSSSO_1.TenantContext).brandID;
    var _e = react_1.useState([]), brands = _e[0], setBrands = _e[1];
    var _f = react_1.useState([]), selectedBrands = _f[0], setSelectedBrands = _f[1];
    var classes = useStyles();
    var data = react_hooks_1.useQuery(exports.GET_BRANDS, {
        variables: {
            ID: brandID,
        },
    }).data;
    react_1.useEffect(function () {
        var _a, _b, _c;
        if (data && ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.tenant) === null || _a === void 0 ? void 0 : _a.brands) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length)) {
            var tempBrands = data.tenant.brands.items;
            var brandOptions = tempBrands.map(function (tempBrand) {
                return {
                    label: tempBrand.name,
                    labelElement: isWithLogo ? (react_1.default.createElement(core_1.Grid, { container: true, direction: "row", alignItems: "center", spacing: 2 },
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement("img", { src: tempBrand.logoURL, width: "21", height: "21", alt: "icon" })),
                        react_1.default.createElement(core_1.Grid, { item: true }, tempBrand.name.toLocaleUpperCase()))) : undefined,
                    value: tempBrand.ID,
                    isDisabled: false,
                };
            });
            setBrands(brandOptions);
        }
    }, [data, isWithLogo]);
    react_1.useEffect(function () {
        if (selectedData && (selectedData === null || selectedData === void 0 ? void 0 : selectedData.length)) {
            setSelectedBrands(selectedData);
        }
    }, [selectedData]);
    var handleChange = function (value) {
        var tempBrands = value;
        if (!isMulti) {
            var brand = value;
            tempBrands = (brand === null || brand === void 0 ? void 0 : brand.value) ? [brand] : [];
        }
        setSelectedBrands(value);
        onChangeSelect(tempBrands);
    };
    if (isWithLogo) {
        return (react_1.default.createElement(PriusSelect_1.default, { id: id && id + "-select-menuBrand", inputProps: {
                'data-identity': id && id + "-select-menuBrand",
            }, value: selectedBrands[0], onChange: function (event) {
                var _a, _b;
                var dataSelected = [
                    {
                        isDisabled: false,
                        value: event.target.value,
                        label: ((_a = brands.find(function (brand) { return brand.value === event.target.value; })) === null || _a === void 0 ? void 0 : _a.label) || event.target.value,
                        labelElement: ((_b = brands.find(function (brand) { return brand.value === event.target.value; })) === null || _b === void 0 ? void 0 : _b.labelElement) || react_1.default.createElement(react_1.default.Fragment, null),
                    },
                ];
                setSelectedBrands(dataSelected);
                onChangeSelect && onChangeSelect(dataSelected);
            }, classes: {
                icon: classes.selectedMenuColor,
                selectMenu: classes.selectedMenuColor,
            }, className: classes.root }, brands.map(function (brand) { return (react_1.default.createElement(core_1.MenuItem, { key: brand.value, value: brand.value }, brand.labelElement)); })));
    }
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
        react_1.default.createElement(PriusMultipleSelect_1.default, { id: id + "-select-brand", isClearable: isClearable, isMulti: isMulti, name: "brand", options: brands, placeholder: placeholder || '', selectedData: selectedBrands, onChange: function (value) { return handleChange(value); } })));
}
exports.default = PriusBrandDropdown;
var templateObject_1;
