import { MoneyType } from "../typings";

export const getPriceByCurrency = (
  prices: Array<MoneyType>,
  currencyCode: string = "IDR"
): MoneyType | undefined =>
  prices.find(
    (price: MoneyType) =>
      price.code === currencyCode.toUpperCase() ||
      price.code === currencyCode.toLowerCase()
  );
