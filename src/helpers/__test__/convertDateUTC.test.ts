import { convertDateUTC } from "../convertDateUTC";

describe("Test helper: convertDateUTC", () => {
  test("return 1591330764", () => {
    expect(convertDateUTC("Fri Jun 05 2020 11:19:24")).toEqual(1591330764);
  });
});
