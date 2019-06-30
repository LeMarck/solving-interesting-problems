'use strict';

const messageFromBinaryCode = require('./message-from-binary-code');

describe('messageFromBinaryCode', () => {
    it('должен вернуть `Hello`', () => {
        expect(
            messageFromBinaryCode('010010000110010101101100011011000110111100100001')
        ).toEqual('Hello!');
    });
});
