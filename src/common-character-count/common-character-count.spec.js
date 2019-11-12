'use strict';

const commonCharacterCount = require('./common-character-count');

describe('commonCharacterCount', () => {
    it('для строк `aabcc` и `adcaa` должен вернуть `3`', () => {
        expect(commonCharacterCount('aabcc', 'adcaa')).toEqual(3);
    });

    it('для строк `a` и `b` должен вернуть `0`', () => {
        expect(commonCharacterCount('a', 'b')).toEqual(0);
    });
});
