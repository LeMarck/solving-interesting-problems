'use strict';

/**
 * Даны две строки строчных латинских символов: строка J и строка S.
 * Символы, входящие в строку J, — «драгоценности», входящие в строку S — «камни».
 * Нужно определить, какое количество символов из S одновременно являются «драгоценностями».
 * Проще говоря, нужно проверить, какое количество символов из S входит в J.
 * @param {String} stones
 * @param {String} jewelry
 * @returns {Number}
 */
function stonesAndJewelry(stones, jewelry) {
    if (!stones || !jewelry) {
        return 0;
    }

    let result = 0;

    for (let stone of stones) {
        if (jewelry.includes(stone)) {
            result++;
        }
    }

    return result;
}

module.exports = stonesAndJewelry;
