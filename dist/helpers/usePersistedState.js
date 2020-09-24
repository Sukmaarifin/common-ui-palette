"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = require("react");
// TO DO: Better state typing
function usePersistedState(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = react_1.useState(function () {
        try {
            // Get from local storage by key
            var item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            if (item) {
                return JSON.parse(item);
            }
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
        catch (error) {
            // If error also return initialValue
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        try {
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}
exports.default = usePersistedState;
