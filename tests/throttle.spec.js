'use strict';

const throttle = require('../src/throttle');

describe('throttle', () => {
    const sleep = async timeout => new Promise(resolve => setTimeout(resolve, timeout));

    it('должен быть вызван через 20 мс после последнего вызова функции', async () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 20);
        let callCount = 0;

        for (let i = 0; i < 10; i++) {
            await sleep(i);
            throttledFunc();
            if (i === 0 || i === 6 || i === 9) {
                expect(func).toHaveBeenCalledTimes(++callCount);
            }
        }
    });
});
