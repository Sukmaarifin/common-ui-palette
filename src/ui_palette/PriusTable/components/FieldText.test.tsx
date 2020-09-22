import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../../root/styles/material-ui-theme";
import TextField, { FieldText } from "./FieldText";

describe("FieldText Testing", () => {
  const render = () => {
    // mock data for record
    const mockData = {
      name: "contoh nama",
      id: "143",
      images: [
        "https://picsum.photos/id/8/720/480",
        "https://picsum.photos/id/17/720/480",
        "https://picsum.photos/id/26/720/480",
        "https://picsum.photos/id/31/720/480",
        "https://picsum.photos/id/48/720/480",
      ],
      syncStatus: "SUCCESS",
    };

    const props: FieldText = {
      record: mockData,
      source: "name",
    };

    return mount(
      <ThemeProvider theme={theme}>
        <TextField {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  // it("render text with tooltip", () => {
  //   const wrapper = render();
  //   wrapper.setProps({ tooltipText: "Tooltip, Cuy!" });
  //   wrapper.update();
  //   console.log(wrapper.debug())
  //   expect(wrapper.find("PriusTooltip").exists()).toBeTruthy();
  //   expect(wrapper.find("PriusTooltip").prop("title")).toEqual("Tooltip, Cuy!");
  // });

  // it("render text with description props", () => {
  //   const wrapper = render();
  //   wrapper.setProps({ description: "id" });
  //   expect(typeof wrapper.prop("description")).toEqual("string");
  //   expect(
  //     wrapper
  //       .find("span")
  //       .at(1)
  //       .text()
  //   ).toEqual("143");
  // });

  // it("render text with description and notesBadge props", () => {
  //   const wrapper = render();
  //   wrapper.setProps({
  //     description: "id",
  //     notesBadge: { text: "notes", backdropData: "contoh notes" }
  //   });
  //   expect(typeof wrapper.prop("notesBadge")).toEqual("object");
  //   expect(wrapper.find("PriusLabel").exists()).toBeTruthy();
  //   expect(wrapper.find("PriusLabel").prop("text")).toEqual("notes");
  // });

  // it("simulates on click", () => {
  //   const wrapper = render();
  //   wrapper.setProps({
  //     description: "id",
  //     notesBadge: { text: "notes", backdropData: "contoh notes" },
  //     onClick: jest.fn()
  //   });
  //   const titleProduct = wrapper.find("span").first();
  //   titleProduct.simulate("click");
  //   expect(titleProduct.text()).toEqual("contoh nama");
  //   expect(wrapper.prop("onClick")).toBeCalled();
  // });
});
