const subtract = require("./subtract");

test("properly sutracts 2 values passed to it", () => {
  // test 1 confirms that subtract returns b - a when supplied proper inputs
  expect(subtract(3, 2)).toBe(1);
});
