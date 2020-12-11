function catAge(humanYears) {
  if (humanYears === 0) {
    return 0;
  } else if (humanYears === 1) {
    return 15;
  } else if (humanYears === 2) {
    return 24;
  } else {
    return 24 + ((humanYears - 2) * 4);
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

//a switch/case statement would of been less verbose than my if/elseif statements