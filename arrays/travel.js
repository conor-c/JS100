let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(desiredLocation, destinationsArray) {
  for (let i = 0; i < destinationsArray.length; i++) {
    if (destinationsArray[i] === desiredLocation) {
      return true;
      }
    }
    return false;
  }



console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
console.log(contains('bill', destinations));
//.indexOf() with a conditional that returned true when the index was >=0 would of been cleaner