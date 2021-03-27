var rollDie = randomNumber( 1, 90 );
var CurrentTal = rollDie;
var UdtrukneTal=[];
var NytTal = randomNumber( 1, 90 );

function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NytTalPull (){
    var NytTal = randomNumber( 1, 90 );
    
        if (UdtrukneTal.includes(NytTal)==true)
        {
            var NytTal = randomNumber( 1, 90 );
        }
        else
        {
            CurrentTal = NytTal;
            console.log (NytTal);
            //PrintCurrentTal(NytTal);
            UdtrukneTal.push (NytTal);
            console.log (UdtrukneTal);
            var table = document.getElementById("MyTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = NytTal;
            showNytTal();
        }
}

function PrintCurrentTal (NytTal){
    document.write(NytTal);
}

function showNytTal() {
    document.getElementById('message').textContent = CurrentTal;
}