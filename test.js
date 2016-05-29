"use strict";
var _1 = require('./');
var normalAdd = function (a, b) { return a + b; };
var curriedAdd = _1.default(function (a, b) { return a + b; });
var anotherCurriedAdd = _1.default(normalAdd); // Returns same as above
/*
 * Assume we need to create a function to increment a number while using add function
 * There are several ways of doing it, two of them are shown below.
 *
 * */
var normalIncrement = function (b) { return normalAdd(1, b); };
var curriedIncrement = curriedAdd(1);
/*
 * Suppose we need to find distance between two points in 3d space
 *
 * */
var normalDistance = function (x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(Math.pow(x1 - x2, 2)
        + Math.pow(y1 - y2, 2)
        + Math.pow(z1 - z2, 2));
};
var curriedDistance = _1.default(normalDistance);
var normalDistanceFromOrigin = function (x, y, z) { return normalDistance(0, 0, 0, x, y, z); };
var curriedDistanceFromOrigin = curriedDistance(0, 0, 0);
//# sourceMappingURL=test.js.map