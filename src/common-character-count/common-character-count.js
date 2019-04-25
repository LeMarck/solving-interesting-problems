'use strict';

/**
 * Given two strings, find the number of common characters between them.
 * @param {String} first Первое слово
 * @param {String} second Второе слово
 * @returns {Number}
 */
function commonCharacterCount(first, second) {
    for (const char of first) {
        second = second.replace(char, '果');
    }

    return second.replace(/[^果]/g, '').length;
}

module.exports = commonCharacterCount;
