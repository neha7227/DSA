/*Problem Description
Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.

Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

Input format
First line contains a single integer T denoting the number of test cases.

For each test case, an integer N will be given on one line and the next line will contain the N numbers of the array.

Output format
For each test case, print "Yes" if a subarray exists and "No" otherwise, on a single line.

Constraints
*/

function subarraySumZero(arr) {
  let n = arr.length;
  let sumSet = new Set();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum === 0 || sumSet.has(sum)) {
      return "Yes";
    }
    sumSet.add(sum);
  }
  return "No";
}

let arr = [4, 2, -2, 5];
console.log(subarraySumZero(arr));
