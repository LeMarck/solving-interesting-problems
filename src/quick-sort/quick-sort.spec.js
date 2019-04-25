'use strict';

const quickSort = require('./quick-sort');

describe('quickSort', () => {
    it('должен вернуть оригинальный массив', () => {
        expect(quickSort([1, 3, 7, 11, 34], 0, 4)).toEqual([1, 3, 7, 11, 34]);
    });

    it('должен вернуть перевернутый массив', () => {
        const firstArr = [44, 32, 20, 7, 2];
        const secondArr = [2, 7, 20, 32, 44];

        expect(quickSort(firstArr, 0, 4)).toEqual(secondArr);
    });

    it('должен вернуть отсортированный массив', () => {
        const arr = [1, 2, 6, 8, 9, 4, 3, 7];

        expect(quickSort(arr, 0, 7)).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
    });
});
