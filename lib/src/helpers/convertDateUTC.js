/**
 * Convert Date Format into Unix Timestamp
 * @method convertDateUTC
 * @param date
 */
export var convertDateUTC = function (date) {
    return Math.round(new Date(date).getTime() / 1000);
};
