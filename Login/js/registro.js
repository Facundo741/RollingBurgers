// Tomar inputs del registro
document.getElementById("userFormRegistro").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name_Reg").value;
    const email_Reg = document.getElementById("email_Reg").value;
    const password_Reg = document.getElementById("password_Reg").value;

    console.log("Nombre y Apellido:", name);
    console.log("Correo Electrónico:", email_Reg);
    console.log("Contraseña:", password_Reg);

    limpiar();
});

function limpiar(name, email_Reg, password_Reg) {
    document.getElementById("name_Reg").value = "";
    document.getElementById("email_Reg").value = "";
    document.getElementById("password_Reg").value = "";
}


