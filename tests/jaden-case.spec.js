'use strict';

const toJadenCase = require('../src/jaden-case');

describe('toJadenCase', () => {
    it('должен вернуть текст в котором все первые буквы в верхнем регистре', () => {
        const strOne = 'How Can Mirrors Be Real If Our Eyes Aren\'t Real';
        // eslint-disable-next-line
        const strTwo = 'I Should Just Stop Tweeting, The Human Conciousness Must Raise Before I Speak My Juvenile Philosophy.';

        expect(toJadenCase(strOne.toLowerCase()))
            .toEqual(strOne);
        expect(toJadenCase(strTwo.toLowerCase()))
            .toEqual(strTwo);
    });
});
