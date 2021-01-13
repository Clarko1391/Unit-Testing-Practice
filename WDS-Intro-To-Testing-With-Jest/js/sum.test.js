const sum = require("./sum");

test("properly adds 2 numbers passed to it", () => {
  // test 1 confirms that sum always returns a + b when supplied with proper inputs
  expect(sum(1, 2)).toBe(3);
});
