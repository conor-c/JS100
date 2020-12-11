function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;
clonedPerson.blue = 42;
person.red = 35;


console.log(person);       
console.log(clonedPerson); 