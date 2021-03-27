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
    for (i = 0; i < MaxNumber; i++) {
        var PladeNummer = rollDie;
        BingoArray.push (PladeNummer);
        document.getElementById("p"+i).innerHTML = PladeNummer;
        console.log(PladeNummer);
    }
}