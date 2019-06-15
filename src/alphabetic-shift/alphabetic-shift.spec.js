'use strict';

const alphabeticShift = require('./alphabetic-shift');

describe('alphabeticShift', () => {
    it('для `crazy` должен вернуть `dsbaz`', () => {
        expect(alphabeticShift('crazy')).toEqual('dsbaz');
    });

    it('для `codesignal` должен вернуть `dpeftjhobm`', () => {
        expect(alphabeticShift('codesignal')).toEqual('dpeftjhobm');
    });
});
