var rollDie = randomNumber( 1, 90 );
var MaxNumber = 15;
var MaxLinje = 3;
var MaxSpread = 10;
var StartTal = 1;
var SlutTal = 90;
var BingoArray = [];
var R1 = 1;
var R2 = 1;
var R3 = 1;
var R4 = 1;
var R5 = 1;
var R6 = 1;
var R7 = 1;
var R8 = 1;
var R9 = 1;

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
        BingoMatrix();
    }
}

function BingoMatrix(){
    var TotalN = 0;
    while (TotalN !== 15){
        R1 = randomNumber( 1, 3 );
        R2 = randomNumber( 1, 3 );
        R3 = randomNumber( 1, 3 );
        R4 = randomNumber( 1, 3 );
        R5 = randomNumber( 1, 3 );
        R6 = randomNumber( 1, 3 );
        R7 = randomNumber( 1, 3 );
        R8 = randomNumber( 1, 3 );
        R9 = randomNumber( 1, 3 );
    TotalN = R1+R2+R3+R4+R5+R6+R7+R8+R9;
    console.log(R1,R2,R3,R4,R5,R6,R7,R8,R9)
    console.log (TotalN);
}


}