const curry = (f):any => {
  return function () {
    if (arguments.length == f.length) {
      // If arguments passed is sufficient then return value = f(arguments)
      return (f.apply(null, arguments))
    }
    // Else return new partially applied function
    return curry(f.bind(null, ...Array.prototype.slice.call(arguments, 0)))
  }
}
// Export curry
export default curry