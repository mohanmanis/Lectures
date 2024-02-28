/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  // Initialize an empty string to hold the encoded string.
  let encodedString = '';

  for (let s of strs) {
    // Append the length, the delimiter, and the string itself.
    encodedString += s.length + '/:' + s;
  }
  console.log(encodedString);
  return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  // Initialize a list to hold the decoded strings.
  let decodedStrings = [];
  let i = 0;
  while (i < s.length) {
    // Find the delimiter.
    let delim = s.indexOf("/:", i);

    // Get the length, which is before the delimiter.
    let length = parseInt(s.substring(i, delim));

    // Get the string, which is of 'length' length after the delimiter.
    let str = s.substring(delim + 2, delim + 2 + length);

    // Add the string to the list.
    decodedStrings.push(str);

    // Move the index to the start of the next length.
    i = delim + 2 + length;
  }
  return decodedStrings;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
