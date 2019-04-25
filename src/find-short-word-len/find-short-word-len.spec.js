'use strict';

const findShortWordLen = require('./find-short-word-len');

describe('findShortWordLen', () => {
    it('должен вернуть 3', () => {
        expect(findShortWordLen('bitcoin take over the world maybe who knows perhaps')).toBe(3);
        // eslint-disable-next-line
        expect(findShortWordLen('turns out random test cases are easier than writing out basic ones')).toBe(3);
    });
});
