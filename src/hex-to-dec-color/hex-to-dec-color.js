'use strict';

/**
 * Переводит цвет из формата HEX в DEC
 * @param {String} hexColor Цвет в формате HEX
 * @returns {Number} Цвет в формате DEC
 */
function hexToDec(hexColor) {
    const decColor = parseInt(hexColor.length === 2 ? hexColor : hexColor + hexColor, 16);

    if (isNaN(decColor) || decColor > 255) {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }

    return decColor;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function hexToDecColor(hexColor) {
    if (typeof hexColor !== 'string') {
        throw new TypeError('Цвет передан не строкой');
    }

    if (hexColor.length === 4 || hexColor.length === 7) {
        //
    } else {
        throw new RangeError('Значения цвета выходят за пределы допустимых');
    }

    const reg = /#([0-9A-z]{1,2})([0-9A-z]{1,2})([0-9A-z]{1,2})/gi;

    return hexColor.replace(reg, (color, r, g, b) =>
        `(${hexToDec(r)}, ${hexToDec(g)}, ${hexToDec(b)})`
    );
}

module.exports = hexToDecColor;
