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
var Placering = [];
var RTotal = [];
var layout = [];
var tal1;
var tal2;
var tal3;
var tal4;
var tal5;
var tal6;
var tal7;
var tal8;
var tal9;
var tal10;
var tal11;
var tal12;
var tal13;
var tal14;
var tal15;
var kolonne = [];
var FakeTal = [1,2,3];

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
        RTotal.push(R1,R2,R3,R4,R5,R6,R7,R8,R9);
        console.log (RTotal);
    GenererPlade();   
}

function GenererPlade(){
for (x = 0; x < 9; x++){
    for (y=0; y < RTotal[x]; y++){
        var NewNumber = randomNumber (x*10+1, x*10+10);
        while (PladeNy.includes(NewNumber)){
            var NewNumber = randomNumber (x*10+1, x*10+10);
        }
        PladeNy.push (NewNumber);
        console.log(PladeNy);
    }
}
    MakeRows();    
    }

 /*   function GenererBingoNumrer (){      
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
*/        
function RandomRow (){
    kolonne = [];
    var count = 0;
    const randA = Math.random() < 0.5;
    const randB = Math.random() < 0.5;
    const randC = Math.random() < 0.5;
    kolonne = [randA, randB, randC];
    count = kolonne.filter(Boolean).length;
    return count;
}
//
function MakeRows (){
    
    PlateLayout();
}

function PlateLayout (){
    var kolonnecount = RandomRow();
    console.log(R1);
    while (kolonnecount !== R1){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    while (kolonnecount !== R2){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    kolonnecount = RandomRow();
    while (kolonnecount !== R3){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    console.log("funk 2");
    kolonnecount = RandomRow();
    while (kolonnecount !== R4){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    console.log("funk 3");
    kolonnecount = RandomRow();
    while (kolonnecount !== R5){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    kolonnecount = RandomRow();
    while (kolonnecount !== R6){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    kolonnecount = RandomRow();
    while (kolonnecount !== R7){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    kolonnecount = RandomRow();
    while (kolonnecount !== R8){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    kolonnecount = RandomRow();
    while (kolonnecount !== R9){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
    
console.log(Placering);
}

function Fake() {
    document.getElementById('Fake').innerHTML = FakeTal;
}