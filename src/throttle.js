'use strict';

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
