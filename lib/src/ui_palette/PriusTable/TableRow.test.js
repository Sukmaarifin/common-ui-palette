var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../styles/material-ui-theme";
import TableRow from "./TableRow";
import FieldText from "./components/FieldText";
import FieldNumber from "./components/FieldNumber";
/**
 * Test Case
 *
 * 1. render all `fields` props
 * 2. render expand toggle button
 * 3. render checkbox if `isSelectable` = true
 * 4. render Collapse if:
 * 		- `collapsedRecordsPerRow.length` > 0
 * 		- `collapsedFields.length > 0` > 0
 *    - typeof `handleExpandToggle` = "function"
 * 5. render all collapsedRow
 * 6. render menu (PriusOption) if `menuData` is preserved
 * 7. snapshot
 * etc?
 */
describe("TableRow Testing", function () {
    // mock data for record
    var mockData = {
        site: { name: "Dummy Site" },
        published: true,
        stock: 10,
    };
    var collapsedRecords = [
        {
            channel: "Dummy Channel",
            price: 19000,
        },
    ];
    var props = {
        collapsedFields: [
            React.createElement(FieldText, { source: "status", width: "20%" }),
            React.createElement(FieldText, { source: "channel", width: "20%" }),
        ],
        collapsedRecordsPerRow: collapsedRecords,
        fields: [
            React.createElement(FieldText, { source: "site.name", width: "20%" }),
            React.createElement(FieldNumber, { source: "stock", width: "20%" }),
        ],
        filterPublished: "published",
        isExpanded: false,
        isSelected: false,
        menuData: [],
        record: mockData,
        type: "card",
        handleExpandToggle: jest.fn(),
        handleSelectToggle: jest.fn(),
    };
    // snapshot
    it("render successfully", function () {
        var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(TableRow, __assign({}, props))));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
