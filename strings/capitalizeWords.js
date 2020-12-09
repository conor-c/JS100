function capitalizeWords(string) {
  let words = string.split(' ');
  let capitalizedWords = [];
  
  words.forEach(word => {
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  })
  return capitalizedWords.join(' ');
}

console.log(capitalizeWords('launch school tech & talk'));
//I spent a lot of time trying to figure out how to get the capitalized letter and the word back together
//I didn't think about concatenating after the fact.