/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Проверяет являются ли слова анаграммами
 * @param {String} first Первое слово
 * @param {String} second Второе слово
 * @returns {Boolean} Являются ли эти слова анаграммами
 */
function isAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    first = first.toLowerCase().split('').sort();
    second = second.toLowerCase().split('').sort();

    for (let index = 0; index < first.length; index++) {
        if (first[index] !== second[index]) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
