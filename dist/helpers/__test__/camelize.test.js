"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelize_1 = require("../camelize");
describe("Test helper: camelize", function () {
    test("return string in camelCase format", function () {
        expect(camelize_1.camelize("Lorem-ipsum color")).toEqual("loremIpsumColor");
    });
});
