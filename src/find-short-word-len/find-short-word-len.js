/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Найти длину минимального слова
 * @param {String} str Текст
 * @returns {Number} Длинна минимального слова
 */
function findShortWordLen(str) {
    // eslint-disable-next-line
    return str.replace(/ +/gi, ' ').split(' ').map(item => item.length).sort((a, b) => a - b)[0];
}

module.exports = findShortWordLen;
