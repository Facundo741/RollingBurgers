import { getFormData } from './utils.js';
import db from '../fakeDb/db.json' assert {type: 'json'};

const localStorageUsers = JSON.parse(localStorage.getItem('users')) || [];

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

    const formData = getFormData(e);

    const dbUser = db.users.find((user) => user.correo === formData.email_IniciarSesion);

    
    let user = localStorageUsers.find((user) => user.email === formData.email_IniciarSesion);

    if (!dbUser && !user) {
        emailInput.classList.add('is-invalid');
        showErrorMessage('El usuario no existe.');
        return;
    }

    if (dbUser && dbUser.password === formData.password_IniciarSesion) {
        const userJson = JSON.stringify(dbUser);
        localStorage.setItem('userLog', userJson);
        window.location.href = '../index.html';
    } else if (user && user.password === formData.password_IniciarSesion) {
        const userJson = JSON.stringify(user);
        localStorage.setItem('userLog', userJson);
        window.location.href = '../index.html';
    } else {
        passwordInput.classList.add('is-invalid');
        showErrorMessage('La contraseña es incorrecta.');
    }
};

document.getElementById('userFormLogin').addEventListener('submit', login);
