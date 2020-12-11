let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(subArray => {
  subArray.forEach(word => console.log(word));
});

//.flat() would of been a perfect method to use instead of a nested .forEach command
// Expected output:
// happy
// cheerful
// merry
// etc...