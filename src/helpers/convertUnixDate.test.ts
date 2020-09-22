import { convertUnixDate } from "./convertUnixDate";

describe("Test helper: convertUnixDate", () => {
  const mockResult = {
    UTC: "1591330764",
    date: "5 June 2020",
    dateTime: new Date(parseInt("1591330764") * 1000),
    time: "11:19 WIB",
  };

  test("return 1591330764", () => {
    expect(convertUnixDate("1591330764")).toEqual(mockResult);
  });
});
