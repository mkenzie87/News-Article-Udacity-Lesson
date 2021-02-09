// Import the js file to test
import { validateURL } from "../js/checkURL";

validateURL();
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Test: 'validateURL()'", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test('validateURL should be Defined', () => {
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(validateURL).toBeDefined();
  });

  test('Checking validateURL is a function', () => {
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(typeof validateURL).toBe("function");
  });

});
