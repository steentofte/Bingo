function getRandomizer(bottom, top) {
    return function() {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }
}

var rollDie = getRandomizer( 1, 6 );

var results = ""
for ( var i = 0; i<1000; i++ ) {
    results += rollDie() + " ";    //make a string filled with 1000 random numbers in the range 1-6.
}