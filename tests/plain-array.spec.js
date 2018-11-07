'use strict';

const { plainArray, plainArrayRecursive } = require('../src/plain-array');

describe('plainArray', () => {
    const originalArray = [1, [2, [3, 4, [5], [6, [7]]]], [8]];
    const resultArray = [1, 2, 3, 4, 5, 6, 7, 8];

    it('должен вернуть развернутый массив', () => {
        expect(plainArray(originalArray)).toEqual(resultArray);
    });

    it('должен вернуть развернутый массив (рекурсивно)', () => {
        expect(plainArrayRecursive(originalArray)).toEqual(resultArray);
    });
});
