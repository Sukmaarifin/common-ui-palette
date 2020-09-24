/**
 * @todo
 * [ ] Unit test
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext, useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles, ThemeProvider, } from "@material-ui/core/styles";
import { Grid, MenuItem } from "@material-ui/core";
import { TenantContext } from "../PriusSSSO";
import PriusMultipleSelect from "../PriusMultipleSelect";
import PriusSelect from "../PriusSelect";
import theme from "../../styles/material-ui-theme";
export var GET_BRANDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query Brands($ID: ID!) {\n    tenant(ID: $ID) {\n      ID\n      brands {\n        items {\n          ID\n          name\n          logoURL\n        }\n      }\n    }\n  }\n"], ["\n  query Brands($ID: ID!) {\n    tenant(ID: $ID) {\n      ID\n      brands {\n        items {\n          ID\n          name\n          logoURL\n        }\n      }\n    }\n  }\n"])));
var useStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: "#1C1B1B",
        color: theme.colors.white,
        margin: "0 15px",
        border: "1px solid #1C1B1B",
    },
    selectedMenuColor: {
        color: theme.colors.white,
    },
}); });
function PriusBrandDropdown(_a) {
    var id = _a.id, placeholder = _a.placeholder, _b = _a.isMulti, isMulti = _b === void 0 ? false : _b, _c = _a.isClearable, isClearable = _c === void 0 ? false : _c, selectedData = _a.selectedData, onChangeSelect = _a.onChangeSelect, _d = _a.isWithLogo, isWithLogo = _d === void 0 ? false : _d;
    var brandID = useContext(TenantContext).brandID;
    var _e = useState([]), brands = _e[0], setBrands = _e[1];
    var _f = useState([]), selectedBrands = _f[0], setSelectedBrands = _f[1];
    var classes = useStyles();
    var data = useQuery(GET_BRANDS, {
        variables: {
            ID: brandID,
        },
    }).data;
    useEffect(function () {
        var _a, _b, _c;
        if (data && ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.tenant) === null || _a === void 0 ? void 0 : _a.brands) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length)) {
            var tempBrands = data.tenant.brands.items;
            var brandOptions = tempBrands.map(function (tempBrand) {
                return {
                    label: tempBrand.name,
                    labelElement: isWithLogo ? (React.createElement(Grid, { container: true, direction: "row", alignItems: "center", spacing: 2 },
                        React.createElement(Grid, { item: true },
                            React.createElement("img", { src: tempBrand.logoURL, width: "21", height: "21", alt: "icon" })),
                        React.createElement(Grid, { item: true }, tempBrand.name.toLocaleUpperCase()))) : undefined,
                    value: tempBrand.ID,
                    isDisabled: false,
                };
            });
            setBrands(brandOptions);
        }
    }, [data, isWithLogo]);
    useEffect(function () {
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
        return (React.createElement(PriusSelect, { id: id && id + "-select-menuBrand", inputProps: {
                "data-identity": id && id + "-select-menuBrand",
            }, value: selectedBrands[0], onChange: function (event) {
                var _a, _b;
                var dataSelected = [
                    {
                        isDisabled: false,
                        value: event.target.value,
                        label: ((_a = brands.find(function (brand) { return brand.value === event.target.value; })) === null || _a === void 0 ? void 0 : _a.label) || event.target.value,
                        labelElement: ((_b = brands.find(function (brand) { return brand.value === event.target.value; })) === null || _b === void 0 ? void 0 : _b.labelElement) || React.createElement(React.Fragment, null),
                    },
                ];
                setSelectedBrands(dataSelected);
                onChangeSelect && onChangeSelect(dataSelected);
            }, classes: {
                icon: classes.selectedMenuColor,
                selectMenu: classes.selectedMenuColor,
            }, className: classes.root }, brands.map(function (brand) { return (React.createElement(MenuItem, { key: brand.value, value: brand.value }, brand.labelElement)); })));
    }
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(PriusMultipleSelect, { id: id + "-select-brand", isClearable: isClearable, isMulti: isMulti, name: "brand", options: brands, placeholder: placeholder || "", selectedData: selectedBrands, onChange: function (value) { return handleChange(value); } })));
}
export default PriusBrandDropdown;
var templateObject_1;
