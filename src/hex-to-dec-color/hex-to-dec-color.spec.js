'use strict';

const hexToDecColor = require('./hex-to-dec-color');

describe('hexToDecColor', () => {
    it('должен вернуть RGB запись цвета', () => {
        expect(hexToDecColor('#ffffff')).toEqual('(255, 255, 255)');
        expect(hexToDecColor('#abc')).toEqual('(170, 187, 204)');
    });

    it('должен вернуть ошибку TypeError', () => {
        expect(() => hexToDecColor(122)).toThrow(TypeError);
        expect(() => hexToDecColor(null)).toThrow(TypeError);
        expect(() => hexToDecColor([])).toThrow(TypeError);
    });

    it('должен вернуть ошибку RangeError', () => {
        expect(() => hexToDecColor('#rgb')).toThrow(RangeError);
        expect(() => hexToDecColor('#1234')).toThrow(Error);
        expect(() => hexToDecColor('#1234567')).toThrow(Error);
    });
});
