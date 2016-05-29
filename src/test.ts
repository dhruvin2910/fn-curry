import curry from './'

const normalAdd = (a, b) => a + b

const curriedAdd = curry((a, b) => a + b)

const anotherCurriedAdd = curry(normalAdd) // Returns same as above

/*
 * Assume we need to create a function to increment a number while using add function
 * There are several ways of doing it, two of them are shown below.
 *
 * */

const normalIncrement = b => normalAdd(1, b)

const curriedIncrement = curriedAdd(1)

/*
 * Suppose we need to find distance between two points in 3d space
 *
 * */

const normalDistance = (x1, y1, z1, x2, y2, z2) =>
  Math.sqrt(
    Math.pow(x1 - x2, 2)
    + Math.pow(y1 - y2, 2)
    + Math.pow(z1 - z2, 2)
  )

const curriedDistance = curry(normalDistance)

const normalDistanceFromOrigin = (x, y, z) => normalDistance(0, 0, 0, x, y, z)

const curriedDistanceFromOrigin = curriedDistance(0, 0, 0)