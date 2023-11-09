//Transicion de formulario inicio de sesion y registro
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.getElementById("email_IS").value="";
    document.getElementById("password_IS").value="";
    

});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.getElementById("name_Reg").value="";
    document.getElementById("email_Reg").value="";
    document.getElementById("password_Reg").value="";
    
    
});


