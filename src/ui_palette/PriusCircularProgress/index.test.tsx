import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../root/styles/material-ui-theme";
import PriusCircularProgress, { PriusCircularProgressProps } from "./index";

describe("PriusCircularProgress Testing", () => {
  const customProps: PriusCircularProgressProps = {
    isWithText: true,
    size: 20,
  };

  const render = (props?: PriusCircularProgressProps) => {
    return mount(
      <ThemeProvider theme={theme}>
        <PriusCircularProgress {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully without props", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render with props", () => {
    const wrapper = render(customProps);
    expect(wrapper.text()).toEqual("Memuat . . .");
  });
});
