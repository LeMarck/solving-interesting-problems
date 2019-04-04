'use strict';

/**
 * Декоратор позволяет «затормозить» функцию,
 * функция будет выполняться не чаще одного
 * раза в указанный период, даже если она
 * будет вызвана много раз в течение этого
 * периода
 * @param {Function} func Исходная функция
 * @param {Number} wait Время задержки
 * @param {*} context Контекст вызова функции
 * @returns {Function} Новая функция
 */
function throttle(func, wait, context) {
    let isThrottling = false;
    let lastArgs = null;
    let result;

    const wrapper = (...args) => {
        if (isThrottling) {
            lastArgs = args;

            return result;
        }

        result = func.apply(context, args);
        isThrottling = true;

        setTimeout(() => {
            isThrottling = false;

            if (lastArgs) {
                wrapper.apply(context, lastArgs);
                lastArgs = null;
            }
        }, wait);

        return result;
    };

    return wrapper;
}

module.exports = throttle;
