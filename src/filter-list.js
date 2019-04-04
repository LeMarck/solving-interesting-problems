/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Отфильтровать массив от строк
 * @param {Array} arr Массив
 * @returns {Array} Массив чисел
 */
function filterList(arr) {
    return arr.filter(item => typeof item === 'number');
}

module.exports = filterList;
