// Import the js file to test
import { checkForName } from "../js/nameChecker";

checkForName();
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Test: 'checkForName()'", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test('checkForName should be Defined', () => {
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(checkForName).toBeDefined();
  });

  test('Checking checkForName is a function', () => {
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(typeof checkForName).toBe("function");
  });

});
