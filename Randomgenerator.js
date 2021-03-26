var rollDie = randomNumber( 1, 5 );
var CurrentTal = rollDie;
var UdtrukneTal=[];
var table = document.getElementById("PrintTal");

function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NytTalPull (){
    var NytTal = randomNumber( 1, 5 );
        if (UdtrukneTal.includes(NytTal)==true)
        {
            var NytTal = randomNumber( 1, 5 );
        }
        else
        {
            console.log (NytTal);
            //PrintCurrentTal(NytTal);
            UdtrukneTal.push (NytTal);
            console.log (UdtrukneTal);
        }
}

function PrintCurrentTal (NytTal){
    document.write(NytTal);
}

function myFunction() {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = NytTal;
}  