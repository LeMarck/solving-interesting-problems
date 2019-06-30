'use strict';

const differentSquares = require('./different-squares');

describe('differentSquares', () => {
    it('должен вернуть `6`', () => {
        expect(
            differentSquares([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])
        ).toEqual(6);
    });

    it('должен вернуть `1`', () => {
        expect(differentSquares([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toEqual(1);
    });

    it('должен вернуть `0`', () => {
        expect(differentSquares([[1, 2, 3]])).toEqual(0);
        expect(differentSquares([])).toEqual(0);
    });
});
