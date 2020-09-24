import { camelize } from "../camelize";
describe("Test helper: camelize", function () {
    test("return string in camelCase format", function () {
        expect(camelize("Lorem-ipsum color")).toEqual("loremIpsumColor");
    });
});
