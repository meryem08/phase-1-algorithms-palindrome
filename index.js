function isPalindrome(word) {
  const cleanWord = word.replace(/[^a-z]/gi, "").toLowerCase();
  
  const reversedWord = cleanWord.split("").reverse().join("");

  return cleanWord === reversedWord;
}

/* 
  Add your pseudocode here

  To check if a string is a palindrome:
1. Clean the input string by removing non-alphabet characters and converting to lowercase.
2. Reverse the cleaned string.
3. Compare the cleaned string with its reverse.
4. If they are the same, return true (it's a palindrome); otherwise, return false (it's not a palindrome).
*/

/*
  Add written explanation of your solution here

-The function first cleans the input string by removing any non-alphabet characters using a regular expression and converts the string to lowercase to ensure case-insensitive comparison.
Next, it reverses the cleaned string by splitting it into an array of characters, reversing the array, and joining it back into a string.
Finally, it compares the cleaned string with its reverse. If they are the same, it returns true, indicating that the input string is a palindrome. Otherwise, it returns false, indicating that it is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Hannah"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
