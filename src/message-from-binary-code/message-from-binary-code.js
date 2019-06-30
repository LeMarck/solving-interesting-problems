'use strict';

/**
 * *SOURCE*: https://codesignal.com
 * Вы принимаете участие в Escape Room challenge,
 * разработанной специально для программистов.
 * В ваших попытках найти ключ, вы нашли двоичный код,
 * написанный на стене за вазой, и поняли,
 * что это должно быть зашифрованное сообщение.
 * После некоторого размышления, ваша первая догадка
 * заключается в том, что каждые последовательные 8 бит кода
 * означают символ с соответствующим расширенным кодом ASCII.
 *
 * Если ваша догадка верна, расшифруйте сообщение.
 * @param {String} code
 * @returns {String}
 */
function messageFromBinaryCode(code) {
    return code.replace(/(\d{8})/g, byte => String.fromCharCode(parseInt(byte, 2)));
}

module.exports = messageFromBinaryCode;
