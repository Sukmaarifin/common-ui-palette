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
var FieldImage_1 = __importDefault(require("../FieldImage"));
describe('FieldImage test', function () {
    var props = {
        record: {
            image: '#some-link-to-image',
        },
        source: 'image',
        altText: 'Super awesome product image',
        size: 'small',
    };
    var passedProps = {
        imageSource: '#some-link-to-image',
        altText: 'Super awesome product image',
        size: 'small',
    };
    // snapshot
    it('renders correctly', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(FieldImage_1.default, __assign({}, props)));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    // snapshot
    it('renders PriusThumbnail with correct props', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(FieldImage_1.default, __assign({}, props)));
        expect(wrapper.find('PriusThumbnail').props()).toEqual(passedProps);
    });
});
