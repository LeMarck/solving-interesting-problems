'use strict';

const correctBracketSequence = require('../src/correct-bracket-sequence');

describe('correctBracketSequence', () => {
    it('должен вернуть `true`', () => {
        expect(correctBracketSequence('()()[]{}([{}])')).toBeTruthy();
        expect(correctBracketSequence('(a+b)*(c+(d-e/f))')).toBeTruthy();
    });

    it('должен вернуть `false`', () => {
        expect(correctBracketSequence('([{)]}')).toBeFalsy();
    });
});
