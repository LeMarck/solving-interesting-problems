'use strict';

function throttle(func, delay, context) {
    let inThrottle = false;

    return (...args) => {
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;

            setTimeout(() => (inThrottle = false), delay);
        }
    };
}

module.exports = throttle;
