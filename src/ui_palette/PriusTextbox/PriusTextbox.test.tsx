import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../root/styles/material-ui-theme";
import PriusTextbox, { PriusTextboxProps } from "./PriusTextbox";

describe("Prius textbox test", () => {
  const render = () => {
    const props: PriusTextboxProps = {
      id: "prius-textbox",
      placeholder: "Typing",
      multiline: false,
      name: "Prius-Textbox",
      rows: 4,
      rowsMax: 4,
      value: "a value",
      onChange: jest.fn(),
    };

    return mount(
      <ThemeProvider theme={theme}>
        <PriusTextbox {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
