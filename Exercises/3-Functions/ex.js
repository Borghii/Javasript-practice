/**
 * Returns the smaller of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The minimum of the two numbers.
 */

const minNumber = (a, b) => {
  return a > b ? b : a;
};

console.log(minNumber(5, 6));

/**
 * Determines whether a number is even using recursion.
 * @param {number} n - A positive whole number.
 * @returns {boolean} True if the number is even, false otherwise.
 * @throws {Error} Throws an error if the input is not a positive whole number.
 */

const isEven = (n) => {
  if (n < 0) throw new Error("Input must be a positive whole number");
  if (n == 1) return false;
  if (n == 0) return true;
  return isEven(n - 2);
};

console.log(isEven(4));

/**
 * Counts the number of uppercase 'B' characters in a string.
 * @param {string} str - The string to search.
 * @returns {number} The count of uppercase 'B' characters in the string.
 */

const countCharacterB = (str) => {
  let count = 0;
  for (const element of str) {
    if (element === "B") count++;
  }
  return count;
};

console.log(countCharacterB("BaiBla"));

/**
 * Counts the occurrences of a specified character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to count.
 * @returns {number} The count of the specified character in the string.
 */

const occurrenceChar = (str, char) => {
  let count = 0;

  for (const element of str) {
    if (element === char) count++;
  }

  return count;
};

console.log(occurrenceChar("Olivia", "a"));
