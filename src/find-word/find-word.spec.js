'use strict';

const {
    findLongestWord,
    findLongestWordLen,
    findShortWord,
    findShortWordLen
} = require('./find-word');

describe('findLongestWord', () => {
    it('для `Ready, steady, go!` должен вернуть `steady`', () => {
        expect(findLongestWord('Ready, steady, go!')).toEqual('steady');
        expect(findLongestWordLen('Ready, steady, go!')).toEqual('steady'.length);
    });

    it('для `Привет, Мир!` должен вернуть `Привет`', () => {
        expect(findLongestWord('Привет, Мир!')).toEqual('Привет');
        expect(findLongestWordLen('Привет, Мир!')).toEqual('Привет'.length);
    });
});

describe('findShortWord', () => {
    it('должен вернуть 3', () => {
        expect(findShortWord('bitcoin take over the world maybe who knows perhaps')).toBe('the');
        expect(findShortWordLen('bitcoin take over the world maybe who knows perhaps')).toBe(3);

        // eslint-disable-next-line
        expect(findShortWord('turns out random test cases are easier than writing out basic ones')).toBe('out');
        // eslint-disable-next-line
        expect(findShortWordLen('turns out random test cases are easier than writing out basic ones')).toBe(3);
    });
});
