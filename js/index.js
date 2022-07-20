//Agregando DOM al proyecto / lo hice en otra página para que quedara mas prolijo

//Aqúi agregué elementos al HTML y también Modifico 
let titulo = document.getElementById("titulo");
titulo.innerText="TUS ACCESORIOS FAVORITOS LOS ENCUENTRAS AQUÍ !";

let texto = document.getElementById("texto");
texto.className= "texto1";
texto.innerHTML = "<h2>Estamos procesando tu pedido... </h2>";

/* let comentario = document.getElementById("comentario");
comentario.className="comentario3";
comentario.innerHTML="Gracias por tu compra! Tus productos serán despachados a la brevedad."; */

//interactuación con un array para opciones de despacho 

let despacho = document.getElementById("comunas");
let comunas = ["Talagante","Isla de Maipo","El Monte","Peñaflor"];

for (let comuna of comunas){
    var elemento = document.createElement("li");
    elemento.innerHTML = comuna;
    despacho.appendChild(elemento);
}


//Ejemplo Aplicado de Plantillas Litrales e InnerHTMl para crear 4 tarjetas de productos
let boton= document.getElementById("boton_ver"); // boton agregado para dar funcionalidad de Eventos
const productos = [{id:1 ,nombre:"Conjunto accesorios en tonos Morado", imagen:"ConjuntoMorado.jpg", precio: 9900},
                  {id:2 ,nombre:"Conjunto pinsas en tonos Rosado", imagen:"PinsasRosado.jpg", precio: 25900},
                  {id:3 ,nombre:"Conjunto pinsas Flores", imagen:"PinsasConejo.jpg", precio: 8900},
                  {id:4 ,nombre:"Conjunto pinsas Conejo", imagen:"PinsasFlores.jpg", precio: 9900}
                ];
boton.addEventListener("click", function(){
 for (const producto of productos) {
        const contenedor = document.getElementById("tarjetasExtra");
        let tarjetasExtra = document.createElement("div");
        tarjetasExtra.className= "col-3";
        tarjetasExtra.innerHTML = `<div class="card" >
                                <img src="./multimedia/${producto.imagen}" class="card-img-top" alt="ConjuntoMorado"></img>
                                <div class="card-body">
                                <h5 class="card-title">ID: ${producto.id}</h5>
                                <p class="card-text"> Producto: ${producto.nombre}</p>
                                <p class="card-text">$ ${producto.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar</a>
                                </div>
                             </div>`;
contenedor.appendChild(tarjetasExtra);
}      
});
      


