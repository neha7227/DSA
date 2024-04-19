/*
Problem Description
Given an m x n matrix, if an element is 0, set its entire row and column to 0.

Do it in-place, that is, modify the same matrix. Do not create a new one.

Input format
First line contains 2 integers m,n - number of rows and columns respectively.

Next m lines contain space separated n integers.

Output format
Output the same matrix.

Sample Input 1
3 3

1 1 1

1 0 1

1 1 1

Sample Output 1
1 0 1

0 0 0

1 0 1

Explanation 1
There is one ‘0’ in the 2nd row and 2nd column, so all the elements in that row and column become 0.

Sample Input 2
3 4

0 1 2 0

3 4 5 2

1 3 1 5

Sample Output 2
0 0 0 0

0 4 5 0

0 3 1 0

Explanation 2
The 1st row, 1st column and 4th column all contain ‘0’, so all the values in these rows & columns become 0.

Constraints
M,N <= 500

*/

// matrix => m x n (row x col)

function setMatrixZeroes(A) {
  //   console.log(A);
  let m = A.length;
  let n = A[0].length;

  /*
  // Approach1 Brute force solution
    //TC: O(m*n) + O(m+n) + O(m*n) ~ O(n^3)
  // 1.TC for below loops -> O(m*n)*(O(m)+O(n))
  for (let i = 0; i < m; i++) {
    // O(m)
    for (let j = 0; j < n; j++) {
      //O(n)
      if (A[i][j] === 0) {
        markRow(i); // O(n)
        markCol(j); // O(m)
      }
    }
  }

  function markRow(i) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] != 0) {
        A[i][j] = -1;
      }
    }
  }
  function markCol(j) {
    for (let i = 0; i < m; i++) {
      if (A[i][j] != 0) {
        A[i][j] = -1;
      }
    }
  }

  // 2. TC - O(m*n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] === -1) A[i][j] = 0;
    }
  }

  return A;
  */

  //Approach 2
  // col[j] = matrix[0][j] // row const
  // row[i] = matrix[i][0] // col const
  let col0 = 1;
  // creating hash/flag for takng note of row/col having 0 before making any changes to A
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 0) {
        // mark ith row
        A[i][0] = 0;
        // mark jth col
        if (j != 0) {
          // separately created hash for 0-th col, 0-th row i.e A[0][0]
          A[0][j] = 0;
        } else col0 = 0;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][i] !== 0) {
        //check for row-col
        if (A[i][0] == 0 || A[0][j] == 0) {
          A[i][j] = 0;
        }
      }
    }
  }
  //for cols
  if (A[0][0] === 0) {
    for (let j = 0; j < n; j++) {
      A[0][j] = 0;
    }
  }
  // for rows
  if (col0 === 0) {
    for (let i = 0; i < m; i++) {
      A[i][0] = 0;
    }
  }
  return A;
}

let A = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(setMatrixZeroes(A));
// resource:  https://www.youtube.com/watch?v=N0MgLvceX7M
