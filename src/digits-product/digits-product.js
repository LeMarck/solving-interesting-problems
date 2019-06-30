'use strict';

/**
 * При заданном целочисленном произведении найдите
 * наименьшее положительное (т. е. больше `0`) целое число,
 * произведение цифр которого равно произведению.
 * Если такое целое число отсутствует,
 * вместо него возвращается `-1`
 * @param {Number} product
 * @returns {Number}
 */
function digitsProduct(product) {
    // eslint-disable-next-line
    if (product === 0) return 10;
    // eslint-disable-next-line
    if (product === 1) return 1;

    let divisor = 10;
    let power = 1;
    let result = 0;

    while (product > 1) {
        // eslint-disable-next-line
        if (--divisor === 1) return -1;

        while (product % divisor === 0) {
            product /= divisor;
            result += divisor * power;
            power *= 10;
        }
    }

    return result;
}

module.exports = digitsProduct;
