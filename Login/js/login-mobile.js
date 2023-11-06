import { getFromData } from './utils.js';
import db from '../fakeDb/db.json' assert {type: 'json'};

const localStorageUsers = JSON.parse(localStorage.getItem('users')) || [];

function showErrorMessage(message) {
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert-danger');
    errorAlert.textContent = message;
    const loginForm = document.getElementById('loginForm');
    loginForm.parentNode.insertBefore(errorAlert, loginForm.nextSibling);
}

const login = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email_login');
    const passwordInput = document.getElementById('password_login');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const formData = new FormData(document.getElementById('loginForm'));
    const emailInputValue = formData.get('email_login');
    const passwordInputValue = formData.get('password_login');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailInputValue)) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('Correo electrónico no válido.');
        return;
    }

    const localStorageUser = localStorageUsers.find((user) => user.email === emailInputValue);

    if (localStorageUser) {
        if (localStorageUser.password === passwordInputValue) {
            window.location.href = '../Principal/index.html';
        } else {
            passwordInput.classList.add('is-invalid');
            showErrorMessage('La contraseña es incorrecta.');
        }
        return;
    }

    const dbUser = db.users.find((user) => user.correo === emailInputValue);

    if (!dbUser) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('El usuario no existe.');
        return;
    }

    if (dbUser.password === passwordInputValue) {
        window.location.href = '../Principal/index.html';
    } else {
        passwordInput.classList.add('is-invalid');
        showErrorMessage('La contraseña es incorrecta.');
    }
};

document.getElementById('loginForm').addEventListener('submit', login);

