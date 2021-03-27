<script src="Randomgenerator.js"></script>
var MaxNumber = 15;
var MaxLinje = 3;
var MaxSpread = 10;
var StartTal = 1;
var SlutTal = 90;
var BingoArray = [];


function BingoPladeGenerator (){
    for (i = 0; i < MaxNumber; i++) {
        var PladeNummer = rollDie;
        BingoArray.push (PladeNummer);
        document.getElementById("p1").innerHTML = PladeNummer;
        console.log(PladeNummer);
    }
}