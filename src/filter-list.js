/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Отфильтровать массив от строк
 * @param {Array} arr массив
 * @returns {Array} Являются ли эти слова анаграммами
 */
function filterList(arr) {
    return arr.filter(item => typeof item === 'number');
}

module.exports = filterList;
