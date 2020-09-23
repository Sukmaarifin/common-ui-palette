import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import { InputLabel, FormControl, FormHelperText } from "@material-ui/core";

import theme from "../../styles/material-ui-theme";

import PriusFieldset from "./PriusFieldset";
import PriusTooltip from "../PriusTooltip";
import {
  CheckCircleOutlinedIcon,
  ExclamationCircleOutlinedIcon,
} from "../../icons";

describe("PriusFieldset test", () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <PriusFieldset
        label="Email"
        inputId="input-email"
        tooltipText="Halo"
        status="success"
        helperText="Lorem ipsum color dolot"
      >
        <span id="children">Children</span>
      </PriusFieldset>
    </ThemeProvider>
  );

  it("renders without error", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render InputLabel if `label` is provided", () => {
    expect(wrapper.find(InputLabel)).toHaveLength(1);
  });

  it("render PriusTooltip if `tooltipText` is provided", () => {
    expect(wrapper.find(PriusTooltip)).toHaveLength(1);
  });

  it("render FormHelperText if `helperText` is provided", () => {
    expect(wrapper.find(FormHelperText)).toHaveLength(1);
  });

  it("render correct components if `status` is 'success'", () => {
    // FormControl has className of 'success'
    const className = wrapper.find(FormControl).prop("className") || "";
    expect(className.indexOf("success")).not.toEqual(-1);

    // HelperText contains CheckCircleOutlinedIcon
    expect(
      wrapper.find(FormHelperText).find(CheckCircleOutlinedIcon)
    ).toHaveLength(1);
  });

  it("render correct components if `status` is 'error'", () => {
    const wrapper2 = mount(
      <ThemeProvider theme={theme}>
        <PriusFieldset
          label="Email"
          inputId="input-email"
          tooltipText="Halo"
          status="error"
          helperText="Lorem ipsum color dolot"
        >
          <span id="children">Children</span>
        </PriusFieldset>
      </ThemeProvider>
    );

    // FormControl has `error` props of `true`
    expect(wrapper2.find(FormControl).prop("error")).toEqual(true);

    // HelperText contains ExclamationCircleOutlinedIcon
    expect(
      wrapper2.find(FormHelperText).find(ExclamationCircleOutlinedIcon)
    ).toHaveLength(1);
  });
});
