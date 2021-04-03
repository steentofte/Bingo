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
var kolonne = [];
var FakeTal = [[true,1],[false,2],[true,3]];

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

    var countR1=0;
    var countR2=0;
    var countR3=0;

    while (countR1 != Raekke || countR2 != Raekke || countR3 != Raekke  )
    {
    countR1 = 0;
    countR2 = 0;
    countR3 = 0;
    kolonne = [];
    Row1 = [];
    Row2 = [];
    Row3 = [];
    Placering = [];  
    var kolonnecount = RandomRow();
    
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
    kolonnecount = RandomRow();
    while (kolonnecount !== R4){
        kolonnecount = RandomRow();
    }
    Placering.push(kolonne);
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
    
for (x = 0; x < 9; x++){
    Row1.push(Placering[x][0]);
    }
countR1 = Row1.filter(Boolean).length;
for (x = 0; x < 9; x++){
        Row2.push(Placering[x][1]);
    }
countR2 = Row2.filter(Boolean).length;
for (x = 0; x < 9; x++){
        Row3.push(Placering[x][2]);
    }
countR3 = Row3.filter(Boolean).length;
    }

layout.push(Row1,Row2,Row3);

console.table(layout);
console.log (PladeNy);
VisPlade();
}

function VisPlade() {
    var table = document.getElementById("TrykPlade");
    var row = table.insertRow(0);
    console.log ("visplade")
    var y = 0;
    for (x = 0; x < 27; x++)
        console.log(layout[x]);
        if (layout[x] == true){
            
            console.log(y);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = "TRUE CELL" + y;
            y++;
        }      
  
    }


function Fake() {
    document.getElementById('Fake').innerHTML = FakeTal;
    document.getElementById('Fake1').innerHTML = FakeTal[0,1];
    document.getElementById('Fake2').innerHTML = FakeTal[1,1];
    document.getElementById('Fake3').innerHTML = FakeTal[2,1];
    console.table(FakeTal);
}