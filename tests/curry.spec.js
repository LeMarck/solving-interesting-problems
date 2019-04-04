'use strict';

const { curry, curryN } = require('../src/curry');

describe('curry', () => {
    it('должен вернуть сумму чисел', () => {
        const _sum = (a, b, c, d) => a + b + c + d;

        expect(curry(_sum)(1)(2)(3)(4)).toEqual(10);
        expect(curryN(_sum, 4)(1)(2)(3)(4)).toEqual(10);
        expect(curryN(_sum, 5)(1)(2)(3)(4)()).toEqual(10);
    });

    it('должен корректно обработать undefined', () => {
        const _sum = (a, b, c, d) => a + (b || 0) + (c || 0) + d;

        expect(curry(_sum)(1)()()(4)).toEqual(5);
        expect(curryN(_sum, 4)(1)(null)(3)(4)).toEqual(8);
        expect(curryN(_sum, 5)(1)()()(4)()).toEqual(5);
    });
});
