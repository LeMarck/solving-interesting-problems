'use strict';

const bind = require('../src/bind');

describe('bind', () => {
    it('должен вызвать функцию в контексте другого объекта', () => {
        const alice = { name: 'Alice' };
        const bob = {
            name: 'Bob',
            getName: function () {
                return this.name;
            }
        };

        expect(bind(bob.getName, alice)()).toEqual('Alice');
    });

    it('должен вызвать функцию со значениями по умолчанию', () => {
        const sum = (a, b, c) => a + b + c;

        expect(bind(sum, null, 1, 2)(3)).toEqual(6);
    });
});
