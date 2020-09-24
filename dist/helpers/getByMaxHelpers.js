"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get text from array of strings by passing max data,
 * Return text with "+ [remaining data length] more"
 * @param texts
 * @param maxWord
 */
exports.getByMaxIndex = function (texts, maxIndex) {
    var shownText = '';
    // Distinct array texts
    var uniqueTexts = texts.filter(function (item, idx) {
        return texts.indexOf(item) === idx;
    });
    shownText = uniqueTexts.join(', ');
    if (maxIndex && uniqueTexts.length > maxIndex) {
        shownText = uniqueTexts.slice(0, maxIndex).join(', ') + ", +" + (uniqueTexts.length - maxIndex) + " more";
    }
    return {
        text: shownText,
        tooltipText: maxIndex && uniqueTexts.length > maxIndex
            ? uniqueTexts.join(', ')
            : undefined,
    };
};
/**
 * Get text from array of strings by passing max length,
 * Return text with "..." if exceeds maxChar
 * @param texts
 * @param maxChar
 */
exports.getByMaxCharacter = function (texts, maxChar) {
    var shownText = '';
    // Distinct array texts
    var uniqueTexts = texts.filter(function (item, idx) {
        return texts.indexOf(item) === idx;
    });
    shownText = uniqueTexts.join(', ');
    if (shownText.length > maxChar) {
        shownText = shownText.substring(0, maxChar) + "...";
    }
    return {
        text: shownText,
        tooltipText: uniqueTexts.join(', '),
    };
};
