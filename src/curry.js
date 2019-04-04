'use strict';

/**
 * Декоратор каррирование для функции с заданной арностью
 * @param {Function} func Функция
 * @param {Number} arity Арность
 * @returns {Function} Новая функция
 */
function curryN(func, arity) {
    return function curried(funcArg, ...funcArgs) {
        const args = [funcArg].concat(funcArgs);

        if (args.length >= arity) {
            // eslint-disable-next-line
            return func.apply(this, args);
        }

        return (newArg, ...newArgs) => {
            // eslint-disable-next-line
            return curried.apply(this, args.concat([newArg], newArgs));
        };
    };
}

/**
 * Декоратор каррирование для функции
 * @param {Function} func Функция
 * @returns {Function} Новая функция
 */
function curry(func) {
    return curryN(func, func.length,);
}

module.exports = {
    curryN,
    curry
};
