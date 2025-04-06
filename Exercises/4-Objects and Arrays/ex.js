/**
 * Generates a range of numbers from start to end, inclusive.
 * Optionally, a step value can be provided to determine the increment or decrement.
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @param {number} [step=1] - The step value for the range (default is 1).
 * @returns {number[]} An array containing the range of numbers.
 */

const range = (start, end, step = 1) => {
  let numbers = [];
  const reverse = start > end;

  for (start; reverse ? start >= end : start <= end; start += step) {
    numbers.push(start);
  }

  return numbers;
};

//console.log(range(10, 4, -4));

/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of the numbers in the array.
 */

const sum = (numbers) => {
  return numbers.reduce((total, numb) => total + numb);
};

console.log(sum(range(1, 10)));

/**
 * Reverses the elements of an array and returns a new array.
 * @param {any[]} array - The array to reverse.
 * @returns {any[]} A new array with the elements in reverse order.
 */

const reverseArray = (array) => {
  let newArray = [];

  array.forEach((ele) => newArray.unshift(ele));

  return newArray;
};

console.log(reverseArray([1, 2, 3, 4]));

/**
 * Reverses the elements of an array in place, modifying the original array.
 * @param {any[]} array - The array to reverse in place.
 * @returns {void}
 */

const reverseArrayInPlace = (array) => {
  let l = 0;
  let r = array.length - 1;

  for (; l < r; l++, r--) {
    let temp = array[l];
    array[l] = array[r];
    array[r] = temp;
  }
};

let array = [1, 2, 3, 4];
console.log(array);
reverseArrayInPlace(array);
console.log(array);

/**
 * Converts an array into a nested list structure.
 * @param {any[]} array - The array to convert into a list.
 * @returns {Object} A nested list structure representing the array.
 */

/*
const arrayToList = (array) => {
  let list = {
    value: array[array.length - 1],
    rest: null,
  };

  for (let index = array.length - 2; index >= 0; index--) {

    let temp = {
      value: list.value,
      rest: list.rest,
    };

    list.value = array[index];
    list.rest = temp;
  }

  return list;
};*/

function arrayToList(array) {
  let list = null;

  // Start from the end of the array and build the list backwards
  for (let i = array.length - 1; i >= 0; i--) {
    let temp = {
      value: array[i],
      rest: list,
    };

    list = temp;
  }

  return list;
}

console.log(arrayToList([1, 2, 3]));

/**
 * Converts a nested list structure into an array.
 * @param {Object} list - The nested list structure to convert.
 * @returns {any[]} An array representing the list.
 */

const listToArray = (list) => {
  let array = [];

  do {
    array.push(list.value);
    list = list.rest;
  } while (list != null);

  return array;
};

console.log(
  listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })
);

/**
 * Adds an element to the front of a list, creating a new list.
 * @param {any} element - The element to add to the front of the list.
 * @param {Object} list - The list to prepend the element to.
 * @returns {Object} A new list with the element added to the front.
 */

const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  };
};

console.dir(
  prepend(10, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }),
  { depth: null }
);

/**
 * Retrieves the element at the given position in a list.
 * @param {Object} list - The list to retrieve the element from.
 * @param {number} position - The position of the element to retrieve (0-based index).
 * @returns {any|undefined} The element at the given position, or undefined if not found.
 */

const nth = (list, number) => {
  if (number == 0) return list.value;

  for (number; number > 0; number--) {
    list = list.rest;
  }

  return list.value == null ? undefined : list.value;
};

const nthRecursive = (list, number) => {
  if (number == 0) return list == null ? undefined : list.value;
  return nthRecursive(list.rest, number - 1);
};

console.log(
  nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2)
);

console.log(
  nthRecursive(
    { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } },
    3
  )
);

/**
 * Performs a deep comparison between two values to determine if they are equal.
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @returns {boolean} True if the values are deeply equal, false otherwise.
 */

function deepEqual(a, b) {
  // Check if values are identical (handles primitives and same object references)
  if (a === b) return true;

  // If either is null or not an object, they're not equal
  // (We need to check null explicitly since typeof null is 'object')
  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  // Get all properties from both objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If they have different number of properties, they're not equal
  if (keysA.length !== keysB.length) return false;

  // Check if every property in a exists in b and is deeply equal
  for (let key of keysA) {
    // Check if b has the property and if it's deeply equal to the one in a
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // If we got here, all properties are deeply equal
  return true;
}

// Simple values
console.log(deepEqual(1, 1)); // true
console.log(deepEqual(1, "1")); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual(null, undefined)); // false

// Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
let obj3 = { a: 1, b: 3 };
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

// Nested objects
let nested1 = { a: 1, b: { c: 2 } };
let nested2 = { a: 1, b: { c: 2 } };
let nested3 = { a: 1, b: { c: 3 } };
console.log(deepEqual(nested1, nested2)); // true
console.log(deepEqual(nested1, nested3)); // false
