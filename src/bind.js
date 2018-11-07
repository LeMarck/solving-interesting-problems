'use strict';

/**
 * @param {Function} func
 * @param {Any} context
 * @param  {...Any} defaultArgs
 * @returns {Function}
 */
function bind(func, context, ...defaultArgs) {
    return (...args) => func.apply(context, defaultArgs.concat(args));
}

module.exports = bind;
