// PASSWORD GENERATOR
/********************************************************
    1-Chiedi all'utente il suo nome;
    2-Chiedi il suo cognome;
    3-Chiedi il suo colore preferito;
    4-Scrivi sulla pagina nomecognomecolorepreferito21.
********************************************************/

// 1
var username = prompt("What's your name?");
console.log(username);

// 2
var surname = prompt("What's your surname?");
console.log(surname);

// 3
var favouriteColour = prompt("What's your favourite colour?");
console.log(favouriteColour);

// 4
document.getElementById("password").innerHTML = username + surname + favouriteColour + '21';