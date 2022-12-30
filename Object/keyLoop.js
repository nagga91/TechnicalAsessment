// Create a function called keyLoop that takes in an object and loops through
// each of the key values. If any of the key values are equal to "monkey", then
// return "There's a monkey!", otherwise return "There's no monkey here!".

var keyLoop;
var animals ={ species: 'monkey', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'};
  function keyloop(animals){
    var tab=Object.values(animals);
      for (var i=0;i<tab.length;i++){
       if (tab[i]==="monkey"){
        console.log("there is a monkey");
       }
       else{
        console.log("there is no monkey");
       }
   }
  }

