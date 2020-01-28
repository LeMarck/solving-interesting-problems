'use strict';

/**
 * Разворачивает многомерный массив в одномерный
 * *NOTE:* Рекурсивный алгоритм
 * @param {Array} arr Многомерный массив
 * @returns {Array} Одномерный массив
 */
function flattenRecursive(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flattenRecursive(item) : item);
    }, []);
}

/**
 * Разворачивает многомерный массив в одномерный
 * @param {Array} array Многомерный массив
 * @returns {Array} Одномерный массив
 */
function flatten(array) {
    let stack = [...array];
    const result = [];

    while (stack.length) {
        const next = stack.pop();

        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse();
}

module.exports = {
    flattenRecursive,
    flatten
};
