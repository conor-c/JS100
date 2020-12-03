function extractRegion(locale) {
  return(locale.slice(3, 5))
}
console.log(extractRegion('en_US.UTF-8'));