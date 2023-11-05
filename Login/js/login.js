import { getFromData } from './utils.js';
import db from '../fakeDb/db.json' assert {type: "json"};

const users = db.users;

const login = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email_IS');
    const passwordInput = document.getElementById('password_IS');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const formData = getFromData(e);
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email_IniciarSesion)) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('Correo electrónico no válido.');
        return;
    }

    const userExist = users.find((user) => user.correo === formData.email_IniciarSesion);

    if (!userExist) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('El usuario no existe.');
        return;
    }

    const lowercaseEmail = formData.email_IniciarSesion.toLowerCase();
    if (formData.password_IniciarSesion !== userExist.password) {
        passwordInput.classList.add('is-invalid');
        showErrorMessage('La contraseña es incorrecta.');
        return;
    }
    
    window.location.href = '../Principal/index.html';
};

function showErrorMessage(message) {
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert-danger');
    errorAlert.textContent = message;
    const loginForm = document.getElementById('userFormLogin');
    loginForm.parentNode.insertBefore(errorAlert, loginForm.nextSibling);
}

document.getElementById('userFormLogin').addEventListener('submit', login);

