var MaxNumber = 15;
var MinLinje = 1;
var MaxLinje = 3;
var Raekke = 5;
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
var layoutMedTal = [];
var layoutMedTalOmformat = [];


function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NewPlate(){
    var TotalN = 0;
    R1,R2,R3,R4,R5,R6,R7,R8,R9 = 1;
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
PladeNy = [];
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
function RandomRow (){
    layout = [];
    kolonne = [];
    var count = 0;
    const randA = Math.random() < 0.5;
    const randB = Math.random() < 0.5;
    const randC = Math.random() < 0.5;
    kolonne = [randA, randB, randC];
    count = kolonne.filter(Boolean).length;
    return count;
}

function MakeRows (){
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

VisPlade();
}

function VisPlade() {
    layoutMedTal.length = 0;
    layoutMedTalOmformat.length = 0;
    var y = 0;
    var col = 0;
    var r = 0;
    for (r = 0; r < 9; r++)
        {
        for (col = 0; col < 3; col++){
            if (layout[col][r]){

                layoutMedTal.push (PladeNy[y]);
                y++;

                }
            else {
            layoutMedTal.push (" ");
            }
        }
    }
    console.log (layoutMedTal);
    var pointer = 0;
    for (i = 0; i < 9; i++)
        {
            layoutMedTalOmformat.push (layoutMedTal[i*3]);
        }
    for (i = 0; i < 9; i++)
        {
            layoutMedTalOmformat.push (layoutMedTal[(i*3)+1]);
        }
    for (i = 0; i < 9; i++)
        {
            layoutMedTalOmformat.push (layoutMedTal[(i*3)+2]);
        }

    var table = document.getElementById("TrykPlade");
    while (table.rows.length > 0)
    {
        table.deleteRow(0);
    }
        var taeller = 0;
    for (u = 0; u < 3; u++)
    {
        var row = document.createElement('tr');
      
        for (v = 0; v < 9; v++)
        {
                var cell = document.createElement('td');    
                cell.textContent = layoutMedTalOmformat[taeller];
                row.appendChild(cell);
                taeller++;
                table.appendChild(row); 
        }    
    }

    }