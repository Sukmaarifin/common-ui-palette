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
var core_1 = require("@material-ui/core");
var PriusFieldset_1 = __importDefault(require("../PriusFieldset"));
var PriusInputNew_1 = __importDefault(require("../PriusInputNew"));
var PriusMultipleSelect_1 = __importDefault(require("../PriusMultipleSelect"));
var PriusSSSO_1 = require("../PriusSSSO");
var PriusSEO = function (_a) {
    var data = _a.data, errors = _a.errors, isSlugActive = _a.isSlugActive, placeholder = _a.placeholder, slug = _a.slug, onChange = _a.onChange, inputId = _a.inputId, _b = _a.showTitle, showTitle = _b === void 0 ? true : _b;
    var lang = react_1.useContext(PriusSSSO_1.TenantContext).lang;
    var _c = react_1.useState([]), keywords = _c[0], setKeywords = _c[1];
    react_1.useEffect(function () {
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        showTitle && (react_1.default.createElement(core_1.Typography, { variant: "h3", style: { marginBottom: "2rem" } }, "SEO")),
        react_1.default.createElement(PriusFieldset_1.default, { fullWidth: true, inputId: "input-seo-description", label: "Deskripsi", tooltipText: react_1.default.createElement("span", null,
                "Deskripsi digunakan untuk menampilkan cuplikan pencarian dari search engine Anda. Biarkan kosong untuk ",
                react_1.default.createElement("i", null, "default"),
                ".") },
            react_1.default.createElement(PriusInputNew_1.default, { inputProps: {
                    "data-identity": inputId && inputId + "-input-seoDescription",
                }, id: "input-seo-description", name: "description", autoComplete: "off", placeholder: "Masukkan meta deskripsi", value: data.length > 0 ? data[0].description : "", onChange: function (event) { return onChangeInput(event); } })),
        react_1.default.createElement(PriusFieldset_1.default, { fullWidth: true, inputId: "input-keywords", status: "normal", label: "Kata Kunci", tooltipText: react_1.default.createElement("span", null,
                "Kata kunci akan digunakan oleh search engine untuk menghubungkan halaman ini. Biarkan kosong untuk ",
                react_1.default.createElement("i", null, "default"),
                ".") },
            react_1.default.createElement(PriusMultipleSelect_1.default, { isCreatable: true, isDeletable: true, id: inputId && inputId + "-input-seoKeywords", name: "keywords", onChange: onChangeKeywords, placeholder: "Masukkan kata kunci yang akan ditampilkan", selectedData: keywords === null || keywords === void 0 ? void 0 : keywords.map(function (keyword) { return ({
                    isDisabled: false,
                    value: keyword,
                    label: keyword,
                }); }) })),
        react_1.default.createElement(PriusFieldset_1.default, { disabled: !isSlugActive, fullWidth: true, helperText: (errors === null || errors === void 0 ? void 0 : errors.slug) && errors.slug, inputId: "input-slug", label: "Slug", status: (errors === null || errors === void 0 ? void 0 : errors.slug) ? "error" : "normal", tooltipText: "Slug digunakan untuk mempersingkat URL produk Anda." },
            react_1.default.createElement(PriusInputNew_1.default, { inputProps: {
                    "data-identity": inputId && inputId + "-input-slug",
                }, id: "input-slug", name: "slug", placeholder: placeholder || "Masukkan slug untuk produk anda", value: slug || "", onChange: function (event) { return onChangeInput(event); } }))));
};
exports.default = PriusSEO;
