/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Проверяет являются ли слова анаграммами
 * @param {String} str Текст
 * @returns {Number} Длинна минимального слова
 */
function findShort(str) {
    // eslint-disable-next-line
    return str.replace(/ +/gi, ' ').split(' ').map(item => item.length).sort((a, b) => a - b)[0];
}

module.exports = findShort;
