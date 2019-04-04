'use strict';

/**
 * Находит n-ое число Фибоначчи
 * *NOTE:* Рекурсивный алгоритм
 * @param {Number} position Позиция в последовательности
 * @returns {Number} Число на позиции
 */
function fibonacciRecursive(position) {
    if (position < 2) {
        return position;
    }

    return fibonacciRecursive(position - 1) + fibonacciRecursive(position - 2);
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} position Позиция в последовательности
 * @returns {Number} Число на позиции
 */
function fibonacci(position) {
    if (position < 2) {
        return position;
    }

    let last = 0;
    let result = 1;

    for (let index = 2; index <= position; index++) {
        result += last;
        last = result - last;
    }

    return result;
}

module.exports = {
    fibonacci,
    fibonacciRecursive
};
