import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";

import FieldNumber, { FieldNumberProps } from "./FieldNumber";

describe("FieldNumber test", () => {
  const THRESHOLDED_COLOR = "red";

  const props: FieldNumberProps = {
    record: {
      stock: 1,
    },
    source: "stock",
    threshold: 2,
    thresholdedColor: THRESHOLDED_COLOR,
  };

  // snapshot
  it("renders correctly", () => {
    const wrapper = mount(<FieldNumber {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  // threshold
  it("render number with the correct color", () => {
    let wrapper = mount(<FieldNumber {...props} />);
    expect(wrapper.find("span").props().style).toEqual({
      color: THRESHOLDED_COLOR,
    });

    wrapper = mount(<FieldNumber {...props} threshold={0} />);
    expect(wrapper.find("span").props().style).toEqual({ color: "inherit" });
  });
});
