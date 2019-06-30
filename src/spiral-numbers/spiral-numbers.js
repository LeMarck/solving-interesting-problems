'use strict';

/**
 * Заполнить матрицу числами по спирали
 * @param {Number} n Размер матрицы
 * @returns {Array}
 */
function spiralNumbers(n) {
    const matrix = Array(n).fill()
        .map(() => Array(n).fill(0));
    let x = 0;
    let y = 0;
    let dir = 2;
    let size = n;
    let count = 0;

    for (let i = 0; i < n * n; i++) {
        matrix[y][x] = i + 1;

        if (++count === size) {
            dir = (dir + 1) % 4;
            size -= dir % 2;
            count = 0;
        }

        // eslint-disable-next-line
        if (dir % 2 === 0) x += dir > 1 ? 1 : -1;
        // eslint-disable-next-line
        else y += dir > 1 ? 1 : -1;
    }

    return matrix;
}

module.exports = spiralNumbers;
