import { getFromData } from "./utils.js";
import db from '../fakeDb/db.json' assert {type: 'json'};

const registro = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name_Reg');
    const emailInput = document.getElementById('email_Reg');
    const passwordInput = document.getElementById('password_Reg');
    
    const formData = getFromData(e);
    const userExist = db.users.find((user) => user.email === formData.email_IS);

    emailInput.classList.remove('is-invalid');


    if (!userExist) {
        emailInput.classList.add('is-invalid');
    }
    

};

document.getElementById("userFormRegistro").addEventListener("submit",registro);

