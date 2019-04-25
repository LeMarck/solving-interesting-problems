'use strict';

const { flatten, flattenRecursive } = require('./flatten');

describe('plainArray', () => {
    const originalArray = [1, [2, [3, 4, [5], [6, [7]]]], [8]];
    const resultArray = [1, 2, 3, 4, 5, 6, 7, 8];

    it('должен вернуть развернутый массив', () => {
        expect(flatten(originalArray)).toEqual(resultArray);
    });

    it('должен вернуть развернутый массив (рекурсивно)', () => {
        expect(flattenRecursive(originalArray)).toEqual(resultArray);
    });
});
