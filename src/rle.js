'use strict';

/**
 * RLE алгоритм сжатия
 * @param {String} str Исходная строка
 * @returns {String} Сжатая строка
 */
function rle(str) {
    if (!str) {
        throw new TypeError('Пустая строка');
    }

    let char = str[0];
    let size = 1;
    let result = '';

    for (let index = 1; index < str.length; index++) {
        if (str[index] === char) {
            size++;
        } else {
            result += (size > 1 ? size : '') + char;
            char = str[index];
            size = 1;
        }
    }

    return result + (size > 1 ? size : '') + char;
}

module.exports = rle;
