let showCards = "";
for (let event of data.events) {
    showCards += generarTarjeta(event);
}
document.getElementById("paraCards").innerHTML = showCards;