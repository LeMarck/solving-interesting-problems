/* eslint max-depth: ["error", 3] curly: ["error", "multi-line"] */
'use strict';

/**
 * Условие смежности
 * @param {String} first Первая строка
 * @param {String} second Вторая строка
 * @returns {Boolean}
 */
function checkAdjacency(first, second) {
    let counter = 0;

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) counter++;
    }

    return counter === 1;
}

/**
 * Создание матрицы смежности
 * @param {Array} array Массив строк одинаковой длинны
 * @returns {Map}
 */
function createAdjacencyMatrix(array) {
    let adjacencyMatrix = new Map();

    array.sort();

    for (let i = 0; i < array.length; i++) {
        adjacencyMatrix.set(i, []);
    }

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (checkAdjacency(array[i], array[j])) {
                adjacencyMatrix.get(i).push(j);
                adjacencyMatrix.get(j).push(i);
            }
        }
    }

    return adjacencyMatrix;
}

/**
 * Поиск Гамильтонового пути
 * @param {Map} adjacencyMatrix Матрица смежности
 * @param {Number} position Позиция поиска
 * @param {Number} depth Глубина
 * @param {Set} visited Посещённые вершины
 * @returns {Boolean}
 */
function searchPath(adjacencyMatrix, position, depth, visited) {
    if (depth === adjacencyMatrix.size) return true;

    let status = false;
    let items = adjacencyMatrix.get(position);

    visited.add(position);

    if (items.length === 0) return false;

    items.forEach(item => {
        if (!visited.has(item)) {
            if (searchPath(adjacencyMatrix, item, depth + 1, new Set(visited))) {
                status = true;
            }
        }
    });

    return status;
}

/**
 * *SOURCE*: https://codesignal.com
 * Given an array of equal-length strings, you'd like to know
 * if it's possible to rearrange the order of the elements
 * in such a way that each consecutive pair of strings differ
 * by exactly one character. Return true if it's possible,
 * and false if not.
 * *NOTE*: You're only rearranging the order of the strings,
 * not the order of the letters within the strings!
 * @param {Array} inputArray Массив строк одинаковой длинны
 * @returns {Boolean}
 */
function stringsRearrangement(inputArray) {
    let adjacencyMatrix = createAdjacencyMatrix(inputArray);

    for (let i = 0; i < inputArray.length; i++) {
        if (searchPath(adjacencyMatrix, i, 1, new Set())) return true;
    }

    return false;
}

module.exports = stringsRearrangement;
