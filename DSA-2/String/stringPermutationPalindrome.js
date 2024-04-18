/*
Problem Description
Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

Input format
First line contains an integer representing the value of T, the number of test cases.

In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Constraints
1 <= T <= 10

1 <= length(S) <= 100000

Sample Input 1
3

nnaamm

hello

Aab

Sample Output 1
True

False

False

Explanation 1
nnaamm is a permutation of namman, which is a palindrome

hello is not a permutation of any palindrome

Aab is not a permutation of any palindrome

*/

function isPermutationPalidrome(s) {
  //1. declare hasmap
  let hashmap = new Map();
  //2. initialise hashmap with string char and freq
  for (let i = 0; i < s.length; i++) {
    hashmap.set(s[i], (hashmap.get(s[i]) || 0) + 1);
  }
  let oddCount = 0;
  //3. run loop over hashmap,
  hashmap.forEach((count) => {
    //i. if freq is odd, countOdd++
    if (count % 2 !== 0) oddCount++;
  });

  //4. if countOdd>1, return False
  if (oddCount > 1) return "False";
  //i. else return true
  else return "True";
}

let s = "naman";
console.log(isPermutationPalidrome(s));
