import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import PriusFieldset from "../PriusFieldset";
import PriusInput from "../PriusInputNew";
import PriusMultipleSelect from "../PriusMultipleSelect";
import { TenantContext } from "../PriusSSSO";
var PriusSEO = function (_a) {
    var data = _a.data, errors = _a.errors, isSlugActive = _a.isSlugActive, placeholder = _a.placeholder, slug = _a.slug, onChange = _a.onChange, inputId = _a.inputId, _b = _a.showTitle, showTitle = _b === void 0 ? true : _b;
    var lang = useContext(TenantContext).lang;
    var _c = useState([]), keywords = _c[0], setKeywords = _c[1];
    useEffect(function () {
        if (data && data.length > 0) {
            var findSEOByLanguage = data.find(function (SEOs) { return SEOs.language === lang; });
            if (findSEOByLanguage) {
                setKeywords(findSEOByLanguage.keywords);
            }
        }
    }, [data, lang]);
    var onChangeInput = function (event) {
        onChange(event.target.value, event.target.name);
    };
    var onChangeKeywords = function (selectedOptions, _) {
        var selected = [];
        if (selectedOptions) {
            selectedOptions.forEach(function (selectedOption) {
                return selected.push(selectedOption.value);
            });
        }
        onChange(selected, "keywords");
    };
    return (React.createElement(React.Fragment, null,
        showTitle && (React.createElement(Typography, { variant: "h3", style: { marginBottom: "2rem" } }, "SEO")),
        React.createElement(PriusFieldset, { fullWidth: true, inputId: "input-seo-description", label: "Deskripsi", tooltipText: React.createElement("span", null,
                "Deskripsi digunakan untuk menampilkan cuplikan pencarian dari search engine Anda. Biarkan kosong untuk ",
                React.createElement("i", null, "default"),
                ".") },
            React.createElement(PriusInput, { inputProps: {
                    "data-identity": inputId && inputId + "-input-seoDescription",
                }, id: "input-seo-description", name: "description", autoComplete: "off", placeholder: "Masukkan meta deskripsi", value: data.length > 0 ? data[0].description : "", onChange: function (event) { return onChangeInput(event); } })),
        React.createElement(PriusFieldset, { fullWidth: true, inputId: "input-keywords", status: "normal", label: "Kata Kunci", tooltipText: React.createElement("span", null,
                "Kata kunci akan digunakan oleh search engine untuk menghubungkan halaman ini. Biarkan kosong untuk ",
                React.createElement("i", null, "default"),
                ".") },
            React.createElement(PriusMultipleSelect, { isCreatable: true, isDeletable: true, id: inputId && inputId + "-input-seoKeywords", name: "keywords", onChange: onChangeKeywords, placeholder: "Masukkan kata kunci yang akan ditampilkan", selectedData: keywords === null || keywords === void 0 ? void 0 : keywords.map(function (keyword) { return ({
                    isDisabled: false,
                    value: keyword,
                    label: keyword,
                }); }) })),
        React.createElement(PriusFieldset, { disabled: !isSlugActive, fullWidth: true, helperText: (errors === null || errors === void 0 ? void 0 : errors.slug) && errors.slug, inputId: "input-slug", label: "Slug", status: (errors === null || errors === void 0 ? void 0 : errors.slug) ? "error" : "normal", tooltipText: "Slug digunakan untuk mempersingkat URL produk Anda." },
            React.createElement(PriusInput, { inputProps: {
                    "data-identity": inputId && inputId + "-input-slug",
                }, id: "input-slug", name: "slug", placeholder: placeholder || "Masukkan slug untuk produk anda", value: slug || "", onChange: function (event) { return onChangeInput(event); } }))));
};
export default PriusSEO;
