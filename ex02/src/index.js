var myClothes = {
    "hat": "Fedora",
    "shirt": "Nike",
    "shoes": "Converse"
      
  }


function myFunction(myObj) {
    // Only change code bellow this line
    hatValue = myClothes.Hat;
    shirtValue = myClothes.shirt;
    shoesValue = myClothes.shoes;

    // Only change code above this line

    return myObj;


}



myFunction ()
console.log(myFunction(myClothes.hat));
console.log(myFunction(myClothes.shirt));
console.log(myFunction(myClothes.shoes));

module.exports = myFunction(myClothes);