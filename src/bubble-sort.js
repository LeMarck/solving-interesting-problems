/* eslint max-depth: ["error", 3] */
'use strict';

/**
 * Сортировка пузырьком
 * @param {Array} array Исходный массив
 * @param {Function} compareFunction Порядок asc/desc
 * @returns {Array} Упорядоченный массив
 */
function bubbleSort(array, compareFunction = (a, b) => a > b) {
    const arr = array.slice();

    for (let len = arr.length - 1; len !== 0; len--) {
        for (let index = 0; index < len; index++) {
            if (compareFunction(arr[index], arr[index + 1])) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;
