function isPalindrome(word) {
  // Write your algorithm here
  //const splitWord=word.split ("")
  //const revWord = splitWord.reverse()
  //const joinRevWord = revWord.join ("")
  //console.log (joinRevWord, "I reversed the word!");
  const joinRevWord = word
  reversedWord =[...joinRevWord].reverse().join ("")
  
    if (word === reversedWord){
      return true
    } else {
      return false
    }
}

/* 
  Add your pseudocode here
*///create a function that takes a string input. 
//function will reverse the string input
//function will compare both the input and the reverse of the input then return a result of true or false  

/*
  Add written explanation of your solution here
*///The solution take the input and then turns it into an array.  
//It then takes the array and reverses its order before joining it again in a string.  Then the initial input "string" and the reversed "string" are compared
//if the two strings are the same or equal then the return is "True".  However if the two strings are not the same or equal then the return is "False"

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //console.log("Expecting: true");
  
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
