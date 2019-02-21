const arrayUtils = require("./arrayUtils")
const stringUtils = require("./stringUtils")
const objUtils = require("./objUtils.js")


// Head Tests
try {
  // Should Pass
  const headOne = arrayUtils.head([2, 3, 4]);
  console.log('head passed successfully');
} catch (e) {
  console.error('head failed test case');
}

try {
  // Should Fail
  const headTwo = arrayUtils.head(1234);
  console.error('head did not error');
} catch (e) {
  console.log('head failed successfully');
}

// last Tests
try {
  // Should Pass
  const lastOne = arrayUtils.last([1, 2, 3]);
  console.log('last passed successfully');
} catch (e) {
  console.error('last failed test case');
}

try {
  // Should Fail
  const lastTwo = arrayUtils.last(1234);
  console.error('last did not error');
} catch (e) {
  console.log('last failed successfully');
}

// remove Tests
try {
  // Should Pass
  const removeOne = arrayUtils.remove([5, 6, 7], 1);
  console.log('remove passed successfully');
} catch (e) {
  console.error('remove failed test case');
}

try {
  // Should Fail
  const removeTwo = arrayUtils.remove(1234);
  console.error('remove did not error');
} catch (e) {
  console.log('remove failed successfully');
}

// range Tests
try {
  // Should Pass
  const rangeOne = arrayUtils.range(4, 'hi');
  console.log('range passed successfully');
} catch (e) {
  console.error('range failed test case');
}

try {
  // Should Fail
  const rangeTwo = arrayUtils.head('hi');
  console.error('range did not error');
} catch (e) {
  console.log('range failed successfully');
}

// coountElements Tests
try {
  // Should Pass
  const countElementsOne = arrayUtils.countElements([13, '13', 13, 'hello', true, true]);
  console.log('countElements passed successfully');
} catch (e) {
  console.error('countElements failed test case');
}

try {
  // Should Fail
  const countElementsTwo = arrayUtils.countElements([]);
  console.error('countElements did not error');
} catch (e) {
  console.log('countElements failed successfully');
}

// isEqual Tests
try {
  // Should Pass
  const isEqualOne = arrayUtils.isEqual([1, 2, 3], [1, 2, 3]);
  console.log('isEqual passed successfully');
} catch (e) {
  console.error('isEqual failed test case');
}

try {
  // Should Fail
  const isEqualTwo = arrayUtils.isEqual([],3);
  console.error('isEqual did not error');
} catch (e) {
  console.log('isEqual failed successfully');
}

// capitalize Tests
try {
  // Should Pass
  const capitalizeOne = stringUtils.capitalize('foobar');
  console.log('capitalize passed successfully');
} catch (e) {
  console.error('capitalize failed test case');
}

try {
  // Should Fail
  const capitalizeTwo = stringUtils.capitalize([]);
  console.error('capitalize did not error');
} catch (e) {
  console.log('capitalize failed successfully');
}

// repeat Tests
try {
  // Should Pass
  const repeatOne = stringUtils.repeat('abc', 3);
  console.log('repeat passed successfully');
} catch (e) {
  console.error('repeat failed test case');
}

try {
  // Should Fail
  const repeatTwo = stringUtils.repeat([]);
  console.error('repeat did not error');
} catch (e) {
  console.log('repeat failed successfully');
}

// countChars Tests
try {
  // Should Pass
  const countCharsOne = stringUtils.countChars('Hello, the pie is in the oven');
  console.log('countChars passed successfully');
} catch (e) {
  console.error('countChars failed test case');
}

try {
  // Should Fail
  const countCharsTwo = stringUtils.countChars(2);
  console.error('countChars did not error');
} catch (e) {
  console.log('countChars failed successfully');
}

// extend Tests
try {
  // Should Pass
  const first = { x: 2, y: 3};
  const second = { a: 70, x: 4, z: 5 };
  const third = { x: 0, y: 9, q: 10 };
  const extendOne = objUtils.extend(first, second, third);
  console.log('extend passed successfully');
} catch (e) {
  console.error('extend failed test case');
}

try {
  // Should Fail
  const extendTwo = objUtils.extend(2);
  console.error('extend did not error');
} catch (e) {
  console.log('extend failed successfully');
}

// smush Tests
try {
  // Should Pass
  const first = { x: 2, y: 3};
  const second = { a: 70, x: 4, z: 5 };
  const third = { x: 0, y: 9, q: 10 };
  const smushOne = objUtils.smush(first, second, third);
  console.log('smush passed successfully');
} catch (e) {
  console.error('smush failed test case');
}

try {
  // Should Fail
  const smushTwo = objUtils.smush(2);
  console.error('smush did not error');
} catch (e) {
  console.log('smush failed successfully');
}

// mapValues Tests
try {
  // Should Pass
  const mapValuesOne = objUtils.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1);
  console.log('mapValues passed successfully');
} catch (e) {
  console.error('mapValues failed test case');
}

try {
  // Should Fail
  const mapValuesTwo = objUtils.mapValues(2, n => n * 1);
  console.error('mapValues did not error');
} catch (e) {
  console.log('mapValues failed successfully');
}
