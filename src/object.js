'use strict';

/**
 * Возвращает значение объекта по заданному пути
 * @param {Object} obj Объект
 * @param {String} path Путь
 * @param {Any} def Значение по умолчанию
 * @returns {Any} Результат
 */
function get(obj, path, def) {
    const keys = path.split('.');
    let result = Object.assign({}, obj);

    for (let key of keys) {
        if (!result.hasOwnProperty(key)) {
            return def;
        }

        result = result[key];
    }

    return result;
}

/**
 * Устанавливает значение для поля объекта по заданному пути
 * @param {Object} obj Объект
 * @param {String} path Путь
 * @param {Any} value Значение
 */
function set(obj, path, value) {
    let data = obj;
    const keys = path.split('.');
    const lastKey = keys.pop();

    keys.forEach(key => {
        const item = data[key] || {};

        data[key] = Object.getPrototypeOf({}) === Object.getPrototypeOf(item) ? item : {};
        data = data[key];
    });

    data[lastKey] = value;
}


module.exports = {
    get,
    set
};
