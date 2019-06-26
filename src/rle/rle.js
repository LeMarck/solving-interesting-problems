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

    return str.replace(/(.)\1+/g, (chars, char) => chars.length + char);
}

module.exports = rle;
