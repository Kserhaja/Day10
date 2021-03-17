var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
};

    

// Only change code below this line

function myFunction(lion) {
    delete roar;
    // Only change code above this line

return lion;
}


myFunction(lion);

console.log(myFunction(lion.roar));

module.exports = { lion, myFunction };