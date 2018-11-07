'use strict';

function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(arr, left, right) {
    var index;

    index = partition(arr, left, right);

    if (left < index - 1) {
        quickSort(arr, left, index - 1);
    }

    if (index < right) {
        quickSort(arr, index, right);
    }

    return arr;
}

module.exports = quickSort;
