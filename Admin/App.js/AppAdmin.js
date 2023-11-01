function Validaciones(){
    let codigo = document.getElementById("exampleCode").value;
    let Nombre = document.getElementById("exampleNombre").value;
    let Precio = document.getElementById("examplePrecio").value;
    let Categoria = document.getElementById("exampleCategoria").value;
    let Imagenes = document.getElementById("exampleImg").value;
    let Descripcion = document.getElementById("exampleDescripción").value;
    let Stock = document.getElementById("exampleStock").value;

    if (
        codigo.trim() === "" ||
        Nombre.trim() === "" ||
        Precio.trim() === "" ||
        Categoria.trim() === "" ||
        Imagenes.trim() === "" ||
        Descripcion.trim() === "" ||
        Stock.trim() === ""
    ) {
        alert("Todos los campos son obligatorios. Por favor, llénelos todos.");
        return false;
    }
    return true;
}

function leer(){

    let listar;

    if (localStorage.getItem('listar') == null){
        listar = [];

    }else{
        listar = JSON.parse(localStorage.getItem('listar'));
    }

    let html = "";

    listar.forEach(function (element ,index ) {
        html += "<tr>";
        html += "<td>" + element.codigo + "</td>";
        html += "<td>" + element.Nombre + "</td>";
        html += "<td>" + element.Precio + "</td>";
        html += "<td>" + element.Categoria + "</td>";
        html += '<td><img src="' + element.Imagenes + '" alt="Imagen" style="max-height: 50px"></td>';
        html += "<td>" + element.Descripcion + "</td>";
        html += "<td>" + element.Stock + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar</button> <button onclick="editData(' + index + ')" class="btn btn-warning">Editar</button>';
        html += "<tr>";
    });

    document.querySelector('#Tabledatos').innerHTML = html;
}

    leer();

function addData(){
    if(Validaciones() == true){

        let codigo = document.getElementById("exampleCode").value;
        let Nombre = document.getElementById("exampleNombre").value;
        let Precio = document.getElementById("examplePrecio").value;
        let Categoria = document.getElementById("exampleCategoria").value;
        let Imagenes = document.getElementById("exampleImg").value;
        let Descripcion = document.getElementById("exampleDescripción").value;
        let Stock = document.getElementById("exampleStock").value;

        let listar;

        if(localStorage.getItem('listar') == null){
            listar = []
        }else{
            listar = JSON.parse(localStorage.getItem('listar'));
        }
        listar.push({
            codigo: codigo,
            Nombre: Nombre,
            Precio: Precio,
            Categoria: Categoria,
            Imagenes: Imagenes,
            Descripcion: Descripcion,
            Stock: Stock
        });

        localStorage.setItem('listar', JSON.stringify(listar));

        leer();
        document.getElementById('exampleCode').value="";
        document.getElementById('exampleNombre').value ="";
        document.getElementById('examplePrecio').value ="";
        document.getElementById('exampleCategoria').value ="";
        document.getElementById('exampleImg').value ="";
        document.getElementById('exampleDescripción').value ="";
        document.getElementById('exampleStock').value ="";
    }
}


function deleteData(index){
    if (localStorage.getItem('listar') == null){
        listar = [];

    }else{
        listar = JSON.parse(localStorage.getItem('listar'));
    }

    listar.splice(index, 1);
    localStorage.setItem('listar', JSON.stringify(listar));

    leer();
}

function editData(index){
    
    document.getElementById('btnAdd').style.display ='none';
    document.getElementById('upbtnAdd').style.display ='block';

    if (localStorage.getItem('listar') == null){
        listar = [];

    }else{
        listar = JSON.parse(localStorage.getItem('listar'));
    }

        document.getElementById('exampleCode').value= listar[index].codigo;
        document.getElementById('exampleNombre').value = listar[index].Nombre;
        document.getElementById('examplePrecio').value = listar[index].Precio;
        document.getElementById('exampleCategoria').value = listar[index].Categoria;
        document.getElementById('exampleImg').value = listar[index].Imagenes;
        document.getElementById('exampleDescripción').value = listar[index].Descripcion;
        document.getElementById('exampleStock').value = listar[index].Stock;

        document.querySelector('#upbtnAdd').onclick = function (){
            if(Validaciones() == true){
                listar[index].codigo = document.getElementById('exampleCode').value;
                listar[index].Nombre = document.getElementById('exampleNombre').value;
                listar[index].Precio = document.getElementById('examplePrecio').value;
                listar[index].Categoria = document.getElementById('exampleCategoria').value;
                listar[index].Imagenes = document.getElementById('exampleImg').value;
                listar[index].Descripcion = document.getElementById('exampleDescripción').value;
                listar[index].Stock = document.getElementById('exampleStock').value;

                localStorage.setItem('listar', JSON.stringify(listar));
                leer()

                document.getElementById('exampleCode').value="";
                document.getElementById('exampleNombre').value ="";
                document.getElementById('examplePrecio').value ="";
                document.getElementById('exampleCategoria').value ="";
                document.getElementById('exampleImg').value ="";
                document.getElementById('exampleDescripción').value ="";
                document.getElementById('exampleStock').value ="";

                document.getElementById('btnAdd').style.diplay = 'block';
                document.getElementById('upbtnAdd').style.diplay = 'none';

            }
        }

}



