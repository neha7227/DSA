//m*n size | m row, n col
// rows - m.length
// col =m[0].length

let arr = [
  [1, 2, 3, 10],
  [4, 5, 6, 11],
  [7, 8, 9, 12],
];
console.log(arr.length);

// for(let i=0; i<m)

let a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// let m = 3;
// a.length - rows
// a[0].length - col

let row = a.length;
let col = a[0].length;

// col wise traversal
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    console.log("matrix : ", a[i][j]);
    console.log("  ");
  }
}

// row wise traversal
a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let j = 0; j < col; j++) {
  for (let i = 0; i < row; i++) {
    console.log("matrix :a[", i, "]", "[", j, "]", a[i][j]);
    console.log("  ");
  }
}
