let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let fishCount = 0;

while (fishCount < fish.length) {
  if (fish[fishCount] === 'Nemo') {
    console.log(fish[fishCount]);
    break;
  }
  console.log(fish[fishCount]);
  fishCount += 1; 
}


//initally was trying to return/break from the .forEach method
//could of purposefully thrown an exception upon finding 'Nemo'

//upon viewing the provided solution, I realize this code could be condenced by having the break conditional if statment at the end
//my thinking was that I want to exit as soon as possible, but I don't think that my way actually is different.