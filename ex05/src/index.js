var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
      
  }


function myFunction(name) {
    // Only change code bellow this line
    school.name = "Paragon";
    return school;

    

// Only change code above this line

}



myFunction ()
console.log(myFunction(school.name));

module.exports = { school, myFunction };