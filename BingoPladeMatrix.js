var rollDie = randomNumber( 1, 90 );
var MaxNumber = 15;
var MaxLinje = 3;
var MaxSpread = 10;
var StartTal = 1;
var SlutTal = 90;
var BingoArray = [];

function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NewPlate(){
    for (i = 1; i < MaxNumber; i++) {
        console.log(i)
        var PladeNummer = randomNumber( 1, 90 );
        console.log(PladeNummer);
        BingoArray.push (PladeNummer);
        document.getElementById(i).innerHTML = PladeNummer;
        console.log(PladeNummer);
    }
}