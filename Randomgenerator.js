function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

var rollDie = randomNumber( 1, 90 );