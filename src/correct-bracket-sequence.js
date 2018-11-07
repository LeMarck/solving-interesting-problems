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

module.exports = correctBracketSequence;
