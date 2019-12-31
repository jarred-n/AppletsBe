"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function getAllFieldNames(obj, option) {
    let keys = Reflect.ownKeys(obj);
    return prefixAndFilter(keys, option);
}
exports.getAllFieldNames = getAllFieldNames;
function prefixAndFilter(keys, option) {
    option &&
        option.prefix &&
        (keys = keys.filter(key => key.toString().startsWith(option.prefix)));
    option && option.filter && (keys = keys.filter(option.filter));
    return keys;
}

function getAllMethodNames(obj, option) {
    let methods = new Set();
    // tslint:disable-next-line:no-conditional-assignment
    while ((obj = Reflect.getPrototypeOf(obj))) {
        let keys = Reflect.ownKeys(obj);
        keys.forEach(k => methods.add(k));
    }
    let keys = Array.from(methods.values());
    return prefixAndFilter(keys, option);
}
exports.getAllMethodNames = getAllMethodNames;