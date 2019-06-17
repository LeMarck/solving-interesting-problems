'use strict';

const stringsRearrangement = require('./strings-rearrangement');

describe('stringsRearrangement', () => {
    // eslint-disable-next-line max-len
    it('для `["ff", "gf", "af", "ar", "hf"]` и `["abc", "bef", "bcc", "bec", "bbc", "bdc"]` должен вернуть `true`', () => {
        expect(stringsRearrangement(['ff', 'gf', 'af', 'ar', 'hf'])).toBeTruthy();
        expect(stringsRearrangement(['abc', 'bef', 'bcc', 'bec', 'bbc', 'bdc'])).toBeTruthy();
    });

    // eslint-disable-next-line max-len
    it('для `["ab", "ad", "ef", "eg"]`, `["q", "q"]` и `["abc", "abx", "axx", "abc"]` должен вернуть `false`', () => {
        expect(stringsRearrangement(['ab', 'ad', 'ef', 'eg'])).toBeFalsy();
        expect(stringsRearrangement(['q', 'q'])).toBeFalsy();
        expect(stringsRearrangement(['abc', 'abx', 'axx', 'abc'])).toBeFalsy();
    });
});
