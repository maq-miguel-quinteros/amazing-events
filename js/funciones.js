function generarTarjeta(event) {
    let buyNow = "";
    let assistance = "hidden";
    if (event.date < data.currentDate){
        buyNow = "hidden";
        assistance = "";
    }
    return `
    <div class="card" style="width: 18rem;">
        <div class="d-flex justify-content-between align-items-center p-1">
            <span class="event-date">${event.date}</span><span>${event.place}</span>
        </div>
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">        
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span>Price: ${event.price}</span>
                <a href="#" ${buyNow} class="btn btn-primary buy-now">Buy Now</a><span ${assistance}>Assistance: ${event.assistance}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
            <span>Capacity: ${event.capacity}</span>
        </div>
        </div>
    </div>
    `
}