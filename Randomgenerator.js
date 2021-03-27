var rollDie = randomNumber( 0, 16 );
var CurrentTal = rollDie;
var UdtrukneTal=[];

let person  = {
    firstname: 'John',
    middlename: 'Svend-Arne',
    lastname: 'Adams'
};





function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function NytTalPull (){
    var NytTal = randomNumber( 0, 16 );
        if (UdtrukneTal.includes(NytTal)==true)
        {
            var NytTal = randomNumber( 0, 16 );
        }
        else
        {
            console.log (NytTal);
            //PrintCurrentTal(NytTal);
            UdtrukneTal.push (NytTal);
            console.log (UdtrukneTal);
            var table = document.getElementById("MyTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = NytTal;
        }
}

function PrintCurrentTal (NytTal){
    document.write(NytTal);
}

function PrintTal() {
    var table = document.getElementById("MyTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);

    cell1.innerHTML = NytTal;

  }

  function showMessage(message) {
    document.getElementById('message').textContent = NytTal;
}