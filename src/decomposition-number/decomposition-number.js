'use strict';

/**
 * Представить число в виде суммы
 * @param {Number} number Число
 * @returns {String} Сумма чисел
 */
function decompositionNumber(number) {
    if (number === 0) return '0'; // eslint-disable-line curly

    const [integer, fractional] = String(number).split('.');

    const integerArr = integer.split('')
        .map((num, index, arr) => num.padEnd(arr.length - index, '0'))
        .filter(Number);

    const fractionalArr = (fractional || '').split('')
        .map((num, index) => `${num}/${10 ** (index + 1)}`)
        .filter(str => Number(eval(str))); // eslint-disable-line no-eval

    return [...integerArr, ...fractionalArr].join(' + ');
}

module.exports = decompositionNumber;
