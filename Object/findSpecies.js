// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;
var animals = [
    { species: 'Primate', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'},
    { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna'},
    { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'},
    { species: 'Elephant', name: 'Jumbo', age: 22, gender: 'male', favoriteFood: 'Apples'},
    { species: 'Bird', name: 'Twiti', age: 7, gender: 'male', favoriteFood: 'Seeds'},
  ];
function findspecies(animals){
    var tab=[];
        for (var i=0;i<animals.length;i++){
            tab[i]=animals[i].species;
        }
        return tab;
    }

