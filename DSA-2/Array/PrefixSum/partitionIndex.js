/*
Problem Description
Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

Return the index of the partitioning element. If no such element exists, return -1.

Input format
There are N+1 lines of input.

First line will contain a single integer N.

Second line will contain n space separated integer representing array elements.

Output format
Output the index of the partitioning element.

Constraints
2 <= N <= 10^6

1 <= Arr[i] <= 10^9

Sample Input 1
4

1 4 2 5

Sample Output 1
2

Explanation 1
Since 1 + 4 = 5 where 2 is such an element.
*/

function suffixSum(arr) {
  let n = arr.length;
  let suffix = [];
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      suffix[i] = arr[i];
    } else suffix[i] = suffix[i + 1] + arr[i];
  }
  return suffix;
}
function prefixSum(arr) {
  let n = arr.length;
  let prefix = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      prefix[i] = arr[i];
    } else prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
}
function equalPartition(arr) {
  let n = arr.length;
  let prefixSum1 = prefixSum(arr);
  let suffixSum1 = suffixSum(arr);
  for (let i = 0; i < n - 1; i++) {
    if (suffixSum1[i] === prefixSum1[i]) return i;
  }
  return -1;
}

let arr = [1, 4, 3, 6, 2, 1, 5];
console.log(equalPartition(arr));
