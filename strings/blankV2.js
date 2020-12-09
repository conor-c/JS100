function isBlank(string) {
  return !/[\w]/.test(string); //checks to see if the string matches a word character, returns true when it does NOT
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

//I could of used the .trim() method, but I wanted to catch cases where the string had spaces between words