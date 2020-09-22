import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";

import TablePagination, { TablePaginationProps } from "./TablePagination";

describe("TablePagination Testing", () => {
  const render = () => {
    // mock data from parent
    const props: TablePaginationProps = {
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

    return mount(<TablePagination {...props} />);
  };

  it("render successfully", () => {
    const wrapper = render();
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

  it("simulate on click change page", () => {
    const wrapper = render();
    wrapper.find("button").first().simulate("click");
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.prop("onChangePage")).toBeCalled();
  });
});
