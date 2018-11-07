/* eslint curly: "off" */
'use strict';

/**
 * Разрешает путь до файла/директории
 * @param {Strung} path Исходный путь
 * @returns {String} Итоговый путь
 */
function pathResolve(path) {
    const pathChunks = path.split('/');
    const result = [];
    let chunk;

    for (let index = 0; index < pathChunks.length; index++) {
        chunk = pathChunks[index];
        if (chunk === '.' || chunk === '') continue;
        else if (chunk === '..') result.pop();
        else result.push(chunk);
    }

    return `/${result.join('/')}`;
}

module.exports = pathResolve;
