"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPrice = function (value, currencyCode) {
    if (currencyCode === void 0) { currencyCode = "IDR"; }
    return value.toLocaleString("id-ID", {
        currency: currencyCode,
        style: "currency",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};
