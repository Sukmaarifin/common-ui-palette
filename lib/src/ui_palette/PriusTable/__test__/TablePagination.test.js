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
import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import TablePagination from "../TablePagination";
describe("TablePagination Testing", function () {
    var render = function () {
        // mock data from parent
        var props = {
            labelPerPage: "produk satu halaman",
            pageInfo: {
                totalItems: 25,
                itemPerPage: 10,
                pageNumber: 1,
            },
            rowsPerPageOptions: [5, 10],
            onChangePage: jest.fn(),
            onChangeRowsPerPage: jest.fn(),
        };
        return mount(React.createElement(TablePagination, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
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
    it("simulate on click change page", function () {
        var wrapper = render();
        wrapper.find("button").first().simulate("click");
        wrapper.find("button").at(1).simulate("click");
        expect(wrapper.prop("onChangePage")).toBeCalled();
    });
});
