'use strict';

const bubbleSort = require('../src/bubble-sort');

describe('bubbleSort', () => {
    const asc = (a, b) => a > b;
    const desc = (a, b) => a < b;

    it('должен вернуть оригинальный массив', () => {
        expect(bubbleSort([1, 3, 7, 11, 34])).toEqual([1, 3, 7, 11, 34]);
    });

    it('должен вернуть перевернутый массив', () => {
        const firstArr = [2, 7, 20, 32, 44];
        const secondArr = [44, 32, 20, 7, 2];

        expect(bubbleSort(secondArr, asc)).toEqual(firstArr);
        expect(bubbleSort(firstArr, desc)).toEqual(secondArr);
    });

    it('должен вернуть отсортированный массив', () => {
        const arr = [1, 2, 6, 8, 9, 4, 3, 7];

        expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
        expect(bubbleSort(arr, desc)).toEqual([9, 8, 7, 6, 4, 3, 2, 1]);
    });
});
