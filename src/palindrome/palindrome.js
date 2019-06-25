/* eslint
newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }]
max-statements: ["error", 18]
complexity: ["error", 7]
*/
'use strict';

/**
 * Проверяет являются ли строка палиндромом
 * @param {String} word Строка
 * @returns {Boolean} Являются ли строка палиндромом
 */
function isPalindrome(word) {
    word = word.toLowerCase().replace(/ /gi, '');

    return word === word.split('').reverse().join('');
}

/**
 * Проверяет можно ли из строки сделать палиндром
 * @param {String} inputString Строка
 * @returns {Boolean} Можно ли из строки сделать палиндром
 */
function palindromeRearranging(inputString) {
    const word = inputString.toLowerCase().replace(/ /gi, '');
    const alf = word.split('').reduce((a, char) => ({ ...a, [char]: (a[char] || 0) + 1 }), {});
    const isOddLength = word.length % 2;
    const oddWords = Object.values(alf).filter(i => i % 2).length;

    return isOddLength ? oddWords === 1 : !oddWords;
}

/**
 * *SOURCE*: https://codesignal.com
 * Для данной строки найдите самую короткую строку,
 * которая может быть достигнута путем добавления
 * символов в конец исходной строки, чтобы сделать
 * ее палиндромом.
 * @param {String} inputString Строка
 * @returns {String} Являются ли слово палиндромом
 */
function buildPalindrome(inputString) {
    let postfix = '';
    let index = 0;
    let word = inputString;

    while (!isPalindrome(word)) {
        postfix = inputString[index++] + postfix;
        word = inputString + postfix;
    }

    return word;
}

module.exports = {
    isPalindrome,
    palindromeRearranging,
    buildPalindrome
};
