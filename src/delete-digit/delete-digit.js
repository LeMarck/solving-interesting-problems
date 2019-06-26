'use strict';

/**
 * *SOURCE*: https://codesignal.com
 * Учитывая некоторое целое число, найдите максимальное число,
 * которое вы можете получить, удалив ровно одну цифру данного числа.
 * @param {Number} num Целое число
 * @returns {Number}
 */
function deleteDigit(num) {
    const str = String(num).split('');

    return Math.max(
        ...str.map((_, i) =>
            Number(str.filter((__, j) => i !== j).join('')))
    );
}

module.exports = deleteDigit;
