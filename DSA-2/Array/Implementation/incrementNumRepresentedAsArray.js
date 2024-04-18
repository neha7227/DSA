/*
Problem Description
Given a number represented as an array of digits, increment the number by 1, and return the resulting sum as an array.

Input format
There are two lines of input.

First line will contain a single integer N .

Next line will contain N space separated integers for Array A.

Output format
Single integer which will be the incremented number.

Sample Input 1
3

1 1 1

Sample Output 1
112

Explanation
111 + 1 = 112

Constraints
0<=Ai<10

Most significant value will be non-zero in the array.

1<=N<=5000

*/

function incrementNumber(n, A) {
  //1. define carry=1, sum=0, ans=[](empty ans array)
  let carry = 1,
    sum = 0,
    ans = [];
  //2. Run loop right->Left
  for (let i = n - 1; i >= 0 && carry > 0; i--) {
    //2.1 add sum
    sum = A[i] + carry;
    //2.2 extract units place digit from sum and update A[i]
    A[i] = sum % 10;
    //2.3 extract tens place digit from sum, update carry with tens digit
    carry = Math.floor(sum / 10);
  }
  //3. if carry>=1, add 1 at starting of ans
  if (carry >= 1) A.unshift(1);
  return A;
}

console.log(incrementNumber(3, [9, 9, 9]));
