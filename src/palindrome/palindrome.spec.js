'use strict';

const { isPalindrome, canCreatePalindrome } = require('./palindrome');

describe('isPalindrome', () => {
    it('должен вернуть `true`', () => {
        expect(isPalindrome('шалаш')).toBeTruthy();
        expect(isPalindrome('А роза упала на лапу Азора')).toBeTruthy();
        expect(canCreatePalindrome('Анна')).toBeTruthy();
        expect(canCreatePalindrome('радар')).toBeTruthy();
    });

    it('должен вернуть `false`', () => {
        expect(isPalindrome('Томат')).toBeFalsy();
        expect(canCreatePalindrome('Томат')).toBeFalsy();
    });
});
