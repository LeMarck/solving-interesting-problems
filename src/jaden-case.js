/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Поднимает все первые буквы в тексте в верхний регистр
 * @param {string} str Текст
 * @returns {string} Модифицированный текст
 */
function toJadenCase(str) {
    return str
        .split(' ')
        .reduce((arr, word) =>
            arr.concat(word[0].toUpperCase() + word.slice(1)),
        [])
        .join(' ');
}

module.exports = toJadenCase;
