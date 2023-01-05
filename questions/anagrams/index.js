/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};

const cleanString = (str) => {
  return str.replaceAll(" ", "").toLowerCase().split("").sort().join("");
};

//sort on the array gives two anagrams the same string once its been sorted cat and act both equal act

module.exports = anagrams;
