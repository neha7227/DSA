let str = "hi i am neha";
let strToArr = str.split(" ");
console.log(strToArr, "strToArr");
let capStr = strToArr.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
console.log(capStr, "capStr");

console.log(capStr.join(" "));
