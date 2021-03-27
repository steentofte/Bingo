var rollDie = randomNumber( 1, 90 );
var MaxNumber = 15;
var MinLinje = 1;
var MaxLinje = 3;
var MaxSpread = 10;
var StartTal = 1;
var SlutTal = 90;
var BingoArray = [];
var BingoPlade = [];
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
    }
    BingoMatrix();
}

function BingoMatrix(){
    var TotalN = 0;
    while (TotalN !== MaxNumber){
        R1 = randomNumber( MinLinje, MaxLinje );
        R2 = randomNumber( MinLinje, MaxLinje );
        R3 = randomNumber( MinLinje, MaxLinje );
        R4 = randomNumber( MinLinje, MaxLinje );
        R5 = randomNumber( MinLinje, MaxLinje );
        R6 = randomNumber( MinLinje, MaxLinje );
        R7 = randomNumber( MinLinje, MaxLinje );
        R8 = randomNumber( MinLinje, MaxLinje );
        R9 = randomNumber( MinLinje, MaxLinje );
    TotalN = R1+R2+R3+R4+R5+R6+R7+R8+R9;
        }
    GenererPlade();   
}

function GenererPlade(){
    for (y = 0; y < R1; y++){
        BingoPlade.push (1,"*");
        console.log("xx");
    }
    for (x = 0; x < R2; x++){
            BingoPlade.push (2,"*");
        }    
    for (x = 0; x < R3; x++){
            BingoPlade.push (3,"*");
        } 
    for (x = 0; x < R4; x++){
            BingoPlade.push (4,"*");
        } 
    for (x = 0; x < R5; x++){
            BingoPlade.push (5,"*");
        } 
    for (x = 0; x < R6; x++){
            BingoPlade.push (6,"*");
        } 
    for (x = 0; x < R7; x++){
            BingoPlade.push (7,"*");
        } 
    for (x = 0; x < R8; x++){
            BingoPlade.push (8,"*");
        } 
    for (x = 0; x < R9; x++){
            BingoPlade.push (9,"*");
        } 
    console.log(BingoPlade);    
    }

    function GenererBingoNumrer ();
