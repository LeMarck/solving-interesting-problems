'use strict';

const spiralNumbers = require('./spiral-numbers');

describe('spiralNumbers', () => {
    it('для `2` должен вернуть спиральную матрицу `2x2', () => {
        expect(spiralNumbers(2)).toEqual([[1, 2], [4, 3]]);
    });

    it('для `3` должен вернуть спиральную матрицу `3x3', () => {
        expect(spiralNumbers(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
    });
});
