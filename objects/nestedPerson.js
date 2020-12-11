let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
let nestedPerson = [];
for (let [key, value] of Object.entries(person)) {
  nestedPerson.push([key, value]);
}

console.log(nestedPerson);

//could of simply done 'let nestedPerson = Object.entries(person);
//but I didn't read the docs on Object.entries well enough and just emulated their example