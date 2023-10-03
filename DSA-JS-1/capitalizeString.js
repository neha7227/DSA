// console.log(
//   "capitalize first letter of every word in a statement without inbuilt functions"
// );

let str = "a quick Brown fox jumps Over a lazy dog.";

function capitalizeString(str) {
  let newStr = "";
  let asciiDiff = "a".charCodeAt(0) - "A".charCodeAt(0); // 32 between every smallcase and capital case letter

  for (let i = 0; i < str.length; i++) {
    if (
      (i > 0 && str[i - 1] === " " && str[i] >= "a" && str[i] <= "z") ||
      (i === 0 && str[i] >= "a" && str[i] <= "z")
    ) {
      let capitalLetterAscii = str[i].charCodeAt(0) - asciiDiff;

      newStr += String.fromCharCode(capitalLetterAscii);
    } else newStr += str[i];
  }
  return newStr;
}

let capitalString = capitalizeString(str);
console.log(capitalString);
