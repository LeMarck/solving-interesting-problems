'use strict';

const digitsProduct = require('./digits-product');

describe('digitsProduct', () => {
    it('для `0` должен вернуть `10`', () => {
        expect(digitsProduct(0)).toEqual(10);
    });

    it('для `1` должен вернуть `1`', () => {
        expect(digitsProduct(1)).toEqual(1);
    });

    it('для `12` должен вернуть `26`', () => {
        expect(digitsProduct(12)).toEqual(26);
    });

    it('для `19` должен вернуть `-1`', () => {
        expect(digitsProduct(19)).toEqual(-1);
    });
});
