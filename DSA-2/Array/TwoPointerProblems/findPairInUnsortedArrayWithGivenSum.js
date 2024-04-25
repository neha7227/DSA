/*
Problem Description
Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

Print the indices in increasing order.

Input format
First line contains an Integer N that represents the number of elements in the array.

Second line contains N space separated integers, which are members of the array.

Third line contains an integer X, which is the target value.

Output format
Print two space separated indices(in increasing order) of the numbers which add up to the specified target.

Constraints
2 <= Length of array <= 100000

1 <= Range of values <= 1000000

Sample Input 1
5 --> Number of elements in array

2 4 5 9 8 --> Array elements

7 --> Target sum value

Sample Output 1
0 2

Explanation 1
Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

*/
function twoSum(nums, target) {
  let n = nums.length;
  /*
 Approach 1: Brute force: TC=O(n^2)
    

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  */
  // Approach 2 --> TC = O(n)
  //1. create a hashmap
  let numIndices = new Map();
  //2. run loop 0 -> n-1
  for (let i = 0; i < n; i++) {
    // TC: O(n)
    //i. add hashmap key-value pair as array-index
    numIndices.set(nums[i], i);
    //ii. defined complement number for given target
    let complement = target - nums[i];
    //iii. check if hashmap has complement
    if (numIndices.has(complement)) {
      // a. complement index = hashMap index
      let complementIndex = numIndices.get(complement); // TC in hashMap operations - 1
      //   console.log(complementIndex, complement);
      //b. return complementIndex and i
      return [complementIndex, i];
    }

    // numIndices.set(nums[i], i);
    // console.log(numIndices, "numIndices");
  }
  return [0, 0];
}

let nums = [2, 4, 5, 9, 8];
let target = 7;
console.log(twoSum(nums, target));
