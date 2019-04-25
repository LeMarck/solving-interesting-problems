/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Проверяет является ли слово изограммой
 * *NOTE:* Изограмма - это логологический термин
 * для слова или фразы без повторяющейся буквы
 * @param {String} word Слово
 * @returns {Boolean} Являются ли это слово изограммой
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
