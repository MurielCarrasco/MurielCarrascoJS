
let armarCarro= document.getElementById("carro");        // armando el carrito de compra 
let total = 0;
const bosquejoCarro= ()=>{
    armarCarro.className = "carro";
    armarCarro.innerHTML="";
    if(carro.length > 0 ){
        carro.forEach((producto, catalogo) =>{
            total = total + producto.precio * producto.cantidad ;
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
        <a href="./formulario.html" class="btn Finalizar"> Finalizar Compra</a>`;
        armarCarro.appendChild(totalCompra);  

    } else {
        armarCarro.classList.remove("carro");
    };                  
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
       bosquejoCarro()
    };
};

const eliminarProducto= (catalogo)=>{
    carro.splice(catalogo, 1);
    infoStorage(carro);
    bosquejoCarro()
};

//ESTA FUNCION DE FINALIZAR COMPRA Y LLENAR FORMULARIO ENVIARLA DESPUÉS A OTRA PÁGINA 
const FinalizarCompra= ()=>{
    const total= document.getElementsByClassName("totalCompra")[0].innerHTML;       //llamo a una función mediante una clase que cree arriba
    armarCarro.innerHTML="";                                                        // Esto hace que desaparezca el carro para que aparezca el mensaje siguiente
    const compraConcretada=`<div class="compra-concretada">
                            <p class="textoCompra"> Estás a un paso de finalizar tu compra! </p>
                            <a href="./formulario.html" class="btn Finalizar"> Finalizar Compra</a>`;
    armarCarro.innerHTML=compraConcretada;
};


const infoStorage = (carro)=>{
    localStorage.setItem("carro",JSON.stringify(carro))
};
