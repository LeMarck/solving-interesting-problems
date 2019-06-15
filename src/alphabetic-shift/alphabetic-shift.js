'use strict';

/**
 * *SOURCE*: https://codesignal.com
 * Given a string, replace each of its character by the next
 * one in the English alphabet (z would be replaced by a).
 * @param {String} inputString
 * @returns {Boolean}
 */
function alphabeticShift(inputString) {
    return inputString
        .split('')
        .map(char => char.charCodeAt())
        .map(code => code === 122 ? 97 : code + 1)
        .map(code => String.fromCharCode(code))
        .join('');
}

module.exports = alphabeticShift;
