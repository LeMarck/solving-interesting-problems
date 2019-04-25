'use strict';

const { get, set } = require('./object');

describe('object', () => {
    it('должен вернуть значение из по указанному пути', () => {
        expect(get({ a: 1 }, 'a')).toEqual(1);
        expect(get({ a: { b: 1 } }, 'a.b')).toEqual(1);
    });

    it('должен вернуть `undefined` или значение по умолчанию', () => {
        expect(get({ a: 1 }, 'a.b')).toBeUndefined();
        expect(get({ a: 1 }, 'a.b', 1)).toEqual(1);
    });

    it('должен вернуть объект с новым значение по указанному пути', () => {
        const obj = {};

        [
            { path: 'a', value: 1 },
            { path: 'a.b', value: 1 },
            { path: 'a.b.c.d', value: 1 }
        ].forEach(
            ({ path, value }) => {
                set(obj, path, value);
                expect(get(obj, path)).toEqual(1);
            }
        );
    });
});
