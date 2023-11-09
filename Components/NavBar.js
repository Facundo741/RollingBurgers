// navbar.js

const header = document.querySelector('header');

const createNavbar = () => {
    const user = JSON.parse(localStorage.getItem('userLog'));

    header.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-black ">
            <div class="container-fluid text-center h-100">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <iconify-icon icon="openmoji:hamburger" width="70" height="70"></iconify-icon>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="/index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="../About/aboutme.html">Acerca de</a>
                        </li>
                        ${user ? '' :
                            '<li class="nav-item "><a class="nav-link text-light " id="iniciarSesionLink" href="../Login/login.html">Iniciar Sesión</a></li>' }
                        ${user ? 
                            '<li class="nav-item"><a class="nav-link text-light" id="cerrarSesionLink" href="/index.html">Cerrar Sesión</a></li>' : ''}
                        
                        ${user && user.rol === "administrador" ? 
                            '<li class="nav-item"><a class="nav-link text-light" href="/Admin/Admin.html">Administracion</a></li>' : ''}
                    </ul>
                </div>
            </div>
        </nav>
    `;
    const cerrarSesionLink = document.getElementById('cerrarSesionLink');
    if (cerrarSesionLink) {
        cerrarSesionLink.addEventListener('click', function (e) {
            e.preventDefault(); 
            localStorage.clear();
            window.location.href = '/index.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', createNavbar);

export default createNavbar;
