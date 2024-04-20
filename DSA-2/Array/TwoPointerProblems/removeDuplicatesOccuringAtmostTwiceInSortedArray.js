/*
Problem Description
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input format
There are two lines of input.

First line contains an integer n - Number of elements.

Second line contains n space separated integers - The array nums.

Output format
Print the new length in the first line.

In the second line print the nums array upto the new length.

Sample Input 1
7

2 2 2 3 4 4 9

Sample Output 1
6

2 2 3 4 4 9

Explanation 1
Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].

Constraints
1 <= n <= 10^5

0 <= nums[i] <= 10^6

*/
function removeDuplicatesFromSortedArrayII(nums) {
  let n = nums.length;
  //1. set val=0, j=0, count=0
  let val = 0,
    j = 0,
    count = 0;

  //2. run for loop from i=0 -> n-1
  for (let i = 0; i < n; ) {
    //i. set val as array's value at i-th index;
    val = nums[i];
    //ii.set count=0;
    count = 0;

    //iii. run while loop till i-th index value is same as val(to count occurences)
    while (i < n && nums[i] === val) {
      //a. count++ i++
      count++; // counter
      i++; //2nd-pointer
    }
    //iv. if count>2, update it to 2
    if (count > 2) count = 2;
    //v. run a for loop count number of times
    // for (let c = 2; c > 0; c--) {
    while (count-- > 0) {
      //a. set val at array's j-th index => nums[j]=val
      nums[j] = val;
      //b. j++
      j++;
    }
  }
  // return j
  return j;
  //   return { newLength: j, newArr: nums }; // if we need to return length and updated array
}

let nums = [2, 2, 2, 2, 3, 4, 4, 9];
console.log(removeDuplicatesFromSortedArrayII(nums));
