'use strict';

const longestWord = require('./longest-word');

describe('longestWord', () => {
    it('для `Ready, steady, go!` должен вернуть `steady`', () => {
        expect(longestWord('Ready, steady, go!')).toEqual('steady');
    });

    it('для `Привет, Мир!` должен вернуть `Привет`', () => {
        expect(longestWord('Привет, Мир!')).toEqual('Привет');
    });
});
