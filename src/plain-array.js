'use strict';

/**
 * Разворачивает многомерный массив в одномерный
 * *NOTE:* Рекурсивный алгоритм
 * @param {Array} arr Многомерный массив
 * @returns {Array} Одномерный массив
 */
function plainArrayRecursive(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? plainArray(item) : item);
    }, []);
}

/**
 * Разворачивает многомерный массив в одномерный
 * @param {Array} array Многомерный массив
 * @returns {Array} Одномерный массив
 */
function plainArray(array) {
    let arr = array.slice();
    let index = 0;

    while (index < arr.length) {
        while (Array.isArray(arr[index])) {
            arr = arr.slice(0, index).concat(arr[index], arr.slice(index + 1));
        }
        index++;
    }

    return arr;
}

module.exports = {
    plainArrayRecursive,
    plainArray
};
