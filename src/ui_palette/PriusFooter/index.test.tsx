import React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../root/styles/material-ui-theme";

import PriusFooter from "./index";

describe("PriusFooter Testing", () => {
  const buttonClick = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <PriusFooter>
        <button onClick={buttonClick}>Click here</button>
      </PriusFooter>
    </ThemeProvider>
  );

  it("render successfully", () => {
    expect(wrapper.find("PriusFooter")).toBeTruthy();
  });

  it("simulates click children component", () => {
    wrapper.find(PriusFooter).find("button").simulate("click");
    expect(
      wrapper.find(PriusFooter).find("button").prop("onClick")
    ).toHaveBeenCalled();
  });
});
