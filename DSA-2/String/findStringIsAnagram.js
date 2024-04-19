/*

Problem Description
Given two strings s and t, write a function to determine if t is an anagram of s.

Note: You may assume the string contains only lowercase alphabets.

Note:-
There's a test case where both the strings are empty but the js compiler is treating one as empty and other as undefined. So, update the readline function accordingly.

Input format
You will be given two strings in two separate lines.

Output format
Print "true" if both the strings are anagram otherwise “false”.

Constraints
Length of string <= 100000

Sample Input 1
anagram

nagaram

Sample Output 1
true

Sample Input 2
rat

car

Sample Output 2
false

*/

function validAnagram(s, t) {
  if (s.length !== t.length) return "False";

  /*
  //Approach 1 -  TC :O(NlogN)
  s = s.split("").sort().join(""); // TC: O(n)+O(nlogn)(sorting)+O(n) ~ O(NlogN)
  t = t.split("").sort().join("");
  if (s === t) return "True";
  else return "False";
  */

  // Approach 2 - counting characters in s and comparing with T

  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }
  //console.log(charCount, "charCount");

  for (let i = 0; i < t.length; i++) {
    if (!charCount[t[i]]) return "False";
    else charCount[t[i]]--;
  }

  for (let count of Object.values(charCount)) {
    // console.log(count, "count");
    if (count !== 0) return "False";
    else return "True";
  }
}

let s = "anagram1";
let t = "gramana2";
console.log(validAnagram(s, t));
