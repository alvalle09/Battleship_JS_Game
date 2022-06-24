alert(`Let's battle!`);

let location1 = Math.floor(Math.random() * 5);
let location2 = location1++;
let location3 = location2++;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready? Enter # from 1-6");
    
    if (guess< 0 || guess > 6) {
        alert("Enter # from 1-6")
    } else {
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits++;
            if (hits==3) {
                isSunk = true;
                alert("You sank my battleship!");
                
            }
 
        } else {
            alert("MISS!");
        }
    }    
    
}

let stats = "You took " + guesses + "guesses to sink the battleship, " +
                "which means your shooting accuracy was " + (3/guesses)*100 + "%";
    
alert(stats);
