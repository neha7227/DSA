/*Problem Description
An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of start value.

Input format
There are N+1 lines of input.

First line contains N, the number of intervals

Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

Output format
For the X merged intervals, print each interval (the start and end being space separated) on a separate line

Constraints
1 <= N <= 50000

0 <= A, B <= 1e9

B >= A

Sample Input 1
4

1 3

2 6

8 10

15 18

Sample Output 1
1 6

8 10

15 18

Explanation 1
Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

Sample Input 2
2

1 4

4 5

Sample Output 2
1 5

Explanation 2
Intervals [1 4] and [4 5] overlap and get merged into [1 5]


*/

function mergeIntervals(intervals) {
  //1. find length of total intervals given
  let n = intervals.length;
  //2. define result array
  let result = [];
  //3. update result array with interval array's first entries i.e intervals[0]
  result.push(intervals[0]);
  //4. run loop from i=1 to n-1
  for (let i = 1; i < n; i++) {
    //i. define prev to store last entered value of result array i.e (length -1)th
    let prev = result[result.length - 1];

    //ii. define curr to store ith index values of intervals array
    let curr = intervals[i];
    //iii. check if curr's lower bound < prev's upper bound
    if (curr[0] <= prev[1]) {
      //a. if true then store maximum of upper bound of prev's upper bound or curr's upper bound
      prev[1] = Math.max(prev[1], curr[1]);
    }
    // else result.push(intervals[i]);
    //iv. else push curr to results array as no overlapping
    else result.push(curr);
  }
  return result;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));
