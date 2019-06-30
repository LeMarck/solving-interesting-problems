'use strict';

/**
 * *SOURCE*: https://codesignal.com
 * Учитывая прямоугольную матрицу, содержащую только цифры,
 * вычислите количество различных квадратов 2 × 2 в ней.
 * @param {Array} matrix
 * @returns {Number}
 */
function differentSquares(matrix) {
    const result = new Set();

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length - 1; j++) {
            const newArr = [
                matrix[i][j], matrix[i][j + 1],
                matrix[i + 1][j],
                matrix[i + 1][j + 1]
            ].toString();

            result.add(newArr);
        }
    }

    return result.size;
}

module.exports = differentSquares;
