'use strict';

/**
 * @param {Any} context
 * @param  {...Any} initArgs
 * @returns {Function}
 */
// eslint-disable-next-line
Function.prototype.myBind = function myBind(context, ...initArgs) {
    const func = this;

    return (...args) => func.apply(context, initArgs.concat(args));
};
