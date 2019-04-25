'use strict';

const rle = require('./rle');

describe('RLE', () => {
    it('должен вернуть `ABCABCABC3DF`', () => {
        expect(rle('ABCABCABCDDDF'))
            .toEqual('ABCABCABC3DF');
    });

    it('должен вернуть `12W1B12W3B24W1B14W`', () => {
        expect(rle('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'))
            .toEqual('12WB12W3B24WB14W');
    });

    it('должен вернуть `TypeError`', () => {
        expect(() => rle()).toThrow(TypeError);
    });
});
