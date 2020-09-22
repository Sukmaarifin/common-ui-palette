export const convertToPrice = (value: number, currencyCode: string = "IDR") => {
  return value.toLocaleString("id-ID", {
    currency: currencyCode,
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
