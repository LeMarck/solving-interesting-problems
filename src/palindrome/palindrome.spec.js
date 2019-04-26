'use strict';

const { isPalindrome, palindromeRearranging } = require('./palindrome');

describe('isPalindrome', () => {
    it('должен вернуть `true`', () => {
        expect(isPalindrome('шалаш')).toBeTruthy();
        expect(isPalindrome('А роза упала на лапу Азора')).toBeTruthy();
        expect(palindromeRearranging('Анна')).toBeTruthy();
        expect(palindromeRearranging('радар')).toBeTruthy();
    });

    it('должен вернуть `false`', () => {
        expect(isPalindrome('Томат')).toBeFalsy();
        expect(palindromeRearranging('Томат')).toBeFalsy();
    });
});
