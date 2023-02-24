for(let event of data.events){    
    document.getElementById("paraCards").innerHTML += generarTarjeta(event);
}

let cards = document.getElementsByClassName("card");

for(let card of cards){
    let date = card.getElementsByClassName("event-date");
    console.log(date);
    if (date.innerHTML < data.currentDate){
        console.log(card.getElementsByClassName("buy-now"));
    }
}