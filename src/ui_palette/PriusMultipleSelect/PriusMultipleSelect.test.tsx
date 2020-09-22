import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

import theme from "../../../root/styles/material-ui-theme";

import PriusMultipleSelect, {
  PriusMultipleSelectProps,
} from "./PriusMultipleSelect";
import PriusCreatableSelect from "./PriusCreatableSelect";

describe("PriusMultipleSelect Testing", () => {
  const customProps: PriusMultipleSelectProps = {
    placeholder: "Pilih salah satu",
    options: [
      { label: "San Jose Sharks", value: "SJS", isDisabled: false },
      { label: "Vancouver Canucks", value: "VAN", isDisabled: false },
      { label: "Vegas Golden Knights", value: "VGK", isDisabled: false },
    ],
    onChange: jest.fn(),
  };

  const render = (props: PriusMultipleSelectProps) => {
    return mount(
      <ThemeProvider theme={theme}>
        <PriusMultipleSelect {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render(customProps);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("render `Select` from `react-select`", () => {
    const wrapper = render(customProps);

    expect(wrapper.find(Select)).toHaveLength(1);
  });

  it("render `PriusCreatableSelect` that contain `CreatableSelect` from `react-select/creatable`", () => {
    const wrapper = render({ ...customProps, isCreatable: true });

    const priusCreatableSelect = wrapper.find(PriusCreatableSelect);
    expect(priusCreatableSelect.find(CreatableSelect)).toHaveLength(1);
  });
});
