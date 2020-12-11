function removeLastChar(string) {
  let lastCharGone = string.substring(0, string.length - 1)
  return lastCharGone;
}

console.log(removeLastChar('hey'));