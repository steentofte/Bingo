var rollDie = randomNumber( 1, 5 );
var CurrentTal = rollDie;
var UdtrukneTal=[];

function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NytTalPull (){
    var NytTal = randomNumber( 1, 5 );
        while (UdtrukneTal.includes(NytTal)==true);
        {
            var NytTal = randomNumber( 1, 5 );
        }
    console.log (NytTal);
    //PrintCurrentTal(NytTal);
    
    UdtrukneTal.push (NytTal);
    console.log (UdtrukneTal);
}

function PrintCurrentTal (NytTal){
    document.write(NytTal);
}