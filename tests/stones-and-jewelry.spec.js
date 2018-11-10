'use strict';

const stonesAndJewelry = require('../src/stones-and-jewelry');

describe('stonesAndJewelry', () => {
    it('должен вернуть `4`', () => {
        expect(stonesAndJewelry('aaabbccd', 'ad')).toEqual(4);
    });

    it('должен вернуть `0`', () => {
        expect(stonesAndJewelry('', 'ad')).toEqual(0);
        expect(stonesAndJewelry('abc', '')).toEqual(0);
    });
});
