//JS Array functions
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const arr = kvArray.map((ele) => {
  console.log(ele, "ele");
  // return {ele[key] : ele[value]}
  return { [ele.key]: ele.value };
});

console.log(arr, "arr");

const reformattedArray = kvArray.map(({ key, value }) => {
  //   console.log("key:", key);
  //   console.log("val:", value);
  //   console.log(key, ":", value);

  return { [key]: value };
});

// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray);

console.log("==========================reduce==============");

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];
const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
console.log(allBooks);

const allBooks1 = friends.flatMap((person) => person.books);

console.log(allBooks1);

let arr1 = [1, 2, 3, 4, 4];
let redArr1 = arr1.reduce((acc, ele, index) => {
  console.log(acc, ele, index);
  return acc + ele;
}, 10);
console.log(redArr1);

function countOccurrences(arr) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    console.log(accumulator[currentValue], "accumulator[currentValue]");
    return accumulator;
  }, {});
}
// console.log(countOccurrences(arr1));

let nestedArr = [[[[1, 2]]], [3, 4, [5, [6]]]];
console.log(nestedArr);

function flatenedArray(arr) {
  return arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatenedArray(curr) : curr),
    []
  );
}

console.log(flatenedArray(nestedArr));
console.log(!arr1);

// Using slice, create newCar from myCar.
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
// newCar[0].color = "pink";
console.log(myCar);
console.log(newCar);
