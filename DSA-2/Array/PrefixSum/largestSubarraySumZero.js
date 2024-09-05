/*
Problem Description
Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

If there is no such sub-array print -1.

Input format
There are 2 lines of input.

First line contains an integer N.

Next line consists of N integers, the values of the array.

Output format
Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

Sample Input 1
6

2 3 1 -4 0 6

Sample Output 1
3 1 -4 0

Explanation
The largest subarray with sum zero is (3, 1, -4, 0)
*/

function largestSubarraySumZero(arr) {
  // 1. Define empty map (prefixSum->index)
  //2. variable sum = 0;
  //3. make entry in map sum(=0)->-1
  //4. variable maxLength = -1
  //5. iterate over arr 0 to n-1
  //i. update prefixSum sum= arr[i]
  //ii. if sum is present as key in map,
  //a. update maxLength = max(maxLength, (i-previousIndex))
  //b. start = previousIndex + 1
  //iii. else add entry in map sum->i
  //6. form subarray ans = []
  //i. if maxLength==-1, return [-1]
  //ii. else add entries into subarray starting from "start" to "start+maxLength" return ans;
  let n = arr.length;
  let maxLen = -1;
  let startIdx = 0;
  let sum = 0;
  let map = new Map();
  map.set(sum, -1); //The key reason for setting map.set(sum, -1) is to handle the case where a subarray that starts from the beginning of the array sums to zero. Without this initialization, the algorithm wouldn't correctly identify such subarrays.

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (map.has(sum)) {
      let prevIdx = map.get(sum);
      let currSize = i - prevIdx;
      if (currSize > maxLen) {
        maxLen = currSize;
        startIdx = prevIdx + 1;
      }
    } else map.set(sum, i);
  }
  let ans = [];
  if (maxLen == -1) return [-1];
  else {
    for (let i = startIdx; i < startIdx + maxLen; i++) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

// let arr = [2, 3, 1, -4, 0, 6];
let arr = [2, -2, 3, 1, -4, 0];
console.log(largestSubarraySumZero(arr));
