const footer = document.querySelector('footer');

const createFooter = () => {

    footer.innerHTML =`
    
    <div class="m-0 p-0 fs-4 bg-black text-light text-center">
    &copy; 2023 Mi Página Web. Todos los derechos reservados.
        <div class="d-flex justify-content-center ">
        
                            <a class="nav-link active text-light p-2" aria-current="page" href=".../index.html">Inicio</a>
                        
                            <a class="nav-link text-light p-2" href="../About/aboutme.html">Acerca de</a>
                        
        </div>
    </div>
    `;
};

export default createFooter;