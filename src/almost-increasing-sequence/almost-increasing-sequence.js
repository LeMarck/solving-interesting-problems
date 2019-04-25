/* eslint max-depth: ["error", 3] curly: ["error", "multi-line"] */
'use strict';

/**
 * Given a sequence of integers as an array,
 * determine whether it is possible to obtain
 * a strictly increasing sequence by removing
 * no more than one element from the array.
 * *NOTE:* sequence a0, a1, ..., an is considered
 * to be a strictly increasing if a0 < a1 < ... < an.
 * Sequence containing only one element is also
 * considered to be strictly increasing.
 * @param {Array} sequence Массив чисел
 * @returns {Boolean}
 */
function almostIncreasingSequence(sequence) {
    let errorCounter = 0;

    for (let index = 0; index < sequence.length; index++) {
        if (sequence[index] <= sequence[index - 1]) {
            errorCounter += 1;

            if (
                sequence[index] <= sequence[index - 2] &&
                sequence[index + 1] <= sequence[index - 1]
            ) return false;
        }
    }

    return errorCounter < 2;
}

module.exports = almostIncreasingSequence;
