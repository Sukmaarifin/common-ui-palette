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
var TablePagination_1 = __importDefault(require("../TablePagination"));
describe('TablePagination Testing', function () {
    var render = function () {
        // mock data from parent
        var props = {
            labelPerPage: 'produk satu halaman',
            pageInfo: {
                totalItems: 25,
                itemPerPage: 10,
                pageNumber: 1,
            },
            rowsPerPageOptions: [5, 10],
            onChangePage: jest.fn(),
            onChangeRowsPerPage: jest.fn(),
        };
        return enzyme_1.mount(react_1.default.createElement(TablePagination_1.default, __assign({}, props)));
    };
    it('render successfully', function () {
        var wrapper = render();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    // it("simulate on click change rows per page", () => {
    //   const wrapper = render();
    //   wrapper
    //     .find("ForwardRef(SelectInput)")
    //     .find("div")
    //     .first()
    //     .simulate("click");
    //   wrapper
    //     .find("ForwardRef(MenuItem)")
    //     .first()
    //     .simulate("click");
    //   expect(wrapper.prop("onChangeRowsPerPage")).toBeCalled();
    // });
    it('simulate on click change page', function () {
        var wrapper = render();
        wrapper.find('button').first().simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.prop('onChangePage')).toBeCalled();
    });
});
