/* eslint max-depth: ["error", 3] */
'use strict';

/**
 * Правильная скобочная последовательность
 * @param {String} str Скобочная последовательность
 * @returns {Boolean} Являются ли эти последовательность правильной
 */
function correctBracketSequence(str) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{',
        '>': '<'
    };
    const openBracket = Object.values(brackets);
    const stack = [];
    let char;

    for (let index = 0; index < str.length; index++) {
        char = str[index];

        if (openBracket.includes(char)) {
            stack.push(char);
        }

        if (brackets[char]) {
            if (stack[stack.length - 1] === brackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return !stack.length;
}

/**
 * Дано целое число n. Требуется вывести все правильные скобочные последовательности длины 2 ⋅ n,
 * упорядоченные лексикографически (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).
 * *NOTE:* В задаче используются только круглые скобки.
 * @param {Number} num кол-во скобок
 * @returns {Array} массив с правильными скобочными последовательностями
 */
function generatingBracketSequences(num) {
    const size = num * 2;
    const array = [];
    const brackets = [];

    (function generator(arr, diff, index) {
        if (diff <= size - index - 2) {
            arr[index] = '(';
            generator(arr, diff + 1, index + 1);
        }

        if (diff > 0) {
            arr[index] = ')';
            generator(arr, diff - 1, index + 1);
        }

        if (index === size && !diff) {
            brackets.push(arr.join(''));
        }
    }(array, 0, 0));

    return brackets;
}

module.exports = {
    correctBracketSequence,
    generatingBracketSequences
};
