'use strict';

/**
 * Декоратор позволяет превратить несколько вызовов
 * функции в течение определенного времени в один вызов,
 * причем задержка начинает заново отсчитываться с каждой
 * новой попыткой вызова
 * @param {Function} func Исходная функция
 * @param {Number} timeout Время задержки
 * @param {*} context Контекст вызова функции
 * @returns {Function} Новая функция
 */
function debounce(func, timeout, context) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout((ctx, argsArray) => {
            func.apply(ctx, argsArray);
        }, timeout, context || null, args);
    };
}

module.exports = debounce;
