"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
/**
 * @todo
 * [ ] Unit Test
 */
var react_1 = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var react_number_format_1 = __importDefault(require("react-number-format"));
var PriusFieldset_1 = __importDefault(require("../../../components/PriusFieldset"));
var PriusInputNew_1 = __importDefault(require("../../../components/PriusInputNew"));
var PriusInputGroup_1 = __importDefault(require("../../PriusInputGroup"));
var useStyles = styles_1.makeStyles(function () { return ({
    priceInput: {
        fontSize: '0.8125rem',
        fontFamily: 'Metropolis',
        margin: '-0.2rem -0.8rem',
        border: 'none',
        width: '100%',
        '&:focus': {
            outline: 'none',
        },
    },
    container: {
        justifySelf: 'flex-end',
        alignSelf: 'center',
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        paddingRight: '1.375rem',
    },
}); });
var FieldInput = function (_a) {
    var handleOnChange = _a.handleOnChange, fieldId = _a.fieldId, source = _a.source, record = _a.record, rowID = _a.rowID, className = _a.className, minInput = _a.minInput, maxInput = _a.maxInput, isInputPrice = _a.isInputPrice, _b = _a.isInputString, isInputString = _b === void 0 ? false : _b, _c = _a.isRequired, isRequired = _c === void 0 ? false : _c, style = _a.style, fixedWidth = _a.fixedWidth, width = _a.width, title = _a.title, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, leftLabel = _a.leftLabel;
    var classes = useStyles();
    var _e = react_1.useState(''), input = _e[0], setInput = _e[1];
    var _f = react_1.useState(0), priceInput = _f[0], setPriceInput = _f[1];
    var _g = react_1.useState(false), isError = _g[0], setIsError = _g[1];
    var ID = get_1.default(record, rowID);
    react_1.useEffect(function () {
        var data = get_1.default(record, source);
        isInputPrice ? setPriceInput(data) : setInput(data);
        if (isRequired) {
            data.length ? setIsError(false) : setIsError(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [record, source]);
    var getErrors = function (value) {
        if (isRequired) {
            value.length ? setIsError(false) : setIsError(true);
        }
        if (minInput && maxInput) {
            if (value) {
                if (parseInt(value) < minInput || parseInt(value) > maxInput) {
                    setIsError(true);
                }
                else {
                    setIsError(false);
                }
            }
            else {
                setIsError(true);
            }
        }
    };
    return (react_1.default.createElement(core_1.Grid, { item: true, style: __assign(__assign({}, style), { alignSelf: 'center', flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width }) },
        react_1.default.createElement(core_1.Grid, { item: true, className: classes.container },
            react_1.default.createElement(PriusFieldset_1.default, { disabled: isDisabled, gutterBottom: false, status: isError ? 'error' : 'normal', helperText: isRequired ? (isError ? title + " wajib diisi" : '') : '' }, isInputPrice ? (react_1.default.createElement(PriusInputGroup_1.default, { inputId: fieldId && "" + fieldId, name: "inputCurrency", leftLabel: leftLabel, handleInput: function () { }, handleDropdown: function () { } },
                react_1.default.createElement(react_number_format_1.default, { id: fieldId && "" + fieldId, "data-identity": fieldId && "" + fieldId, disabled: isDisabled, allowNegative: false, decimalSeparator: ',', isNumericString: true, thousandSeparator: '.', value: priceInput, className: classes.priceInput, onValueChange: function (values) {
                        var floatValue = values.floatValue;
                        setPriceInput(floatValue);
                        handleOnChange(ID, floatValue ? floatValue : 0);
                    } }))) : (react_1.default.createElement(PriusInputNew_1.default, { disabled: isDisabled, className: className && "" + className, id: fieldId && "" + fieldId, inputProps: {
                    'data-identity': fieldId && "" + fieldId,
                }, type: "text", autoComplete: "off", value: input, onChange: function (event) {
                    setInput(event.target.value);
                    getErrors(event.target.value);
                    isInputString
                        ? handleOnChange(ID, event.target.value ? event.target.value : '')
                        : handleOnChange(ID, event.target.value
                            ? parseInt(event.target.value)
                            : 0);
                } }))))));
};
exports.default = FieldInput;
