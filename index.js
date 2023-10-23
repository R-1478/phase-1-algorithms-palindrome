const word = "a";

function isPalindrome(word) {
  // Write your algorithm here
  // program to check if the string is palindrome or not

 

  // find the length of a string
  const len = word.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are same
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }
  return true;

}
const value = isPalindrome(word);

console.log(value);
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
