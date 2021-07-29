const sum = require("../src/sum");

test("array of integers", () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
});
test("array of array of integers", () => {
  expect(
    sum([
      [1, 2, 3],
      [4, 5, 6],
      [21, 9, 0],
    ])
  ).toBe(51);
});
test("combination of array of integers and integers", () => {
  expect(sum([1, 2, 3, [5, 6, 7]])).toBe(24);
});
test("null array", () => {
  expect(sum([])).toBe(0);
});
test("combination of integers and nested array", () => {
  expect(sum([1, 2, [3, [4, 5, 6]]])).toBe(21);
});
test("complex nested array", () => {
  expect(sum([1, 2, 3, 4, [5, 6], [40, 3, 5, [56, [2, 4, [9, 8]]]], 99])).toBe(
    247
  );
});
