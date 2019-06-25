'use strict';

const { isPalindrome, palindromeRearranging, buildPalindrome } = require('./palindrome');

describe('isPalindrome', () => {
    it('должен вернуть `true`', () => {
        expect(isPalindrome('шалаш')).toBeTruthy();
        expect(isPalindrome('А роза упала на лапу Азора')).toBeTruthy();
        expect(palindromeRearranging('папа')).toBeTruthy();
        expect(buildPalindrome('шалаш')).toEqual('шалаш');
        expect(buildPalindrome('шаб')).toEqual('шабаш');
    });

    it('должен вернуть `false`', () => {
        expect(isPalindrome('Томат')).toBeFalsy();
        expect(palindromeRearranging('Томат')).toBeFalsy();
    });
});
