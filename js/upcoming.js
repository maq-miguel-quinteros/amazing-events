/* FUNCIONES PARA LLAMAR A LOS GENERADORES DE HTML */
function mostrarTarjetas(selectCategorias, events, currentDate) {
    let showCards = "";
    if (selectCategorias == "") {
        for (let event of events) {
            if (currentDate <= event.date){
            showCards += generarTarjeta(event, currentDate);
            }
        }
    } else {
        for (let event of events) {
            if (selectCategorias.includes(event.category)) {
                if (currentDate <= event.date){
                    showCards += generarTarjeta(event, currentDate);
                }                
            }
        }
    }
    document.getElementById("paraCards").innerHTML = showCards;
}

function mostrarCategoria(data) {
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
    return categorias;
}


/* TRABAJAMOS CON LOS DATOS QUE TRAE LA API */
cargarDatos().then(data => {
    let events = data.events;
    let selectCategorias = [];

    let categorias = mostrarCategoria(data);
    mostrarTarjetas(selectCategorias, events, data.currentDate);

    for (let categoria of categorias) {
        document.getElementById(categoria).addEventListener("click", () => {
            if (!selectCategorias.includes(categoria)) {
                selectCategorias.push(categoria)
            } else {
                selectCategorias.splice(selectCategorias.indexOf(categoria), 1);
            }
            mostrarTarjetas(selectCategorias, events, data.currentDate);
        })
    }

    function buscador(texto) {
        let textoLow = texto.toLowerCase();
        events = [];
        for (let event of data.events) {
            if (event.name.toLowerCase().includes(textoLow)) {
                events.push(event);
            } else {
                if (event.description.toLowerCase().includes(textoLow)) {
                    events.push(event);
                }
            }
        }
        if (events == "") {
            events = data.events;
        }
        mostrarTarjetas(selectCategorias, events, data.currentDate);
    }

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
});