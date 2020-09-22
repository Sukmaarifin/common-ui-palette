import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../root/styles/material-ui-theme";
import PriusInfoBox, { PriusInfoBoxProps } from "./index";

describe("PriusInfoBox Testing", () => {
  const render = () => {
    const props: PriusInfoBoxProps = {
      title: "Info",
      message: <p>This is an info message.</p>,
    };

    return mount(
      <ThemeProvider theme={theme}>
        <PriusInfoBox {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
