import { getFromData } from "./utils.js";
import db from "../fakeDb/db.json" assert {type: "json"};

const showErrorMessage = (message) => {
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert-danger');
    errorAlert.textContent = message;

    const loginForm = document.getElementById('registerForm');
    loginForm.parentNode.insertBefore(errorAlert, loginForm.nextSibling);
};

const registro = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name_register');
    const emailInput = document.getElementById('email_register');
    const passwordInput = document.getElementById('password_register');
    const errorAlert = document.getElementById('errorAlert');

    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    errorAlert.style.display = 'none';

    const formData = getFromData(e);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email_register)) {
        emailInput.classList.add('is-invalid');
        errorAlert.style.display = 'block';
        errorAlert.textContent = 'Correo electrónico no válido.';
        return;
    }

    if (formData.name_register.length < 10) {
        nameInput.classList.add('is-invalid');
        showErrorMessage('El nombre y apellido deben tener al menos 10 caracteres.');
        return;
    }

    if (formData.password_register.length < 8) {
        passwordInput.classList.add('is-invalid');
        showErrorMessage('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    const lowercaseEmail = formData.email_register.toLowerCase();

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExistsLocalStorage = users.find((user) => user.email === lowercaseEmail);

    const userExistsDB = db.users.find((user) => user.correo === lowercaseEmail);

    if (userExistsLocalStorage || userExistsDB) {
        emailInput.classList.add('is-invalid');
        errorAlert.style.display = 'block';
        errorAlert.textContent = 'El usuario ya existe. Por favor, inicia sesión.';
        return;
    }

    const newUser = {
        nombre: formData.name_register,
        rol: "usuario",
        email: lowercaseEmail,
        password: formData.password_register,
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    successAlert.style.display = 'block';
};

document.getElementById("registerForm").addEventListener("submit", registro);

