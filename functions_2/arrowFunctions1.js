const template = 'I VERB NOUN.';

let sentence = (verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

//could of omitted the return keyword because the function body contains only one statement.
//also could of omitted brackets because I do not need multiple statements