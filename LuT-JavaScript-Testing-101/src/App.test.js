import {
  // add,
  total,
} from "./App";

// Create a mock function with jest to 'bypass' a functon we don't have access to
const add = jest.fn(() => 3);
// This test is an example of a 'Unit Test' as this function doesn't rely on anything else to properly execute
test("test add function", () => {
  // using mock function we can set the output to 3 to simulate a properly working external dependency for the purpose of integration testing
  expect(add(1, 2)).toBe(3);
  // toHaveBeenCalledTimes will return the number of times the specified function is called during testing
  expect(add).toHaveBeenCalledTimes(1);
  // toHaveBeenCalledWith will confirm the arguments that are being supplied to the specified function match the expectation. Useful when arguments are coming from multiple sources
  expect(add).toHaveBeenCalledWith(1, 2);
  // We can add additional assertions to ensure that code has repeatable functionality with various inputs like so:
  // expect(add(2, 3)).toBe(5);
});

// Note that this is an example of an 'Integration Test' as it relies on the "add" function to properly execute
test("test total function", () => {
  expect(total(5, 20)).toBe("$25");
});
