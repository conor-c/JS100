let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let person = {};
for (let i = 0; i < nestedArray.length; i++) {
  person[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(person);

//Object.fromEntries() would of been the built in method to doing this task.