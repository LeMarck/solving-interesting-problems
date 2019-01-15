'use strict';

const throttle = require('../src/throttle');

describe('throttle', () => {
    const sleep = async timeout => new Promise(resolve => setTimeout(resolve, timeout));

    it('должен быть вызван через 20 мс после последнего вызова функции', async () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 20);

        throttledFunc();
        expect(func).toBeCalled();
        expect(func).toHaveBeenCalledTimes(1);

        throttledFunc();
        expect(func).toHaveBeenCalledTimes(1);

        await sleep(20);
        expect(func).toHaveBeenCalledTimes(2);

        await sleep(20);
        expect(func).toHaveBeenCalledTimes(2);
    });
});
