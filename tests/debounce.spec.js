'use strict';

const debounce = require('../src/debounce');

describe('debounce', () => {
    const sleep = async timeout => new Promise(resolve => setTimeout(resolve, timeout));

    it('должен быть вызван через 20 мс после последнего вызова функции', async () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 20);

        for (let i = 0; i < 10; i++) {
            await sleep(i);
            debouncedFunc();
        }

        expect(func).toHaveBeenCalledTimes(0);

        await sleep(20);

        expect(func).toHaveBeenCalledTimes(1);
    });
});
