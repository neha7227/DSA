/*
Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

Input format
One line of input, containing a single integer A.

Output format
Print a 2-d matrix of size A x A satisfying the spiral order.

Sample Input 1
3

Sample Output 1
1 2 3
8 9 4
7 6 5

Explanation
As you can see the matrix goes spirally with each next position incremented by one.

*/
function spiralMatrixII(n) {
  // array of size n
  let arr = new Array(n);

  // array of size nxn
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let count = 1;

  while (count <= n * n) {
    // 6. Repeat step2 to step5 until all rows are filled

    //2. Move Right(row const) col-start -> col-end
    for (let col = colStart; col <= colEnd; col++) {
      arr[rowStart][col] = count++;
      // count++
    }
    rowStart++;

    //3. Move down(col const) row-start -> row-end
    for (let row = rowStart; row <= rowEnd; row++) {
      arr[row][colEnd] = count;
      count++;
    }
    colEnd--;

    //4. Move Left ( row const) col-end -> col-start

    for (let col = colEnd; col >= colStart; col--) {
      arr[rowEnd][col] = count;
      count++;
    }
    rowEnd--;

    //5. Move Up ( col const) row-end -> row-start

    for (let row = rowEnd; row >= rowStart; row--) {
      arr[row][colStart] = count;
      count++;
    }
    colStart++;
  }
  //console.log(arr)
  return arr;
}

console.log(spiralMatrixII(3));
