/* eslint
newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }]
max-statements: ["error", 18]
complexity: ["error", 7]
*/
'use strict';

/**
 * Проверяет являются ли слово палиндромом
 * @param {String} word Слово
 * @returns {Boolean} Являются ли слово палиндромом
 */
function isPalindrome(word) {
    word = word.toLowerCase().replace(/ /gi, '');

    return word === word.split('').reverse().join('');
}

/**
 * Можно ли из слова сделать палиндром
 * @param {String} inputString Слово
 * @returns {Boolean} Являются ли слово палиндромом
 */
function palindromeRearranging(inputString) {
    const word = inputString.toLowerCase().replace(/ /gi, '');
    const alf = word.split('').reduce((a, char) => ({ ...a, [char]: (a[char] || 0) + 1 }), {});
    const isOddLength = word.length % 2;
    const oddWords = Object.values(alf).filter(i => i % 2).length;

    return isOddLength ? oddWords === 1 : !oddWords;
}

module.exports = {
    isPalindrome,
    palindromeRearranging
};
