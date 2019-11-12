/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Разбивает текст на слова
 * @param {String} text Текст
 * @returns {Array<String>} Слова
 */
const getWords = text => text
    .replace(/[^a-zA-Zа-яА-ЯёЁ]/g, ' ')
    .split(/\s+/)
    .sort((a, b) => a.length - b.length);

/**
 * Найдите самое короткое слово из данной строки.
 * @param {String} str Текст
 * @returns {String} Самое короткое слово
 */
const findShortWord = str => getWords(str).shift();

/**
 * Найдите длину самого короткого слова из данной строки.
 * @param {String} str Текст
 * @returns {Number} Самое короткое слово
 */
const findShortWordLen = str => findShortWord(str).length;

/**
 *  Найдите самое длинное слово из данной строки.
 * @param {String} str Текст
 * @returns {String} Длина
 */
const findLongestWord = str => getWords(str).pop();

/**
 * Найдите длину самого длинного слова из данной строки.
 * @param {String} str Текст
 * @returns {Number} Длина
 */
const findLongestWordLen = str => findLongestWord(str).length;


module.exports = {
    findShortWord,
    findShortWordLen,
    findLongestWord,
    findLongestWordLen
};
