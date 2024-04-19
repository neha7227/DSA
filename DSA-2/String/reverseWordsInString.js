/*
Problem Description
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words.

The returned string should only have a single space separating the words.

Do not include any extra spaces.

Input format
String s.

Output format
The function should return a string of the words in reverse order concatenated by a single space.

Sample Input 1
hello world

Sample Output 1
world hello

Explanation
The given words after being reversed gives:world hello

Your reversed string should not contain leading or trailing spaces.

Constraints
1 <= s.length <= 10^5

s contains English letters (upper-case and lower-case), digits, and spaces ' '.

There is at least one word in s.

*/

function reverseWordsInAString(s) {
  /*
  //Approach1 --> TC: O(n+m*k)
  //1.trims leading/trailing white spaces
  s = s.trim(); // TC - O(n) (looping)

  //2. break string into array of words
  let words = s.split(/\s+/g); // TC - O(n) (looping)
  //console.log(words);

  //3. reverse words in array

  //4. join back array to form string
  let result = "";
  words.forEach((word) => {
    // TC - O(m*k) (looping over m words of k length)
    //console.log(word);
    result = word + " " + result;
    //console.log(result, "result");
  });
  return result;
*/
  /*
  //Approach 2 stack based -> TC - O(n), SC: O(n)
  // 1. define stack
  let stack = [];

  // 2. let newWord = ""
  let newWord = "";

  //3. loop over s,
  for (let i = 0; i < s.length; i++) {
    //TC - O(n)
    //i. append to  newWord, untill s[i] is not whitespace

    if (s[i] !== " ") newWord += s[i];
    //ii. if newWord is not null/empty, push newWord into stack
    else {
      if (newWord !== "") {
        stack.push(newWord);
        //a. reinitialize newWord to null after pushing into stack
        newWord = "";
      }
    }
  }
  // 4.Push the last word into the stack if not null
  // why? --> Now, after the loop, we might have a case where the last word in the string doesn't end with a space. In this case, newWord will still contain the characters of the last word. The additional check outside the loop (if (newWord !== null)) ensures that if there is a non-null newWord after the loop has finished processing the string, it gets pushed onto the stack.
  if (newWord !== null) {
    stack.push(newWord);
  }
  //5. print stack (LIFO order)
  //   console.log(stack);
  let result = "";
  //   for (let i = stack.length - 1; i >= 0; i--) {
  //     //TC O(n)
  //     // result += " " + stack[i];
  //     // console.log(result);
  //     result += stack.pop() + " ";
  //   }

  while (stack.length !== 0) { // TC - O(n)
    result += stack.pop() + " ";
  }
  return result;
*/
  //Approach 3 - TC: O(n)

  //1. create array from string
  let words = s.split(" ");
  //   console.log(words, "words");

  //2. remove out leading/training spaces from array of strings
  let fileteredWords = words.filter((word) => word !== "");
  //   console.log(fileteredWords, "fileteredWords");

  //3. reverse array
  let reversedWords = fileteredWords.reverse();

  //4. join back array to staring
  let result = reversedWords.join(" ");

  //5. return result
  return result;
}

let s = "     Hello    World";
console.log(reverseWordsInAString(s));
