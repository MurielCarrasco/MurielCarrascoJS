//Agregando DOM al proyecto / lo hice en otra página para que quedara mas prolijo

//Aquí agrego un titulo de bienvenida
let titulo = document.getElementById("titulo");
titulo.innerText="TUS ACCESORIOS FAVORITOS LOS ENCUENTRAS AQUÍ !";


//Ejemplo Aplicado de Plantillas Litrales e InnerHTMl para crear 4 tarjetas de productos
let boton= document.getElementById("boton_ver"); // boton agregado para dar funcionalidad de Eventos
const productosExtra = [{id:1 ,nombre:"Conjunto tonos Amarillo",          imagen:"Conjunto-Amarillo.jpg",        precio: 6900},
                        {id:2 ,nombre:"Conjunto Completo Rosado",         imagen:"Conjunto-Completo-Rosa.jpg",   precio: 5900},
                        {id:3 ,nombre:"Cintillo Negro Decorado",          imagen:"Cintillo-Negro.jpg",           precio: 5900},
                        {id:4 ,nombre:"Conjunto pinsas Formas y Colores", imagen:"Pinsas-Colores.jpg",           precio: 6900},
                        {id:5 ,nombre:"Conjunto pinsas Tonos Rosados",    imagen:"Pinsas-Niña-Rosa-Celeste.jpg", precio: 6900}
                ];
boton.addEventListener("click", function(){
 for (const productoExtra of productosExtra) {
        const contenedor = document.getElementById("tarjetasExtra");
        /* contenedor.scrollLeft += 30; */
        let tarjetasExtra = document.createElement("div");
        tarjetasExtra.className= "col-md-2";
        tarjetasExtra.innerHTML = `<div class="card " >
                                <img src="./multimedia/${productoExtra.imagen}" class="card-img-top" alt="ConjuntoMorado"></img>
                                <div class="card-body">
                                <h5 class="card-title">ID: ${productoExtra.id}</h5>
                                <p class="card-text"> Producto: ${productoExtra.nombre}</p>
                                <p class="card-text"> Valor $ ${productoExtra.precio}</p>
                                <a href="#" class="btn">Agregar</a>
                                </div>
                             </div>`;
contenedor.appendChild(tarjetasExtra);
}      
});
      


