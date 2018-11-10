'use strict';

/**
 * Разворачивает объект
 * @param {Object} obj Многомерный массив
 * @returns {Object} Одномерный массив
 */
function plainObject(obj) {
    const result = {};
    let value;
    let newKey;

    (function worker(data, currentKey) {
        Object.keys(data).forEach(key => {
            value = data[key];
            newKey = [currentKey, key].filter(Boolean).join('.');

            if (typeof value === 'string') {
                result[newKey] = value;
            } else {
                worker(value, newKey);
            }
        });
    }(obj, ''));

    return result;
}

module.exports = plainObject;
