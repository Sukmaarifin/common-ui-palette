import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../styles/material-ui-theme";
import FieldStatus, { StatusFieldProps } from "./FieldStatus";

describe("FieldStatus Testing", () => {
  const render = () => {
    // mock data for record
    const mockData = {
      id: "143",
      syncStatus: "SUCCESS",
    };

    const props: StatusFieldProps = {
      record: mockData,
      source: "syncStatus",
    };

    return mount(
      <ThemeProvider theme={theme}>
        <FieldStatus {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
