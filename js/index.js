// MUESTRA LAS CATEGORIAS
let categorias = data.events.reduce((acc,event)=>{
    if(!acc.includes(event.category)){
        acc.push(event.category);
        }
    return acc;
    },[]);

let showCategory = "";
for (let categoria of categorias){
    showCategory += generarCategoria(categoria);
}
document.getElementById("paraCategoria").innerHTML = showCategory;


// MUESTRA LAS TARJETAS 
let showCards = "";
for (let event of data.events) {
    showCards += generarTarjeta(event);
}
document.getElementById("paraCards").innerHTML = showCards;