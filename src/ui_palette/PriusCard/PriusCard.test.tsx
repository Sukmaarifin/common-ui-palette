import React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../root/styles/material-ui-theme";
import PriusCard, { PriusCardProps } from "./index";
import { AddCircleIcon } from "../../icons";

describe("PriusCard Testing", () => {
  const mockProps: PriusCardProps = {
    icon: <AddCircleIcon />,
    title: "Tambah",
    desc: "Klik disini untuk menambah",
  };

  it("render with required props", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <PriusCard {...mockProps} />
      </ThemeProvider>
    );
    expect(
      wrapper.containsMatchingElement(
        <div className="makeStyles-title-7">Tambah</div>
      )
    ).toBeTruthy();
  });

  it("render with label Coming Soon", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <PriusCard label="Coming Soon" {...mockProps} />
      </ThemeProvider>
    );
    expect(wrapper.find("PriusLabel").first().text()).toStrictEqual(
      "Coming Soon"
    );
  });

  it("render with onClick function", () => {
    const mockFunction = () => alert("card clicked");
    jest.spyOn(window, "alert").mockImplementation(() => {});

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <PriusCard onClick={mockFunction} {...mockProps} />
      </ThemeProvider>
    );
    // user simulate click on PriusCard
    wrapper.simulate("click");

    expect(window.alert).toBeCalledWith("card clicked");
  });
});
