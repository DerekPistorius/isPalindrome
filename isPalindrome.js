// Write your code below
function checkForPalindrome(string){
    const length = string.length;
    for (let i = 0; i < length /2; i++) {
        if (string[i] !== string[length - 1 -i]) {
            return "This is not a palindrome";
        }
    }
    return "This is a palindrome";
}

console.log(checkForPalindrome('noon'));
  