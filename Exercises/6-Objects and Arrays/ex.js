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

  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }

  for (start; start < end; start += step) {
    numbers.push(start);
  }
  return numbers;
};

console.log(range(1, 10, 2));

/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of the numbers in the array.
 */

/**
 * Reverses the elements of an array and returns a new array.
 * @param {any[]} array - The array to reverse.
 * @returns {any[]} A new array with the elements in reverse order.
 */

/**
 * Reverses the elements of an array in place, modifying the original array.
 * @param {any[]} array - The array to reverse in place.
 * @returns {void}
 */

/**
 * Converts an array into a nested list structure.
 * @param {any[]} array - The array to convert into a list.
 * @returns {Object} A nested list structure representing the array.
 */

/**
 * Converts a nested list structure into an array.
 * @param {Object} list - The nested list structure to convert.
 * @returns {any[]} An array representing the list.
 */

/**
 * Adds an element to the front of a list, creating a new list.
 * @param {any} element - The element to add to the front of the list.
 * @param {Object} list - The list to prepend the element to.
 * @returns {Object} A new list with the element added to the front.
 */

/**
 * Retrieves the element at the given position in a list.
 * @param {Object} list - The list to retrieve the element from.
 * @param {number} position - The position of the element to retrieve (0-based index).
 * @returns {any|undefined} The element at the given position, or undefined if not found.
 */

/**
 * Performs a deep comparison between two values to determine if they are equal.
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @returns {boolean} True if the values are deeply equal, false otherwise.
 */
