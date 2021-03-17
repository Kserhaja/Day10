var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
      
  }


function myFunction(myObj) {
    // Only change code bellow this line
    vegetableValue = ["carrot"];
    fruitValue = ["fruit"];
    drinkValue = ["drink"];

    // Only change code above this line

    return myObj;


}



myFunction ()
console.log(myFunction(myFood.vegetable));
console.log(myFunction(myFood.fruit));
console.log(myFunction(myFood.drink));

module.exports = myFunction(myFood);