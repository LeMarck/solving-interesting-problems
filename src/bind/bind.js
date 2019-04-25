'use strict';

/**
 * Реализация собственного bind
 * @param {Any} context Контекст
 * @param  {...Any} initArgs Начальные
 * @returns {Function} Новая функция
 */
// eslint-disable-next-line
Function.prototype.myBind = function myBind(context, ...initArgs) {
    const func = this;

    return (...args) => func.apply(context, initArgs.concat(args));
};
