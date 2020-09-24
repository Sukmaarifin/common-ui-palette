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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var FieldNumber_1 = __importDefault(require("../FieldNumber"));
describe('FieldNumber test', function () {
    var THRESHOLDED_COLOR = 'red';
    var props = {
        record: {
            stock: 1,
        },
        source: 'stock',
        threshold: 2,
        thresholdedColor: THRESHOLDED_COLOR,
    };
    // snapshot
    it('renders correctly', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(FieldNumber_1.default, __assign({}, props)));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    // threshold
    it('render number with the correct color', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(FieldNumber_1.default, __assign({}, props)));
        expect(wrapper.find('span').props().style).toEqual({
            color: THRESHOLDED_COLOR,
        });
        wrapper = enzyme_1.mount(react_1.default.createElement(FieldNumber_1.default, __assign({}, props, { threshold: 0 })));
        expect(wrapper.find('span').props().style).toEqual({ color: 'inherit' });
    });
});
