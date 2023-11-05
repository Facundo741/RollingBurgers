import { getFromData } from './utils.js'; 
import db from '../fakeDb/db.json' assert {type: 'json'}; 


const login = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email_IS');
    const passwordInput = document.getElementById('password_IS');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const formData = getFromData(e);
    const userExist = db.users.find((user) => user.email === formData.email_IS);

    

    if (!userExist) {
        emailInput.classList.add('is-invalid');
        return;
    }
    if (formData.password_IS !== userExist.password) {
        passwordInput.classList.add('is-invalid');
        return;
    }

};



document.getElementById("userFormLogin").addEventListener("submit", login);
