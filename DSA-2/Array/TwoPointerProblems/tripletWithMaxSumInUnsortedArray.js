/*
Problem Description
Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

Input format
There are 2t+1 lines of input

First line contains an integer t - No of test cases.

First line of each test case contains an integer n - No of elements in the array.

Second line of each test case contains N space separated integers - The array nums.

Output format
For each test case print the answer in a new line.

Sample Input 1
3

7

3 7 4 2 5 7 5

4

5 2 4 5

3

3 2 1

Sample Output 1
16

11

0

Explanation 1
In the first case valid triplets are: [3,4,5], [3,4,7], [4,5,7], [2,5,7]. Out of these [4,5,7] has the maximum sum, 16.

In the second case, it’s [2, 4, 5] with sum 11.

In the third case there are no valid triplets.

*/
function maxSumTriplet(nums) {
  let n = nums.length;
  let maxSum = 0;
  //   let leftMaxNum = 0;
  //   let rightMaxNum = 0;
  //1. loop over array with mid pointer mid=1 to n-2
  for (let mid = 0; mid < n - 1; mid++) {
    //i. loop over remaining left array left=0 to m-1
    leftMaxNum = 0;
    for (let left = 0; left < mid; left++) {
      //a. find largest number smaller than nums[mid]

      if (nums[left] < nums[mid]) {
        leftMaxNum = Math.max(leftMaxNum, nums[left]);
      }
    }
    //ii. loop over remaining right array right=m+1 to n-1
    let rightMaxNum = 0;
    for (let right = mid + 1; right < n; right++) {
      //a. find largest number greater than nums[mid]
      if (nums[right] > nums[mid]) {
        rightMaxNum = Math.max(rightMaxNum, nums[right]);
      }
    }
    //iii. find max of sum of nums[left]+nums[mid]+nums[right] if leftMaxNum!=0 & rightMaxNum!=0
    if (leftMaxNum && rightMaxNum) {
      maxSum = Math.max(maxSum, leftMaxNum + rightMaxNum + nums[mid]);
    }
  }
  return maxSum;
}

// let nums = [5, 2, 4, 5];
// let nums = [3, 7, 4, 2, 5, 7, 5];
let nums = [3, 2, 1];
console.log(maxSumTriplet(nums));
