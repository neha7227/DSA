const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);
//   console.log(items, "items1")
// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
  // return nameA.localeCompare(nameB)
});
//   console.log(items, "items2")

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let [key, value] in user) {
  // keys
  // console.log( "key:", key );  // name, age, isAdmin
  // console.log( "value:", value );  // name, age, isAdmin
  // values for the keys
  // console.log( user[key] ); // John, 30, true
}

const iterable = [10, 20, 30];

for (let key of iterable) {
  //   console.log(key)
}
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

recipeMap.forEach((value, key, map) => {
  // console.log(`${key}: ${value}`); // cucumber: 500 etc
  // console.log(map, "map")
});
// console.log(recipeMap.keys());
// console.log(recipeMap.values());

for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  // console.log(entry); // cucumber,500 (and so on)
}

let obj = {
  name: "John",
  age: 30,
};

// console.log(Object.entries(obj));
//create map from obj
let mapFromObject = new Map(Object.entries(obj));
// console.log(map);
// console.log(map.get("name"));
// console.log(map["name"]);

let objFromMap = Object.fromEntries(mapFromObject);
// console.log("objFromMap :", objFromMap);
// console.log(objFromMap["name"]);

console.log(mapFromObject.entries()); // object of key-value pair array - map
// console.log(mapFromObject);
// console.log(Object.entries(obj)); // array of key-value pair array
console.log(Object.fromEntries(mapFromObject)); // object
console.log(Object.fromEntries(mapFromObject.entries())); // object

let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value, "value");
  console.log(set, "set");

  console.log(valueAgain, "valueAgain");
});
console.log(set.entries());
