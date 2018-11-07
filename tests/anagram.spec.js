'use strict';

const isAnagram = require('../src/anagram');

describe('isAnagram', () => {
    it('должен вернуть `true`', () => {
        expect(isAnagram('лепесток', 'телескоп')).toBeTruthy();
    });

    it('должен вернуть `false`', () => {
        expect(isAnagram('лепестки', 'телескоп')).toBeFalsy();
        expect(isAnagram('лист', 'телескоп')).toBeFalsy();
    });
});
