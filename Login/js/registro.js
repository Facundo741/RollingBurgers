import { getFromData } from "./utils.js";
import db from '../fakeDb/db.json' assert {type: 'json'};



const registro = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name_Reg');
    const emailInput = document.getElementById('email_Reg');
    const passwordInput = document.getElementById('password_Reg');
    
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const formData = getFromData(e);
    const userExist = db.users.find((user) => user.email === formData.email_IS);

    


    if (!userExist) {
        emailInput.classList.add('is-invalid');
        return;
    }
    

};

document.getElementById("userFormRegistro").addEventListener("submit",registro);

