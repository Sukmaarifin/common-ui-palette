import React from "react";
import { mount } from "enzyme";

import Template, { PriusCardTemplateProps } from "./PriusCardTemplate";

describe("Template Testing", () => {
  const render = () => {
    const props: PriusCardTemplateProps = {
      imageSource:
        "https://cdn.shopify.com/s/files/1/1750/7921/products/19_Front.jpg?v=1559243865",
      title: "nama",
    };

    return mount(<Template {...props} />);
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(wrapper.exists("PriusThumbnail")).toEqual(true);
    expect(wrapper.find("ForwardRef(Typography)").first().text()).toEqual(
      "nama"
    );
    wrapper.setProps({ description: "sku" });
    expect(wrapper.find("ForwardRef(Typography)").at(1).text()).toEqual("sku");
  });
});
