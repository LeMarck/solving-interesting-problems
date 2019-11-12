'use strict';

/**
 * *SOURCE*: https://contest.yandex.ru/contest/8458/problems/F/
 * Даны k отсортированных в порядке неубывания массивов неотрицательных целых чисел,
 * каждое из которых не превосходит 100. Требуется построить результат их слияния:
 * отсортированный в порядке неубывания массив, содержащий все элементы
 * исходных k массивов.
 *
 * Длина каждого массива не превосходит 10 ⋅ k.
 *
 * Постарайтесь, чтобы решение работало за время k⋅log(k)⋅n,
 * если считать, что входные массивы имеют длину n.
 * @param {Number} size Массив
 * @returns {Function}
 */
function mergeSortedLists(size) {
    let buffer = new Array(101).fill(0);

    function inputLine(line) {
        line.split(' ').reduce((_, ch) => buffer[Number(ch)]++);

        // eslint-disable-next-line
        if (--size) return inputLine;

        const result = [];

        buffer.forEach((item, index) => result.push(...new Array(item).fill(index)));

        return result.join(' ');
    }

    return inputLine;
}

module.exports = mergeSortedLists;
