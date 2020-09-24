"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertDateUTC_1 = require("../convertDateUTC");
describe('Test helper: convertDateUTC', function () {
    test('return 1591330764', function () {
        expect(convertDateUTC_1.convertDateUTC('Fri Jun 05 2020 11:19:24')).toEqual(1591330764);
    });
});
