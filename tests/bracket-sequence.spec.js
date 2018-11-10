'use strict';

const { correctBracketSequence, generatingBracketSequences } = require('../src/bracket-sequence');

describe('bracketSequence', () => {
    it('должен вернуть `true`', () => {
        expect(correctBracketSequence('()()[]{}([{}])')).toBeTruthy();
        expect(correctBracketSequence('(a+b)*(c+(d-e/f))')).toBeTruthy();
    });

    it('должен вернуть `false`', () => {
        expect(correctBracketSequence('([{)]}')).toBeFalsy();
    });

    it('должен вернуть все правильные скобочные последовательности', () => {
        expect(generatingBracketSequences(2)).toEqual(['(())', '()()']);
        expect(generatingBracketSequences(3))
            .toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
    });
});
