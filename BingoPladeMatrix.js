var rollDie = randomNumber( 1, 90 );
var MaxNumber = 15;
var MinLinje = 1;
var MaxLinje = 3;
var MaxSpread = 10;
var StartTal = 1;
var SlutTal = 90;
var Raekke = 5;
var BingoArray = [];
var BingoPlade = [];
var PladeNy = [];
var Row1 = [];
var Row2 = [];
var Row3 = [];
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
//  for (i = 1; i < MaxNumber; i++) {
//        console.log(i)
//        var PladeNummer = randomNumber( 1, 90 );
//        console.log(PladeNummer);
//        BingoArray.push (PladeNummer);
//       document.getElementById(i).innerHTML = PladeNummer;
//    }
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
    var NytTal10 = randomNumber( 1, 10 );
    var NytTal20 = randomNumber( 11, 20 );
    var NytTal30 = randomNumber( 21, 30 );
    var NytTal40 = randomNumber( 31, 40 );
    var NytTal50 = randomNumber( 41, 50 );
    var NytTal60 = randomNumber( 51, 60 );
    var NytTal70 = randomNumber( 61, 70 );
    var NytTal80 = randomNumber( 71, 80 );
    var NytTal90 = randomNumber( 81, 90 );


    for (y = 0; y < R1; y++){
        NytTal10 = randomNumber( 1, 10 );
        while (PladeNy.includes(NytTal10)==true)
            {
            NytTal10 = randomNumber( 1, 10 );
               console.log(NytTal10);
            }
        PladeNy.push ([1,NytTal10]);
        }    

    for (x = 0; x < R2; x++){
        NytTal20 = randomNumber( 11, 20 );
        while (PladeNy.includes(NytTal20)==true)
            {
            NytTal20 = randomNumber( 11, 20 );
               console.log(NytTal20);
            }
        PladeNy.push ([2,NytTal20]);
        }    
    for (x = 0; x < R3; x++){
        NytTal30 = randomNumber( 21, 30 );
        while (PladeNy.includes(NytTal30)==true)
            {
            NytTal30 = randomNumber( 21, 30 );
               console.log(NytTal30);
            }
        PladeNy.push ([3,NytTal30]);
        }    

    for (x = 0; x < R4; x++){
        NytTal40 = randomNumber( 31, 40 );
        while (PladeNy.includes(NytTal40)==true)
            {
            NytTal40 = randomNumber( 31, 40 );
               console.log(NytTal40);
            }
        PladeNy.push ([4,NytTal40]);
        }   

    for (x = 0; x < R5; x++){
        NytTal50 = randomNumber( 41, 50 );
        while (PladeNy.includes(NytTal50)==true)
            {
            NytTal50 = randomNumber( 41, 50 );
               console.log(NytTal50);
            }
        PladeNy.push ([5,NytTal50]);
        }

    for (x = 0; x < R6; x++){
        NytTal60 = randomNumber( 51, 60 );
        while (PladeNy.includes(NytTal60)==true)
            {
            NytTal60 = randomNumber( 51, 60 );
               console.log(NytTal60);
            }
        PladeNy.push ([6,NytTal60]);
        }    

    for (x = 0; x < R7; x++){
        NytTal70 = randomNumber( 61, 70 );
        while (PladeNy.includes(NytTal70)==true)
            {
            NytTal70 = randomNumber( 61, 70 );
               console.log(NytTal70);
            }
        PladeNy.push ([7,NytTal70]);
        }    
            
    for (x = 0; x < R8; x++){
        NytTal80 = randomNumber( 71, 80 );
        while (PladeNy.includes(NytTal80)==true)
            {
            NytTal80 = randomNumber( 71, 80 );
               console.log(NytTal80);
            }
        PladeNy.push ([8,NytTal80]);
        }        

    for (x = 0; x < R9; x++){
        NytTal90 = randomNumber( 81, 90 );
        while (PladeNy.includes(NytTal90)==true)
            {
            NytTal90 = randomNumber( 81, 90 );
               console.log(NytTal90);
            }
        PladeNy.push ([9,NytTal90]);
        }    

    console.table(PladeNy);
    MakeRows();    
    }

    function GenererBingoNumrer (){
            var NytTal10 = randomNumber( 1, 10 );
            var NytTal20 = randomNumber( 11, 20 );
            var NytTal30 = randomNumber( 21, 30 );
            var NytTal40 = randomNumber( 31, 40 );
            var NytTal50 = randomNumber( 41, 50 );
            var NytTal60 = randomNumber( 51, 60 );
            var NytTal70 = randomNumber( 61, 70 );
            var NytTal80 = randomNumber( 71, 80 );
            var NytTal90 = randomNumber( 81, 90 );
               
                    CurrentTal = NytTal;
                    console.log (NytTal);
                    UdtrukneTal.push (NytTal);
                    console.log (UdtrukneTal);
                    var table = document.getElementById("MyTable");
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = NytTal;
                    showNytTal();
                }
        
function MakeRows (){
    const PladeNyR1 = PladeNy;
    for (x = 0; x < Raekke; x++){
    [].filter (PladeNyR1 => PladeNyR1);
    const random = Math.floor(Math.random() * PladeNyR1.length | 0);
    console.log(random, PladeNyR1[random]);
    PickRowNumber = PladeNyR1[random];
    delete PladeNyR1[random];
    console.log(PladeNyR1);
    Row1.push (PickRowNumber);
    console.log(Row1);
    }
}

    
