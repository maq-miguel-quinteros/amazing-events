let queryString = location.search;
let params = new URLSearchParams(queryString);
let id = params.get("id");

cargarDatos().then(data => {
    let eventDetails = data.events.find(event => event._id == id);
    document.getElementById("paraDetails").innerHTML = generarDetalle(eventDetails, data);
})