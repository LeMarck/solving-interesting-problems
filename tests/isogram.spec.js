'use strict';

const isIsogram = require('../src/isogram');

describe('isIsogram', () => {
    it('должен вернуть `true`', () => {
        expect(isIsogram('Dermatoglyphics')).toBeTruthy();
        expect(isIsogram('isogram')).toBeTruthy();
        expect(isIsogram('')).toBeTruthy();
    });

    it('должен вернуть `false`', () => {
        expect(isIsogram('aba')).toBeFalsy();
        expect(isIsogram('moOse')).toBeFalsy();
        expect(isIsogram('isIsogram')).toBeFalsy();
        expect(isIsogram('lcoutezmdjxaspiqbygSrwvknfh')).toBeFalsy();
    });
});
