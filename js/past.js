let showCards = "";
for (let event of data.events) {
    if (data.currentDate >= event.date){
        showCards += generarTarjeta(event);
    }
    
}
document.getElementById("paraCards").innerHTML = showCards;