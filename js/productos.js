 //Productos tarjetas para carrito
 const productos =[{id:1 ,descripcion:"Conjunto tonos Rosado",     precio: 6900, imagen:"./multimedia/Conjunto-Rosado.jpg"},
                   {id:2 ,descripcion:"Conjunto tonos Morado",     precio: 6900, imagen:"./multimedia/Conjunto-Morado.jpg"},
                   {id:3 ,descripcion:"Conjunto tonos Lila",       precio: 5900, imagen:"./multimedia/Conjunto-Lila.jpg"},
                   {id:4 ,descripcion:"Conjunto Cintillo Minnie",  precio: 6900, imagen:"./multimedia/Cintillo-Minnie.jpg"},
                   {id:5 ,descripcion:"Conjunto Cintillo Rosete",  precio: 6900, imagen:"./multimedia/Cintillo-Rosete.jpg"},
                   {id:6 ,descripcion:"Conjunto pinsas Colores",   precio: 4900, imagen:"./multimedia/Pinsas-Colores.jpg"},
                   {id:7 ,descripcion:"Conjunto pinsas Conejo",    precio: 3900, imagen:"./multimedia/Pinsas-Conejo-Rosado.jpg"},
                   {id:8 ,descripcion:"Conjunto pinsas Doradas",   precio: 4990, imagen:"./multimedia/Pinsas-doradas.jpg"},
];

function obtenerProductoLS(){
return JSON.parse(localStorage.getItem("productos")) || [];
} ;

function guardarproductosLS(productos){
localStorage.setItem("productos", JSON.stringify(productos))
};

guardarproductosLS(productos);


const detalle= document.getElementById("tarjetas");       //creo las tarjetas de los productos 
productos.forEach((producto, catalogo)=>{
       let tarjeta = document.createElement("div");
       tarjeta.classList.add("card","col-sm-12","col-lg-3");
       let index= `<img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
              <div class="card-body">
              <h5 class="card-title">${producto.descripcion}</h5>
              <p class="card-text"> Valor $ ${producto.precio}</p>
              <a href="#" class="btn" onClick="comprar(${catalogo})" >Agregar al carro</a>
              </div>`
       tarjeta.innerHTML=index;
       detalle.appendChild(tarjeta);
});




//Productos tarjetas extras

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