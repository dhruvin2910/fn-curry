fn-memoizer
===========

A Utility for JS functions to [curry](https://en.wikipedia.org/wiki/Currying).

To be used to apply arguments partially. (see [partial-application](https://en.wikipedia.org/wiki/Partial_application))

How to use :
------------

- Front-end
  - `Use curry()`
- Back-end
  - `Import index.js`

Notes :
-------

1. Function passed as argument to `curry()` must have all arguments listed in parameters.
2. Do not manipulate **arguments**. `this` will be `null`.
3. Feel free to raise an issue.
4. To get a gist of how currying can make functions more useful `npm test`.