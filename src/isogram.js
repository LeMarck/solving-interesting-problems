/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Проверяет являются ли слова анаграммами
 * @param {String} word слово
 * @returns {Boolean} Являются ли эти слова анаграммами
 */
function isIsogram(word) {
    const str = word.toLowerCase();
    const alf = {};

    for (let index = 0; index < str.length; index++) {
        const char = str[index];

        if (alf[char]) {
            return false;
        }

        alf[char] = true;
    }

    return true;
}

module.exports = isIsogram;
