'use strict';

const deleteDigit = require('./delete-digit');

describe('deleteDigit', () => {
    it('для `222219` должен вернуть `22229`', () => {
        expect(deleteDigit(222219)).toEqual(22229);
    });
});
