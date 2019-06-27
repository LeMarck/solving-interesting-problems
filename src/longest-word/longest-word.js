'use strict';

/**
 *  Найдите самое длинное слово из данной строки.
 * @param {String} text Строка
 * @returns {String}
 */
function longestWord(text) {
    return text
        .replace(/[^a-zA-Zа-яА-ЯёЁ]/g, ' ')
        .split(/\s+/)
        .sort((a, b) => a.length - b.length)
        .pop();
}

module.exports = longestWord;
