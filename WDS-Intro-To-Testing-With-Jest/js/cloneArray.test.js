const cloneArray = require("./cloneArray");

test("properly clones array passed as argument to a new memory location", () => {
  const array = [1, 2, 3];
  // test 1 confirms that the values are identical in both the original array and the cloned array
  expect(cloneArray(array)).toEqual(array);
  // test 2 confirms that the original array and the cloned array are in different memory addresses
  expect(cloneArray(array)).not.toBe(array);
});
