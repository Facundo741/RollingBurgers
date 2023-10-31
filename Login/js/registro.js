//Tomar inputs del registro

document.getElementById("userFormRegistro").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nombreApe = document.getElementById("nombreApe").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Nombre y Apellido:", nombreApe);
    console.log("Correo Electrónico:", email);
    console.log("Contraseña:", password);

    
    limpiarCampos();


});

function limpiarCampos(nombre, email, password) {
    
    document.getElementById("nombreApe").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";



};