function generarTarjeta(event) {
    let assistance = "hidden";
    if (event.date < data.currentDate) {
        assistance = "";
    }
    return `
    <div class="card" style="width: 18rem;">
        <div class="d-flex justify-content-between align-items-center p-1">
            <span class="event-date">${event.date}</span><span>${event.place}</span>
        </div>
        <figure class="p-1">
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <figcaption>${event.category}</figcaption>
        </figure>        
        <div class="card-body">        
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span>Price: ${event.price}</span>
                <a href="details.html?id=${event._id}" class="btn btn-primary buy-now">View</a>
                </div>            
            <div class="d-flex justify-content-between align-items-center">
            <span>Capacity: ${event.capacity}</span>
            <span ${assistance}>Assistance: ${event.assistance}</span>
        </div>
        </div>
    </div>
    `
}

function generarCategoria(categoria) {
    return `
    <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${categoria}" id="${categoria}">
            <label class="form-check-label" for="${categoria}">
                ${categoria}
            </label>
        </div>
    `
}

function generarDetalle(event) {
    let assistance = "hidden";
    if (event.date < data.currentDate) {
        assistance = "";
    }
    return `
    <div class="card mb-3">
        <div class="d-flex justify-content-center align-items-center p-1">
            <span class="fs-2">${event.place}</span>
        </div>
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title fs-1">${event.name}</h5> <span class="fs-4">Date: ${event.date}</span>
                </div>                
                <p class="card-text"><small class="text-muted fs-3">${event.category}</small></p>
                <p class="card-text fs-4">${event.description}</p>
                <div class="d-flex justify-content-center align-items-center">
                <span class="px-3">Price: ${event.price}</span>
                <span class="px-3">Capacity: ${event.capacity}</span>
                <span ${assistance} class="px-3">Assistance: ${event.assistance}</span>
                </div>
            </div>
        </div>
    `
}