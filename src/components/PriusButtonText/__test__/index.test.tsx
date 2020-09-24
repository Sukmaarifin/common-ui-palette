import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../styles/material-ui-theme";

import PriusButtonText, { PriusButtonTextProps } from "../index";

describe("PriusButton Testing", () => {
  const render = () => {
    const props: PriusButtonTextProps = {
      startIcon: <span>Some Icon</span>,
      endIcon: <span>Some Icon</span>,
      children: "Text",
      onClick: jest.fn(),
    };

    return mount(
      <ThemeProvider theme={theme}>
        <PriusButtonText {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
