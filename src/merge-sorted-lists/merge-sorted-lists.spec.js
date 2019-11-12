'use strict';

const mergeSortedLists = require('./merge-sorted-lists');

describe('mergeSortedLists', () => {
    it('должен вернуть `1 2 3 3 4 4 7 8 9 20 20 100`', () => {
        const arr = [
            '3 1 3 9',
            '5 2 4 8 20 100',
            '4 3 4 7 20'
        ];

        expect(arr.reduce((result, line) => result(line), mergeSortedLists(arr.length)))
            .toEqual('1 2 3 3 4 4 7 8 9 20 20 100');
    });

    it('должен вернуть `1 2 4 8 16 20 26 42 58 61 64 65 69 84 86 88 96 96`', () => {
        const arr = [
            '6 2 26 64 88 96 96',
            '4 8 20 65 86',
            '7 1 4 16 42 58 61 69',
            '1 84'
        ];

        expect(arr.reduce((result, line) => result(line), mergeSortedLists(arr.length)))
            .toEqual('1 2 4 8 16 20 26 42 58 61 64 65 69 84 86 88 96 96');
    });
});
