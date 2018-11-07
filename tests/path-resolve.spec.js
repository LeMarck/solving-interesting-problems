'use strict';

const pathResolve = require('../src/path-resolve');

describe('pathResolve', () => {
    it('должен вернуть корень', () => {
        expect(pathResolve('/123/456/.////////567/../../..'))
            .toEqual('/');
    });

    it('должен вернуть папку `123` в корне', () => {
        expect(pathResolve('/123/456/./567/../..'))
            .toEqual('/123');
    });
});
