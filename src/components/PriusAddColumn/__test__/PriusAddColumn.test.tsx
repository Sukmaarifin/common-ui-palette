import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";

import PriusAddColumn, { priusAddColumnProps } from "../PriusAddColumn";

describe("Prius add column test", () => {
  const render = () => {
    const props: priusAddColumnProps = {
      inputElement: <input type="text" placeholder="masukkan"></input>,
      removeIcon: <span>delete</span>,
      onChangeValue: jest.fn(),
    };

    return mount(<PriusAddColumn {...props} />);
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("input first value", () => {
    const wrapper = render();
    expect(wrapper.find("input").first().props().value).toBe("");
    wrapper
      .find("input")
      .first()
      .simulate("change", { target: { value: "test" } });
    expect(wrapper.find("input").first().props().value).toBe("test");
  });

  it("delete second value", () => {
    const wrapper = render();
    wrapper
      .find("input")
      .first()
      .simulate("change", { target: { value: "test" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "col2" } });
    wrapper.find("a").first().simulate("click");
    expect(wrapper.find("input").at(1).props().value).toBe("");
  });

  const renderMultipleColumn = () => {
    const props: priusAddColumnProps = {
      inputElement: (
        <>
          <select name="carlist" form="carform">
            <option value="">Choose</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <input type="text" placeholder="masukkan"></input>
        </>
      ),
      removeIcon: <span>delete</span>,
      onChangeValue: jest.fn(),
    };

    return mount(<PriusAddColumn {...props} />);
  };

  it("render successfully", () => {
    const wrapper = renderMultipleColumn();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("input first value", () => {
    const wrapper = renderMultipleColumn();
    expect(wrapper.find("select").first().props().value).toBe("");
    wrapper
      .find("select")
      .first()
      .simulate("change", { target: { value: "volvo" } });
    expect(wrapper.find("select").first().props().value).toBe("volvo");

    expect(wrapper.find("input").first().props().value).toBe("");
    wrapper
      .find("input")
      .first()
      .simulate("change", { target: { value: "test" } });
    expect(wrapper.find("input").first().props().value).toBe("test");
  });

  it("delete second value", () => {
    const wrapper = renderMultipleColumn();
    wrapper
      .find("select")
      .first()
      .simulate("change", { target: { value: "volvo" } });
    wrapper
      .find("input")
      .first()
      .simulate("change", { target: { value: "test" } });

    wrapper
      .find("select")
      .at(1)
      .simulate("change", { target: { value: "saab" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "test saab" } });
    wrapper.find("a").first().simulate("click");

    expect(wrapper.find("select").at(1).props().value).toBe("");
    expect(wrapper.find("input").at(1).props().value).toBe("");
  });
});
