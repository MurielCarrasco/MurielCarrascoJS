const productos =[{id:1 ,descripcion:"Conjunto accesorios en tonos Rosado", precio: 9900, imagen:"./multimedia/....."},
				  {id:2 ,descripcion:"Conjunto accesorios en tonos Morado", precio: 9900, imagen:"../multimedia/ConjuntoMorado.jpg"},
				  {id:3 ,descripcion:"Conjunto pinsas en tonos Rosado", precio: 25900, imagen:"../multimedia/PinsasRosado.jpg"},
				  {id:4 ,descripcion:"Conjunto pinsas en tonos Morado", precio: 25900,imagen:"../multimedia/........."},
				  {id:5 ,descripcion:"Conjunto pinsas en tonos Amarillo", precio: 25900, imagen:"../multimedia/........"},
				  {id:6 ,descripcion:"Conjunto pinsas Flores", precio: 8900, imagen:"../multimedia/PinsasFlores.jpg"},
				  {id:7 ,descripcion:"Conjunto pinsas Conejo", precio: 9900, imagen:"../multimedia/PinsasConejo.jpg"},
				  {id:8 ,descripcion:"Conjunto pinsas Mujer", precio: 12990, imagen:"../multimedia/......"},
];

const detalle= document.getElementById("tarjetas");
productos.forEach((producto, catalogo)=>{
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card","col-sm-12","col-lg-3")
    let index= `<img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
               <div class="card-body">
                <h5 class="card-title">${producto.descripcion}</h5>
                <p class="card-text">$ ${producto.precio}</p>
                <a href="#" class="btn btn-primary" onClick="comprar(${catalogo})" >Agregar al carro</a>
               </div>`
    tarjeta.innerHTML=index;
    detalle.appendChild(tarjeta);
});

