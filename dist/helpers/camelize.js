"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert string into camel case
 *
 * @param str
 */
exports.camelize = function (str) {
    return str
        .replace(/^[_.,\- ]+/, '')
        .toLowerCase()
        .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, function (_, p1) { return p1.toUpperCase(); })
        .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, function (m) { return m.toUpperCase(); });
};
