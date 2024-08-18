/*
Problem Description
Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

Input format
There are 3 lines of input.

First line contains an Integer N that represents the number of elements in the array.

Second line contains N space separated integers, which are members of the array.

Third line contains an integer X, which is the target value.

Output format
Print "Present" if there is such a pair present in the array otherwise print "Not Present".

Constraints
2 <= Length of array <= 10^5

1 <= Range of values <= 10^6

Sample Input 1
5 --> Number of elements in array

2 4 5 8 9 --> Array elements

7 --> Target sum value

Sample Output 1
Present

Explanation 1
Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

*/
function twoSumInSortedArray(n, arr, target_sum) {
  /*
  //Brute force solution - TC: O(N^2)
  let l = 0,
    r = l + 1;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target_sum) return true;
    }
  }
  return false;
  */

  // Two pointer Approach
  // let p1 = 0,
  //   sum = 0,
  //   p2 = n - 1;
  // while (p1 < p2) {
  //   sum = arr[p1] + arr[p2];
  //   if (sum === target_sum) return true;
  //   else if (sum > target_sum) p2--;
  //   else p1++;
  // }
  // return false;

  let k = target_sum;
  let p1 = 0,
    p2 = n - 1;
  while (p1 < p2) {
    if (arr[p1] + arr[p2] === k) return true;
    else if (arr[p1] + arr[p2] > k) {
      p2--;
    } else p1++;
  }
  return false;
}

let n = 5,
  arr = [2, 4, 6, 8, 9],
  target_sum = 7;
console.log(twoSumInSortedArray(n, arr, target_sum));
