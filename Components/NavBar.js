const header = document.querySelector('header');

const navbar = () => {

    const user = JSON.parse(localStorage.getItem('userLog'));


    console.log(user);
    return (header.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                
                ${user.rol === "administrador" ?  '<li class="nav-item"><a class="nav-link" href="/Admin/Admin.html">Administracion</a></li>': ' hola'}
                </ul>
            </div>
            </div>
        </nav>
    `);
}

export default navbar;
