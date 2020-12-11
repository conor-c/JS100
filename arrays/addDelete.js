let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy = energy.slice(1);
energy[energy.length] = 'geothermal'
console.log(energy);

//could of used .push instead of index at energy.length (making use of preestablished methods!)
//Also could of used .shift() instead of .slice(1)