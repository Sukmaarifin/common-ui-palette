import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../styles/material-ui-theme";
import PriusInput from "./PriusInput";

describe("PriusInput test", () => {
  it("renders without error", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <PriusInput />
      </ThemeProvider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
