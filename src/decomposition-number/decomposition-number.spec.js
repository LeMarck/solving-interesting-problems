'use strict';

const decompositionNumber = require('./decomposition-number');

describe('decompositionNumber', () => {
    it('для числа `0` должен вернуть `0`', () => {
        expect(decompositionNumber(0)).toEqual('0');
    });

    it('для числа `4` должен вернуть `4`', () => {
        expect(decompositionNumber(4)).toEqual('4');
    });

    it('для числа `70304` должен вернуть `70000 + 300 + 4`', () => {
        expect(decompositionNumber(70304)).toEqual('70000 + 300 + 4');
    });

    it('для числа `1.25` должен вернуть `1 + 2/10 + 5/100`', () => {
        expect(decompositionNumber(1.25)).toEqual('1 + 2/10 + 5/100');
    });

    it('для числа `0.205` должен вернуть `2/10 + 5/1000`', () => {
        expect(decompositionNumber(0.205)).toEqual('2/10 + 5/1000');
    });
});
