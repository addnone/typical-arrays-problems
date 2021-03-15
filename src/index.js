
exports.min = function min (array) {

  if (Array.isArray(arguments[0])) {
    if (array.length >= 1) {
      result = array.reduce((acc, val) => {return val < acc ? val : acc}, array[0]);
      return result
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (Array.isArray(arguments[0])) {
    if (array.length >= 1) {
      result = array.reduce((acc, val) => { return val > acc ? val : acc}, array[0]);
      return result
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(arguments[0])) {
    if (array.length >= 1) {
      let length = array.length
      result = array.reduce((acc, val) => { return acc+val}, 0);
      return result/length
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
