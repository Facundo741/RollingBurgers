import { getFromData } from './utils.js';
import db from '../fakeDb/db.json' assert {type: "json"};

const users = db.users;

function showErrorMessage(message) {
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert-danger');
    errorAlert.textContent = message;
    const loginForm = document.getElementById('userFormLogin');
    loginForm.parentNode.insertBefore(errorAlert, loginForm.nextSibling);
}

const login = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email_IS');
    const passwordInput = document.getElementById('password_IS');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const formData = new FormData(document.getElementById('userFormLogin'));
    const emailInputValue = formData.get('email_IniciarSesion');
    const passwordInputValue = formData.get('password_IniciarSesion');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailInputValue)) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('Correo electrónico no válido.');
        return;
    }

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExist = users.find((user) => user.email === emailInputValue);

    if (!userExist) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('El usuario no existe.');
        return;
    }

    if (userExist.password === passwordInputValue) {
        window.location.href = '../Principal/index.html'; 
    } else {
        passwordInput.classList.add('is-invalid');
        showErrorMessage('La contraseña es incorrecta.');
    }
};

document.getElementById('userFormLogin').addEventListener('submit', login);
