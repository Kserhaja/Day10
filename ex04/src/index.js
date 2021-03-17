var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
      
}
function myFunction(myObj) {
    // Only change code bellow this line
    var playerNumber = 10;
    var player = myObj[playerNumber];
    return player;
    
    // Only change code above this line
    


}



console.log(myFunction(players));


module.exports = {players, myFunction};