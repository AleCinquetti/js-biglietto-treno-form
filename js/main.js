// input
var user = document.getElementById('name');
var km = document.getElementById('distance');
var age = document.getElementById('age-range');

// BOTTONI
var printBtn = document.getElementById('print');
var undoBtn = document.getElementById('undo');

// eventi al click del bottone "print"
printBtn.addEventListener("click",
    function() {
        userName = user.value;
        distanceinKm = km.value;
        userAge = age.value;
        document.getElementById('ticket').style.opacity = 1;

        // CALCOLO PREZZO BIGLIETTO
        ticketPrice = 0.21 * distanceinKm;
        underPrice = ticketPrice - (ticketPrice * 0.2);
        overPrice = ticketPrice - (ticketPrice * 0.4);
        // calcolo prezzo viaggio se under 18
        if (userAge < 18) {
            price = underPrice;
            discount = "-20%";
        // calcolo prezzo viaggio se over 65
        } else if (userAge > 65) {
            price = overPrice;
            discount = "-40%";
        } else {
            price = ticketPrice;
            discount = "Biglietto standard";
        }

        // biglietto stampato
        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-type').innerHTML = discount;
        document.getElementById('ticket-price').innerHTML = price.toFixed(2) + " euro";
    }
);

// eventi al click del bottone "undo"
undoBtn.addEventListener ("click",
    function() {
        user.value = "";
        km.value = "";
        age.value = "";
        document.getElementById('ticket').style.opacity = 0;
    }
)

















var distanceinKm;
var userAge;
var ticketPrice;
var fixedPrice;
