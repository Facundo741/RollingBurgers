import { getFromData } from "./utils.js";
import db from "../fakeDb/db.json" assert {type: "json"};



const registro = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name_Reg');
    const emailInput = document.getElementById('email_Reg');
    const passwordInput = document.getElementById('password_Reg');
    
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const formData = getFromData(e);

    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExistInList = users.find((user) => user.email === formData.email_Registro);

    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    if (userExistInList) {
        emailInput.classList.add('is-invalid');
        errorAlert.style.display = 'block';
        return;
    }

    
    const newUser = {
        nombre: formData.nombreApe_Registro,
        rol: "usuario",
        email: formData.email_Registro,
        password: formData.password_Registro
    };

    users.push(newUser);

    
    localStorage.setItem('users', JSON.stringify(users));

    
    successAlert.style.display = 'block';
};

document.getElementById("userFormRegistro").addEventListener("submit", registro);
