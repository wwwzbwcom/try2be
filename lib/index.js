"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.try2Obj = exports.try2Arr = exports.try2Ignore = void 0;
function try2Ignore(executeFunction) {
    try {
        return executeFunction();
    }
    catch (_a) { }
}
exports.try2Ignore = try2Ignore;
function try2Arr(executeFunction) {
    try {
        return [executeFunction(), undefined];
    }
    catch (err) {
        return [undefined, err];
    }
}
exports.try2Arr = try2Arr;
function try2Obj(executeFunction) {
    try {
        return { val: executeFunction(), err: undefined };
    }
    catch (err) {
        return { val: undefined, err };
    }
}
exports.try2Obj = try2Obj;
