/*Problem Description
You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.

Note: You may not slant the container and n is at least 2.

Input format
The first line consists of an integer, N, denoting the size of the array.

The second line consists of N space separated integers which denote the elements of the array,

Output format
Single integer denoting the capacity of the largest container.

Constraints
2 <= N <= 10^6

Sample Input 1
9

1 8 6 2 5 4 8 3 7

Sample Output 1
49

Explanation 1
The lines of length 8 and 7 form a container that can hold 7*7=49 units of water. Here, the first 7 is the minimum of the two line heights and the second 7 is the number of units they are apart. This is the largest container that can be formed with the given input.


*/

function maxArea(height) {
  //Two pinter Approach : TC: O(n)
  //1. variables maxarea=0, leftIndex=0, rightIndex=n-1
  //2. run a loop until leftIndex<rightIndex
  //i. calculate variable area = length * breadth ;
  //length = rightIndex-leftIndex
  //breadth = min(array value at [leftIndex], array value at[rightIndex])
  //ii. compare and assign maximum of maxarea and area to maxarea
  //iii. check if value height[leftIndex]<height[rightIndex]) leftIndex++;
  //iv. else rightIndex--;
  //3. return maxarea;
  let n = height.length;
  let maxArea = 0,
    l = 0,
    r = n - 1;

  for (let i = 0; i < n; i++) {
    // TC- O(n)
    while (l < r) {
      let area = (r - l) * Math.min(height[l], height[r]);
      maxArea = Math.max(maxArea, area);
      if (height[l] < height[r]) {
        l++;
      } else r--;
    }
  }
  return maxArea;

  // let n = height.length;
  // let mA = 0;
  // let l = 0,
  //   r = n - 1;
  // for (let i = 0; i < n; i++) {
  //   while (l < r) {
  //     let len = r - l;
  //     A = len * Math.min(height[l], height[r]);
  //     mA = Math.max(mA, A);
  //     if (height[l] < height[r]) {
  //       l++;
  //     } else r--;
  //   }
  // }
  // return mA;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
