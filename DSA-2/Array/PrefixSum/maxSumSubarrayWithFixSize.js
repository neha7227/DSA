/*
Problem Description
Given an array of integers and a number k, find the maximum sum of a subarray of size k.

Input format
First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

Second line of input contains N integers denoting the array elements.

Output format
Print the maximum sum of a subarray of size k.

Sample Input 1
4 2

100 200 300 400

Sample Output 1
700

Explanation
We get maximum sum by adding subarray {300,400}

of size 2.
*/

function maximumSubarraySumSizeK(N, A, K) {
  let windowSum = 0;
  //1st K elem windowSum
  for (let i = 0; i < K; i++) {
    windowSum += A[i];
  }
  let startIdx = 0;
  let currSum = windowSum;
  for (let endIdx = K; endIdx < N; i++) {
    currSum += A[endIdx] - A[startIdx];
    windowSum = Math.max(windowSum, currSum);
    startIdx++;
  }
  return windowSum;
}
