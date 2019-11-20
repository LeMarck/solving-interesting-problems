'use strict';

/**
 *
 * @param {Array<{ from: String, to: String }>} paths
 * @returns {Array<{ from: String, to: String }>}
 */
function getTravelPath(paths) {
    if (!paths.length) {
        return [];
    }

    const result = [];
    const alf = {};
    let start;

    paths.forEach(({ from, to }) => {
        start = start || from;

        alf[from] = alf[from] || {};
        alf[to] = alf[to] || {};

        alf[from].to = to;
        alf[to].from = from;
    });

    let startSearch = start;

    while (alf[startSearch].to) {
        result.push({ from: startSearch, to: alf[startSearch].to });

        startSearch = alf[startSearch].to;
    }

    while (alf[start].from) {
        result.unshift({ from: alf[start].from, to: start });

        start = alf[start].from;
    }

    return result;
}

module.exports = getTravelPath;
