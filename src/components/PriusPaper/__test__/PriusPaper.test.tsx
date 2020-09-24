import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../styles/material-ui-theme";

import PriusPaper, { PriusPaperProps } from "../PriusPaper";

describe("PriusPaper Testing", () => {
  const mountComponent = (props: PriusPaperProps) =>
    mount(
      <ThemeProvider theme={theme}>
        <PriusPaper {...props}>Hello from PriusPaper!</PriusPaper>
      </ThemeProvider>
    );

  it("add padding class", () => {
    const wrapper = mountComponent({ padding: "largeSquare" });
    expect(
      wrapper
        .find("PriusPaper")
        .childAt(0)
        .hasClass(/-(largeSquare)-(\d+)/)
    ).toBe(true);
  });

  it("add rounded class", () => {
    const wrapper = mountComponent({ rounded: true });
    expect(
      wrapper
        .find("PriusPaper")
        .childAt(0)
        .hasClass(/-(rounded)-(\d+)/)
    ).toBe(true);
  });

  it("render with custom component", () => {
    const wrapper = mountComponent({ component: "section" });
    expect(wrapper.find("PriusPaper").childAt(0).is("section")).toBe(true);
  });

  it("render successfully", () => {
    const wrapper = mountComponent({});
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
