'use strict';

const findShort = require('../src/find-short');

describe('findShort', () => {
    it('должен вернуть 3', () => {
        expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
        // eslint-disable-next-line
        expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3);
    });
});
