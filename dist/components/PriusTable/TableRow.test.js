"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var styles_1 = require("@material-ui/core/styles");
var material_ui_theme_1 = __importDefault(require("../../styles/material-ui-theme"));
var TableRow_1 = __importDefault(require("./TableRow"));
var FieldText_1 = __importDefault(require("./components/FieldText"));
var FieldNumber_1 = __importDefault(require("./components/FieldNumber"));
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
describe('TableRow Testing', function () {
    // mock data for record
    var mockData = {
        site: { name: 'Dummy Site' },
        published: true,
        stock: 10,
    };
    var collapsedRecords = [
        {
            channel: 'Dummy Channel',
            price: 19000,
        },
    ];
    var props = {
        collapsedFields: [
            react_1.default.createElement(FieldText_1.default, { source: "status", width: "20%" }),
            react_1.default.createElement(FieldText_1.default, { source: "channel", width: "20%" }),
        ],
        collapsedRecordsPerRow: collapsedRecords,
        fields: [
            react_1.default.createElement(FieldText_1.default, { source: "site.name", width: "20%" }),
            react_1.default.createElement(FieldNumber_1.default, { source: "stock", width: "20%" }),
        ],
        filterPublished: 'published',
        isExpanded: false,
        isSelected: false,
        menuData: [],
        record: mockData,
        type: 'card',
        handleExpandToggle: jest.fn(),
        handleSelectToggle: jest.fn(),
    };
    // snapshot
    it('render successfully', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(TableRow_1.default, __assign({}, props))));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
