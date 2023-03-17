function mostrarEstadisticas(event, porcentaje, elemento){
    document.getElementById(elemento).innerHTML = generarEstadisticasAsistencia(event, porcentaje);
}

function mostrarCapacidad(event){    
    document.getElementById("capacity").innerHTML = generarEstadisticasCapacidad(event);
}

function primeraTabla(events){
    let eventoMayor = {};
    let porcentajeMayor = 0;
    let eventoMenor = {};
    let porcentajeMenor = 100;
    let capacidad = 0;
    let eventoCapacidad = {};

    for (let event of events){
        if(event.assistance){
            let porcentaje = (event.assistance * 100 / event.capacity);
            porcentaje = parseFloat(porcentaje.toFixed(2));
            if (porcentaje > porcentajeMayor){
                porcentajeMayor = porcentaje;
                eventoMayor = event;
            }
            if (porcentaje < porcentajeMenor ){
                porcentajeMenor = porcentaje;
                eventoMenor = event;
            }
        }        
    }
    mostrarEstadisticas(eventoMayor, porcentajeMayor, "highest");
    mostrarEstadisticas(eventoMenor, porcentajeMenor, "lowest");

    for (let event of events){
        if (event.capacity >= capacidad){
            capacidad = event.capacity;
            eventoCapacidad = event;
        }
    }
    mostrarCapacidad(eventoCapacidad);
}

cargarDatos().then(data => {
    let events = data.events;
    primeraTabla(events);


});