function repeat(times, string) {
  let newString = '';
  while(times > 0) {
    newString += string;
    times -= 1;
  }
  console.log(newString);
}

repeat(2, 'blah');

//post answer thoughts: better naming variables.
//Also I should start returning and console logging the function instead.