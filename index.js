exports.curry = function (f, args) {
    args = args || [];
    if (args.length < f.length) {
        return function () {
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            return exports.curry(f, args);
        };
    }
    else {
        return f.apply(null, args);
    }
};
//# sourceMappingURL=index.js.map