/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
  if (
    str
      .split("")
      .reduce((accumulator, currentValue) => currentValue + accumulator) === str
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = palindrome;
