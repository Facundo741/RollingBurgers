function leerprincipal() {
    
    //  const cards = document.getElementById("cards");
    //  cards.innerHTML = '';

     const listar = JSON.parse(localStorage.getItem('listar')) || [];

    // listar.forEach((element, i) => {
    //     const card = document.createElement("div");
    //     card.classList.add("carousel-item");
    //     if (i === 0) {
    //         card.classList.add("active");
    //     }
    //     card.innerHTML = `
    //             <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                     <img src="${element.Imagenes}" alt="Card image" class="card-img-top">
    //                     <div class="card-body">
    //                         <h5 class="card-title">${element.Nombre}</h5>
    //                         <p class="card-text">${element.Descripcion}</p>
    //                         <p>Precio: ${element.Precio}</p>
    //                     </div>
    //                 </div>
    //             </div>   
    //     `;

        
        
    //     cards.appendChild(card);
    // });

    function createCarouselCards(objetos) {
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.innerHTML = ''; // Limpia el contenido previo del carrousel
        for (let i = 0; i < objetos.length; i += 3) {
            const cardGroup = document.createElement('div');
            cardGroup.classList.add('carousel-item');
            if (i === 0) {
                cardGroup.classList.add('active');
            }
    
            const row = document.createElement('div');
            row.classList.add('row');
    
            for (let j = i; j < i + 3 && j < objetos.length; j++) {
                const objeto = objetos[j];
                const col = document.createElement('div');
                col.classList.add('col-md-4', 'mb-3');
    
                const card = document.createElement('div');
                card.classList.add('card');
    
                card.innerHTML = `
                    <img src="${objeto.Imagenes}" alt="Card image" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${objeto.Nombre}</h5>
                        <p class="card-text">${objeto.Descripcion}</p>
                        <p>Precio: ${objeto.Precio}</p>
                    </div>
                `;
    
                col.appendChild(card);
                row.appendChild(col);
            }
    
            cardGroup.appendChild(row);
            carouselInner.appendChild(cardGroup);
        }
    }
    
    // Llama a la función para crear las tarjetas
    createCarouselCards(listar);
    
}


leerprincipal();