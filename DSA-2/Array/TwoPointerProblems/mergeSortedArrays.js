/*
Problem Description
Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

Input format
A single Integer M, that contains the number of elements in the first array.

A single Integer N, that contains the number of elements in the second array.

Next Line contains M space Integers of the array nums1.

Next Line contains N space Integers of the array nums2.

Output format
Print the array after merging.

Sample Input 1
3

3

1 2 3

2 5 6

Sample Output 1
1 2 2 3 5 6

Explanation 1
The sorted array is returned after merging.

*/

function mergeSortedArray(m, nums1, n, nums2) {
  let p1 = 0,
    p2 = 0,
    result = [];
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      result.push(nums1[p1++]);
      //   p1++;
    } else {
      result.push(nums2[p2++]);
      //   p2++;
    }
  }
  while (p1 < m) {
    result.push(nums1[p1++]);
  }
  while (p2 < n) {
    result.push(nums2[p2++]);
  }
  return result;
}

let m = 4,
  nums1 = [1, 2, 3, 4],
  n = 3,
  nums2 = [2, 5, 6];
console.log(mergeSortedArray(m, nums1, n, nums2));
