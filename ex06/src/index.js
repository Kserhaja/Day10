lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    
};
lion["roar"] = "roar-roar";



function myFunction(lion) {
    // Only change code below this line
    lion["roar"] = "roar-roar";
    // Only change code above this line

return lion;
}


myFunction(lion["roar"]);

console.log(myFunction("roar"));

module.exports = myFunction;