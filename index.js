"use strict";
var curry = function (f) {
    return function () {
        if (arguments.length == f.length) {
            // If arguments passed is sufficient then return value = f(arguments)
            return (f.apply(null, arguments));
        }
        // Else return new partially applied function
        return curry(f.bind.apply(f, [null].concat(Array.prototype.slice.call(arguments, 0))));
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = curry;
//# sourceMappingURL=index.js.map