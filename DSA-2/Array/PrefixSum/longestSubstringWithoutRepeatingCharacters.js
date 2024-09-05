/*

Problem Description
Given a string, find the length of the longest substring which has no repeating characters.

Input format
Input is a string.

Output format
Output is an integer representing the longest substring with no repeating characters.

Sample Input 1
aabcccbcb

Sample Output 1
3

Explanation 1
"abc" is the longest substring with no repeating characters.

Sample Input 2
cdddddd

Sample Output 2
2

Explanation 2
"cd" is the longest substring with no repeating characters.

*/

function longestSubstringWithoutRepeatingCharacter(s) {
  let seenChar = new Set();
  let left = 0,
    right = 0,
    maxLen = 0;
  while (right < s.length) {
    let currChar = s[right];
    while (seenChar.has(currChar)) {
      seenChar.delete(s[left]);
      left++;
    }
    seenChar.add(currChar);
    maxLen = Math.max(maxLen, right - left + 1);

    right++;
  }
  return maxLen;
}

// let s = "aabcccbcb";
let s = "cdddddd";
console.log(longestSubstringWithoutRepeatingCharacter(s));
