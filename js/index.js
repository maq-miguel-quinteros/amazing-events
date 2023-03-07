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
let selectCategorias = [];
function mostrarTarjetas(selectCategorias) {
    let showCards = "";
    if (selectCategorias == ""){
        for (let event of data.events){
            showCards += generarTarjeta(event);
        }
    } else {
        for (let event of data.events){
            if (selectCategorias.includes(event.category)){
                showCards += generarTarjeta(event);
            }       
        }
    }   
    document.getElementById("paraCards").innerHTML = showCards;
}
mostrarTarjetas(selectCategorias);


for (let categoria of categorias) {
    document.getElementById(categoria).addEventListener("click", () => {
        if (!selectCategorias.includes(categoria)) {
            selectCategorias.push(categoria)
        } else {
            selectCategorias.splice(selectCategorias.indexOf(categoria), 1);
        }
        mostrarTarjetas(selectCategorias);
    })
}




