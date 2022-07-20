//Creando carrito de compra 

const productos =[{id:1 ,descripcion:"Conjunto tonos Rosado",     precio: 6900, imagen:"../multimedia/Conjunto-Rosado.jpg"},
				  {id:2 ,descripcion:"Conjunto tonos Morado",     precio: 6900, imagen:"../multimedia/Conjunto-Morado.jpg"},
				  {id:3 ,descripcion:"Conjunto tonos Lila",       precio: 5900, imagen:"../multimedia/Conjunto-Lila.jpg"},
				  {id:4 ,descripcion:"Conjunto Cintillo Minnie",  precio: 6900, imagen:"../multimedia/Cintillo-Minnie.jpg"},
				  {id:5 ,descripcion:"Conjunto Cintillo Rosete",  precio: 6900, imagen:"../multimedia/Cintillo-Rosete.jpg"},
				  {id:6 ,descripcion:"Conjunto pinsas Colores",   precio: 4900, imagen:"../multimedia/Pinsas-Colores.jpg"},
				  {id:7 ,descripcion:"Conjunto pinsas Conejo",    precio: 3900, imagen:"../multimedia/Pinsas-Conejo-Rosado.jpg"},
				  {id:8 ,descripcion:"Conjunto pinsas Doradas",   precio: 4990, imagen:"../multimedia/Pinsas-doradas.jpg"},
];

const detalle= document.getElementById("tarjetas");       //creo las tarjetas de los productos 
productos.forEach((producto, catalogo)=>{
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card","col-sm-12","col-lg-3");
    let index= `<img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
               <div class="card-body">
                <h5 class="card-title">${producto.descripcion}</h5>
                <p class="card-text">$ ${producto.precio}</p>
                <a href="#" class="btn" onClick="comprar(${catalogo})" >Agregar al carro</a>
               </div>`
    tarjeta.innerHTML=index;
 detalle.appendChild(tarjeta);
});

let armarCarro= document.getElementById("carro");        // armando el carrito de compra 
let total = 0;
const bosquejoCarro= ()=>{
    armarCarro.className = "carro";
    armarCarro.innerHTML="";
    if(carro.length > 0 ){
        carro.forEach((producto, catalogo) =>{
            total = total + producto.precio + producto.cantidad ;
            const carroDetalle=document.createElement("div");
            carroDetalle.className = "producto-carro"
            carroDetalle.innerHTML = `<img src="${producto.imagen}" class="img-carro">
                                      <div class="contenido-carro"> ${producto.descripcion} </div>
                                      <div class="contenido-carro"> Cantidad: ${producto.cantidad} </div>
                                      <div class="contenido-carro"> Precio: $ ${producto.precio} </div>
                                      <div class="contenido-carro"> Sub-Total: $ ${producto.precio * producto.cantidad} </div>
                                      <button class="btn" id="remove-product" onClick="eliminarProducto(${catalogo})"> Eliminar Producto </button>`;
            armarCarro.appendChild(carroDetalle);
        });
        const totalCompra= document.createElement("div");
        totalCompra.className="totalCompra";
        totalCompra.innerHTML=`<div class="total"> TOTAL A PAGAR $ ${total}</div>
                            <button class="btn Finalizar" id="finalizar" onClick="FinalizarCompra()"> FINALIZAR COMPRA </button>`;
        armarCarro.appendChild(totalCompra);   
    } else {
        armarCarro.classList.remove("carro");
    }                  
};

let carro=[];
const comprar=(catalogo)=>{                              //con esta función verifico si el nuevo producto agregado ya está en el carrito
    const catalogoCarro= carro.findIndex((elemento)=>{
        return elemento.id === productos[catalogo].id
    });
    if(catalogoCarro === -1){                            //aquí me está diciendo que el producto no está , entonces le digo que lo agregue 
        const agregarnuevo=productos[catalogo];
        agregarnuevo.cantidad = 1;
        carro.push(agregarnuevo);
        infoStorage(carro);
        bosquejoCarro()
    }else {                                               // aquí le digo: Si hay el producto está en el carro suma 1 
       carro[catalogoCarro].cantidad +=1;
       infoStorage(carro);
       armarCarro();
    };
};

const eliminarProducto= (catalogo)=>{
    carro.splice(catalogo, 1);
    infoStorage(carro);
    armarCarro();
};

//ESTA FUNCION DE FINALIZAR COMPRA Y LLENAR FORMULARIO ENVIARLA DESPUÉS A OTRA PÁGINA 
const FinalizarCompra= ()=>{
    const total= document.getElementsByClassName("totalCompra")[0].innerHTML;       //llamo a una función mediante una clase que cree arriba
    armarCarro.innerHTML="";                                                        // Esto hace que desaparezca el carro para que aparezca el mensaje siguiente
    const compraConcretada=`<div class="compra-concretada">
                            <p class="textoCompra"> Estás a un paso de finalizar tu compra! </p>
                            <button class="btn Finalizar"><a href="./compra.html"> Finalizar Compra </button>
                           
                            <div class="datosCliente">
                                <p class="datos-envío"> Ingrese Los Datos de envío </p>
                                <button class="btn formulario" id="formulario" onClick="crearFormulario()"> FORMULARIO DE ENVÍO </button>
                            </div>`;
    armarCarro.innerHTML=compraConcretada;
};

const crearFormulario= ()=>{
    armarCarro.innerHTML="";
    const formulario=``
}

//aquí termina el formulario 

const infoStorage = (carro)=>{
    localStorage.setItem("carro",JSON.stringify(carro))
}