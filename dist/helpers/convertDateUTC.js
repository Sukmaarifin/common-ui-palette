"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert Date Format into Unix Timestamp
 * @method convertDateUTC
 * @param date
 */
exports.convertDateUTC = function (date) {
    return Math.round(new Date(date).getTime() / 1000);
};
