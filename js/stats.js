function mostrarEstadisticas(event, porcentaje, elemento) {
    document.getElementById(elemento).innerHTML = generarEstadisticasAsistencia(event, porcentaje);
}

function mostrarCapacidad(event) {
    document.getElementById("capacity").innerHTML = generarEstadisticasCapacidad(event);
}

function primeraTabla(events) {
    let eventoMayor = {};
    let porcentajeMayor = 0;
    let eventoMenor = {};
    let porcentajeMenor = 100;
    let capacidad = 0;
    let eventoCapacidad = {};

    for (let event of events) {
        if (event.assistance) {
            let porcentaje = (event.assistance * 100 / event.capacity);
            porcentaje = parseFloat(porcentaje.toFixed(2));
            if (porcentaje > porcentajeMayor) {
                porcentajeMayor = porcentaje;
                eventoMayor = event;
            }
            if (porcentaje < porcentajeMenor) {
                porcentajeMenor = porcentaje;
                eventoMenor = event;
            }
        }
    }
    mostrarEstadisticas(eventoMayor, porcentajeMayor, "highest");
    mostrarEstadisticas(eventoMenor, porcentajeMenor, "lowest");

    for (let event of events) {
        if (event.capacity >= capacidad) {
            capacidad = event.capacity;
            eventoCapacidad = event;
        }
    }
    mostrarCapacidad(eventoCapacidad);
}

function segundaTerceraTabla(events) {
    let upcoming = "";
    let past = "";

    let categorias = events.reduce((acc, event) => {
        if (!acc.includes(event.category)) {
            acc.push(event.category);
        }
        return acc;
    }, []);

    for (let categoria of categorias) {
        let revenuesUpcoming = 0;
        let estimateUpcoming = 0;
        let capacityUpcoming = 0;

        let revenuesPast = 0;
        let assistancePast = 0;
        let capacityPast = 0;

        for (let event of events) {
            if (event.category == categoria) {
                if (event.estimate) {
                    revenuesUpcoming += (event.estimate * event.price);
                    estimateUpcoming += event.estimate;
                    capacityUpcoming += event.capacity;
                }
                if (event.assistance) {
                    revenuesPast += (event.assistance * event.price);
                    assistancePast += event.assistance;
                    capacityPast += event.capacity;
                }
            }
        }
        if (revenuesUpcoming > 0) {
            let porcentajeUpcoming = (estimateUpcoming * 100 / capacityUpcoming);
            porcentajeUpcoming = parseFloat(porcentajeUpcoming.toFixed(2));
            upcoming += generarTabla(categoria, revenuesUpcoming, porcentajeUpcoming);
        }
        if (revenuesPast > 0) {
            let porcentajePast = (assistancePast * 100 / capacityPast);
            porcentajePast = parseFloat(porcentajePast.toFixed(2));
            past += generarTabla(categoria, revenuesPast, porcentajePast);
        }
    }
    document.getElementById("upcomingStats").innerHTML = upcoming;
    document.getElementById("pastStats").innerHTML = past;
}

cargarDatos().then(data => {
    let events = data.events;
    for (let event of events) {
        if (event.category == "Cinema") {
            console.log(event);
        }
    }
    console.log(events);
    primeraTabla(events);

    segundaTerceraTabla(events);


});