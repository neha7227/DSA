/*
Binary Search --> array/string should be sorted


*/

function searchTarget(N, A, X) {
  let start = 0,
    end = N - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (A[mid] < X) {
      start = mid + 1;
    } else if (A[mid] > X) {
      end = mid - 1;
    } else return mid;
  }
  return -1;
}

let val = searchTarget(5, [1, 3, 5, 7, 13], 7);
console.log(val);
