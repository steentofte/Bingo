var rollDie = randomNumber( 1, 90 );
var CurrentTal = rollDie;
var UdtrukneTal=[];
UdtrukneTal [0] = 12;
UdtrukneTal [1] = 132


function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NytTalPull (){
    var NytTal = randomNumber( 1, 90 );
    UdtrukneTal.push (NytTal);
    //PrintCurrentTal(NytTal);
    console.log (NytTal);
    console.log (UdtrukneTal)
}

function PrintCurrentTal (NytTal){
    document.write(NytTal);
}
