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
var PriusDatePicker_1 = __importDefault(require("../PriusDatePicker"));
describe('PriusDatePicker Testing', function () {
    var render = function () {
        var props = {
            selectedDays: { from: new Date(), to: new Date() },
            onDayClick: jest.fn(),
        };
        return enzyme_1.mount(react_1.default.createElement(PriusDatePicker_1.default, __assign({}, props)));
    };
    it('render successfully', function () {
        var wrapper = render();
        expect(wrapper.exists('DayPicker')).toEqual(true);
    });
    it('simulates click', function () {
        var wrapper = render();
        wrapper.find('Month').find('Day').first().simulate('click');
        expect(wrapper.props().onDayClick).toHaveBeenCalled();
    });
});
