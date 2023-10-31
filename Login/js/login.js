//Tomar inputs del login

document.getElementById("userFormLogin").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email_IS").value;
    const password = document.getElementById("password_IS").value;

    console.log("Correo Electrónico:", email);
    console.log("Contraseña:", password);

    limpiarCampos();

});

function limpiarCampos(email, password) {
    document.getElementById("email_IS").value = "";
    document.getElementById("password_IS").value = "";
};