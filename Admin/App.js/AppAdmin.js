function Validaciones() {
    const fields = ["exampleCode", "exampleNombre", "examplePrecio", "exampleCategoria", "exampleImg", "exampleDescripción", "exampleStock"];
    for (const field of fields) {
        const value = document.getElementById(field).value;
        if (value.trim() === "") {
            alert("Todos los campos son obligatorios. Por favor, llénelos todos.");
            return false;
        }
    }
    return true;
}

function leer(e) {
    e.preventDefault();
    let listar = JSON.parse(localStorage.getItem('listar')) || [];
    const tableBody = document.getElementById('Tabledatos');
    tableBody.innerHTML = '';

    listar.forEach((element, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="text-center">${element.codigo}</td>
            <td class="text-center">${element.Nombre}</td>
            <td class="text-center">${element.Precio}</td>
            <td class="text-center">${element.Categoria}</td>
            <td ><img src="${element.Imagenes}" alt="Imagen" style="max-height: 50px"></td>
            <td class="text-center">${element.Descripcion}</td>
            <td class="text-center">${element.Stock}</td>
            <td class="text-center">
                <button onclick="deleteData(${index})" class="btn btn-danger">Eliminar</button>
                <button onclick="editData(${index})" class="btn btn-warning">Editar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    // Llama a leerprincipal después de actualizar los datos
    leerprincipal();
}

function addData() {
    if (Validaciones()) {
        const newItem = {
            codigo: document.getElementById("exampleCode").value,
            Nombre: document.getElementById("exampleNombre").value,
            Precio: document.getElementById("examplePrecio").value,
            Categoria: document.getElementById("exampleCategoria").value,
            Imagenes: document.getElementById("exampleImg").value,
            Descripcion: document.getElementById("exampleDescripción").value,
            Stock: document.getElementById("exampleStock").value
        };

        let listar = JSON.parse(localStorage.getItem('listar')) || [];
        listar.push(newItem);

        // Actualiza la información en el almacenamiento local
        localStorage.setItem('listar', JSON.stringify(listar));

        leer();
    }
}

function deleteData(index) {
    let listar = JSON.parse(localStorage.getItem('listar')) || [];

    // Elimina el elemento del array
    listar.splice(index, 1);

    // Actualiza la información en el almacenamiento local
    localStorage.setItem('listar', JSON.stringify(listar));

    // Actualiza la vista
    leer();
}

function editData(index) {
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('upbtnAdd').style.display = 'block';

    let listar = JSON.parse(localStorage.getItem('listar')) || [];
    const item = listar[index];

    const fields = ["exampleCode", "exampleNombre", "examplePrecio", "exampleCategoria", "exampleImg", "exampleDescripción", "exampleStock"];

    for (const field of fields) {
        document.getElementById(field).value = item[field.substring(7)];
    }

    document.querySelector('#upbtnAdd').onclick = function () {
        if (Validaciones()) {
            for (const field of fields) {
                item[field.substring(7)] = document.getElementById(field).value;
                document.getElementById(field).value = "";
            }

            // Actualiza la información en el almacenamiento local
            localStorage.setItem('listar', JSON.stringify(listar));

            leer();

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('upbtnAdd').style.display = 'none';
        }
    }
}

// Resto de tu código

function leerprincipal() {
    const cards = document.getElementById("cards");
    cards.innerHTML = '';

    const listar = JSON.parse(localStorage.getItem('listar')) || [];

    listar.forEach((element, i) => {
        const card = document.createElement("div");
        card.classList.add("carousel-item");
        if (i === 0) {
            card.classList.add("active");
        }

        card.innerHTML = `
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${element.Imagenes}" alt="Card image" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.Nombre}</h5>
                            <p class="card-text">${element.Descripcion}</p>
                            <p>Precio: ${element.Precio}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        cards.appendChild(card);
    });
}
// Llama a leer para mostrar los datos en la tabla
leer();
leerprincipal();

