function sum(array) {
  let sums = 0;
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        sums = sums + sum(array[i]);
      } else {
        sums = sums + array[i];
      }
    }
  }
  return sums;
}

module.exports = sum;
