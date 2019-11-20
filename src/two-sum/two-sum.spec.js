'use strict';

const { twoSum } = require('./two-sum');

describe('twoSum', () => {
    it('должен вернуть `[0, 1]`', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('должен вернуть ошибку Error', () => {
        expect(() => twoSum([2, 7, 11, 15], 5)).toThrow(Error);
        expect(() => twoSum([2, 7, 11, 15], 5))
            .toThrowError('No two sum solution');
    });
});
