'use strict';

const almostIncreasingSequence = require('./almost-increasing-sequence');

describe('almostIncreasingSequence', () => {
    it('для `[1, 2, 5, 3, 5]` должен вернуть `true`', () => {
        expect(almostIncreasingSequence([1, 2, 5, 3, 5])).toBeTruthy();
    });

    it('для `[1, 3, 2, 1]` и `[1, 2, 1, 2]` должен вернуть `false`', () => {
        expect(almostIncreasingSequence([1, 3, 2, 1])).toBeFalsy();
        expect(almostIncreasingSequence([1, 2, 1, 2])).toBeFalsy();
    });
});
