'use strict';

/**
 * Given an array of integers, return indices of the two
 * numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 * @param {Number[]} nums
 * @param {Number} target
 * @returns {Number[]}
 */
function twoSum(nums, target) {
    const buffer = {};

    for (let index = 0, len = nums.length; index < len; index++) {
        const offset = target - nums[index];

        if (buffer.hasOwnProperty(offset)) {
            return [buffer[offset], index];
        }

        buffer[nums[index]] = index;
    }

    throw new Error('No two sum solution');
}

exports.twoSum = twoSum;
