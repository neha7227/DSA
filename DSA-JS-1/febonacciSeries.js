// febonaci(0) 0
// febonaci(1) 1
// febonaci(2) f(1)+f(0)
// febonaci(3) f(2)+f(1)
// febonaci(4) f(3)+f(2)
// febonaci(5) f(4)+f(3)
// Print nth febonacci series

// recursive call for febonacci is not optimized solution as
// Time complexity is O(n^2)

function febonaci(n) {
  if (n === 0 || n === 1) return n;
  return febonaci(n - 1) + febonaci(n - 2);
}

console.log(febonaci(5));
// console.log(febonaci(4));
