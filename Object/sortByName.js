// Write a JavaScript function sortByName to sort the following array of objects by the name value.
// Return the sorted array of objects

var animals = [
   { species: 'Primate', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'},
   { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna'},
   { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'},
   { species: 'Elephant', name: 'Jumbo', age: 22, gender: 'male', favoriteFood: 'Apples'},
   { species: 'Bird', name: 'Twiti', age: 7, gender: 'male', favoriteFood: 'Seeds'},
 ];

var sortedAnimals;
function sortByName(animals){
  var tab=[];
  var result=[]
      for (var i=0;i<animals.length;i++){
          tab[i]=animals[i].name;
      }
      tab.sort();
      for(var i=0;i<tab.length;i++){
      for(var j=0;j<animals.length;j++){
      if(animals[j].name===tab[i]){
        result.push(animals[j])
      }
    }
    }
      return result
  }

