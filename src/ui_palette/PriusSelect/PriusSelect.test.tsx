import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

import theme from "../../styles/material-ui-theme";
import PriusSelect from "./PriusSelect";

describe("PriusSelect test", () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <PriusSelect
        name="currency"
        id="input-currency"
        placeholder="Lorem ipsum color dolot"
        value={"usd"}
      >
        <MenuItem value={"usd"}>United States Dollar</MenuItem>
        <MenuItem value={"idr"}>Indonesian Rupiah</MenuItem>
        <MenuItem value={"jpy"} disabled>
          Japanese Yen
        </MenuItem>
      </PriusSelect>
    </ThemeProvider>
  );

  it("renders without error", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
