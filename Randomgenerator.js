function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NytTalpull (){
    var NytTal = randomNumber( 1, 90 );
    UdtrukneTal.push (NytTal);
    PrintCurrentTal(NytTal)
}

function PrintCurrentTal (NytTal){
    document.write(NytTal);
}
var rollDie = randomNumber( 1, 90 );