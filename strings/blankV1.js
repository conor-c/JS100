function isBlank(string) {
  if (string.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));      //true

// could of skipped the if statement with "return string.length === 0;"
// because that will evaluate to true or false.