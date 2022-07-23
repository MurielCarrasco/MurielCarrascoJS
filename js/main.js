// nav
const navegador = document.getElementById("navegador");
let nav= document.createElement("nav");
nav.classList="navbar navbar-light  fixed-top";
nav.innerHTML = `
                 <div class="container-fluid">
                    <a class="navbar-brand" href="#">TU TIENDITA DE ACCESORIOS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Conócenos 
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                <li><a class="dropdown-item" href="#">Quines Somos</a></li>
                                <li><a class="dropdown-item" href="#">Nuestra Historia</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                    </div>
                </div>
            `;
navegador.appendChild(nav);


//Titulo de bienvenida
let titulo = document.getElementById("titulo");
titulo.innerText="TUS ACCESORIOS FAVORITOS LOS ENCUENTRAS AQUÍ !";
