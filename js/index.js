// VARIABLES GLOBALES
let selectCategorias = [];
let events = data.events;

// MUESTRA LAS CATEGORIAS
let categorias = data.events.reduce((acc, event) => {
    if (!acc.includes(event.category)) {
        acc.push(event.category);
    }
    return acc;
}, []);

let showCategory = "";
for (let categoria of categorias) {
    showCategory += generarCategoria(categoria);
}
document.getElementById("paraCategoria").innerHTML = showCategory;

// MUESTRA LAS TARJETAS
function mostrarTarjetas(selectCategorias, events) {
    let showCards = "";
    if (selectCategorias == ""){
        for (let event of events){
            showCards += generarTarjeta(event);
        }
    } else {
        for (let event of events){
            if (selectCategorias.includes(event.category)){
                showCards += generarTarjeta(event);
            }       
        }
    }   
    document.getElementById("paraCards").innerHTML = showCards;
}
mostrarTarjetas(selectCategorias, events);

// SELECCION DE CATEGORIAS
for (let categoria of categorias) {
    document.getElementById(categoria).addEventListener("click", () => {
        if (!selectCategorias.includes(categoria)) {
            selectCategorias.push(categoria)
        } else {
            selectCategorias.splice(selectCategorias.indexOf(categoria), 1);
        }
        mostrarTarjetas(selectCategorias, events);
    })
}

// BUSCADOR
function buscador(texto){
    let textoLow = texto.toLowerCase();
    console.log(textoLow);
    events = [];
    for (let event of data.events){
        if (event.name.toLowerCase().includes(textoLow)){
            events.push(event);
        }else {
            if (event.description.toLowerCase().includes(textoLow)){
                events.push(event);
            }
        }
    }
    if (events == ""){
        events = data.events;
    }
    mostrarTarjetas(selectCategorias, events);
}


// EVENTOS DEL BUSCADOR
let buscar = document.getElementById("textBuscar");

buscar.addEventListener("keypress", ev => {
    if (ev.key === "Enter") {
        ev.preventDefault();
        buscador(buscar.value);
    }
});

let btnBuscar = document.getElementById("buttonBuscar");
btnBuscar.addEventListener("click", ev => {
    ev.preventDefault();
    buscador(buscar.value);
});