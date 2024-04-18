/*
Problem Description
Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

Input format
There are 2 lines of input.

First line contains 1 integer N - Number of elements in the array.

Second line contains space separated N integers.

Output format
Print the smallest missing positive integer.

Sample Input 1
4

3 4 -1 1

Sample Output 1
2

Explanation 1
2 is the smallest positive integer which is missing as 1 is already present in the array. Note that 0 will not be considered as positive.

Constraints
N <= 200000

-2 ^ 31 <= Range of values <= 2 ^ 31 - 1

*/

function firstMissingPositive(n, arr) {
  // 1.create hasmap
  let hashset = new Set();

  // 2. enter positive numbers in hasmap
  for (let i = 0; i < n; i++) {
    hashset.add(arr[i]);
  }

  //3. run loop from 1 to n,
  for (let i = 1; i < n; i++) {
    //i. if hasmap doesnt have i, return i
    if (!hashset.has(i)) return i;
  }
  //4. else return n+1
  return n;
}

console.log(firstMissingPositive(5, [0, 1, 2, 3, 4]));
