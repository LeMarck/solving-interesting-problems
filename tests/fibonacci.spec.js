'use strict';

const { fibonacci, fibonacciRecursive } = require('../src/fibonacci');

describe('fibonacci', () => {
    it('должен вернуть число на позиции n в последовательности чисел Фибоначчи', () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(10)).toEqual(55);
    });

    // eslint-disable-next-line
    it('должен вернуть число на позиции n в последовательности чисел Фибоначчи (рекурсивно)', () => {
        expect(fibonacciRecursive(0)).toEqual(0);
        expect(fibonacciRecursive(2)).toEqual(1);
        expect(fibonacciRecursive(10)).toEqual(55);
    });
});
