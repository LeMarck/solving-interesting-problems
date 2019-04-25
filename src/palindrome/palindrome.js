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
 * @param {String} word Слово
 * @returns {Boolean} Являются ли слово палиндромом
 */
function canCreatePalindrome(word) {
    word = word.toLowerCase().replace(/ /gi, '');

    const alf = {};
    let even = 0;
    let odd = 0;

    for (let index = 0; index < word.length; index++) {
        const char = word[index];
        if (alf[char]) {
            alf[char]++;
        } else {
            alf[char] = 1;
            even++;
        }
    }

    if (word.length % 2) {
        even--;
        odd++;
    }

    // eslint-disable-next-line
    for (let item in alf) {
        if (alf[item] % 2 ? --odd : --even < 0) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isPalindrome,
    canCreatePalindrome
};
