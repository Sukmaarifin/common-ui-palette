import { getPriceByCurrency } from "./moneyHelpers";

describe("Test helper: convertDateUTC", () => {
  const mockData = { code: "IDR", value: 30000 };
  const mockParams = [mockData];

  test("return undefined", () => {
    expect(getPriceByCurrency(mockParams, "USD")).toEqual(undefined);
  });

  test("return 30000", () => {
    expect(getPriceByCurrency(mockParams)).toEqual(mockData);
  });
});
