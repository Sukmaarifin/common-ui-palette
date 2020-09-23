import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../styles/material-ui-theme";
import PriusUploadFile, { PriusUploadFileProps } from ".";
import { StatusUploadType } from "../PriusIndicatorLabel";

describe("PriusUploadFile Testing", () => {
  const render = () => {
    const props: PriusUploadFileProps = {
      statusUpload: StatusUploadType.EMPTY,
      onUploadFile: jest.fn(),
    };

    return mount(
      <ThemeProvider theme={theme}>
        <PriusUploadFile {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should call onMouseEnter()", () => {
    const wrapper = render();
    wrapper.find("#divFile").first().simulate("mouseenter");
    expect(wrapper.find("#divFile").first().prop("style")).toEqual({
      border: "1px dashed #1c9aea",
    });
  });

  it("should call onMouseLeave()", () => {
    const wrapper = render();
    wrapper.find("#divFile").first().simulate("mouseleave");
    expect(wrapper.find("#divFile").first().prop("style")).toEqual({
      border: "1px dashed #ececec",
    });
  });

  it("should call onDragStart()", () => {
    const wrapper = render();
    wrapper.find("#divFile").first().simulate("dragstart");
  });

  it("should call onDragOver()", () => {
    const wrapper = render();
    wrapper.find("#divFile").first().simulate("dragover");
  });

  it("should call onDrop()", () => {
    const wrapper = render();
    wrapper.find("#divFile").first().simulate("drop");
  });

  it("should call onDragEnd()", () => {
    const wrapper = render();
    wrapper.find("#divFile").first().simulate("dragend");
  });
});
