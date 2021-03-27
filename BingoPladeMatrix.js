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
        BingoMatrix();
    }
}

function BingoMatrix(){
    var TotalN = 0;
    while (TotalN !== 15){
        var R1 = randomNumber( 1, 3 );
        var R2 = randomNumber( 1, 3 );
        var R3 = randomNumber( 1, 3 );
        var R4 = randomNumber( 1, 3 );
        var R5 = randomNumber( 1, 3 );
        var R6 = randomNumber( 1, 3 );
        var R7 = randomNumber( 1, 3 );
        var R8 = randomNumber( 1, 3 );
        var R9 = randomNumber( 1, 3 );
    TotalN = R1+R2+R3+R4+R5+R6+R7+R8+R9;
    console.log(R1,R2,R3,R4,R5,R6,R7,R8,R9)
    console.log (TotalN);
}


}