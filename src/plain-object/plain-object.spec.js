'use strict';

const plainObject = require('./plain-object');

describe('plainObject', () => {
    const data = {
        a: '1',
        b: {
            c: '2',
            d: {
                e: '3',
                '': '4'
            }
        }
    };

    const result = {
        a: '1',
        'b.c': '2',
        'b.d': '4',
        'b.d.e': '3'
    };

    it('должен вернуть развернутый объект', () => {
        expect(plainObject(data)).toEqual(result);
    });
});
