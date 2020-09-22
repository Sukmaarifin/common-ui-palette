import React from "react";
import { mount } from "enzyme";

import PriusDatePickerInput, { DatePickerInputProps } from "./index";

describe("PriusDatePickerInput Testing", () => {
  const render = () => {
    const props: DatePickerInputProps = {
      selectedDate: new Date(),
      onDayClick: jest.fn(),
    };

    return mount(<PriusDatePickerInput {...props} />);
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(wrapper.exists("DayPickerInput")).toEqual(true);
  });

  it("simulates click", () => {
    const wrapper = render();
    wrapper.find("input").simulate("click");
    wrapper.find("Day").at(10).find("div").simulate("click");
    expect(wrapper.props().onDayClick).toHaveBeenCalled();
  });
});
