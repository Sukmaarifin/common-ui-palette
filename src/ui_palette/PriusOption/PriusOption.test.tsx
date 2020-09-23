import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../styles/material-ui-theme";

import PriusOption, { PriusOptionProps } from "./PriusOption";
import { DownloadIcon, TrashBinIcon } from "../../icons";

describe("PriusOption Testing", () => {
  const render = () => {
    const menuData = [
      {
        disabled: true,
        iconLeft: <DownloadIcon />,
        title: "Download",
        tooltipText: "Download feature is not ready yet!",
      },
      {
        disabled: false,
        iconLeft: <TrashBinIcon />,
        title: "Delete",
        onClick: jest.fn(),
      },
    ];

    const props: PriusOptionProps = {
      icon: "vertical",
      items: menuData,
    };

    return shallow(
      <ThemeProvider theme={theme}>
        <PriusOption {...props} />
      </ThemeProvider>
    );
  };

  it("render successfully", () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
