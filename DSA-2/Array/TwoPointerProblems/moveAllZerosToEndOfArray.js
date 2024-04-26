/*
Problem Description
Given an array A, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input format
First line will contain a single integer N representing the size of array

Next line will contain N space separated integers representing the array A.

Output format
First line should contain N space separated integers.

Sample Input 1
2

0 1

Sample Output 1
1 0

Constraints:
1<=N<=200000

0<=A[i]<=100000



*/
function moveZeroes(nums) {
  // 1. define two pointers, nonZero(nz)= zero(z)=0-th index
  let nz = 0,
    z = 0;
  let n = nums.length;
  //2. run loop while(nonZero<n)
  while (nz < n) {
    // i. if(nums(nonZero!=0))
    if (nums[nz] !== 0) {
      //a. swap nonZero and zero index elements
      [nums[z], nums[nz]] = [nums[nz], nums[z]];
      //b. zero++
      z++;
      //c. nonZero++
      nz++;
    }
    //ii. else
    else nz++;
    //a. nonZero++
    // nz++;
  }
  return nums;
}

let nums = [1, 2, 0, 3, 0, 4];
console.log(moveZeroes(nums));
