
 let productos =[];

 fetch("./data.json")
   .then((cardP) => cardP.json())
   .then((data) => {
     tablaDatos(data);
   });
   
  const tablaDatos = (data) => {
        productos = data;
        const detalle = document.getElementById("tarjetas");      
        productos.forEach((producto, catalogo)=>{
               let tarjeta = document.createElement("div");
               tarjeta.classList=("card","col-sm-12","col-lg-3");
               tarjeta.innerHTML= `<img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
                      <div class="card-body">
                      <h5 class="card-title">${producto.descripcion}</h5>
                      <p class="card-text"> Valor $ ${producto.precio}</p>
                      <a href="#" class="btn " onClick="comprarProducto(${catalogo})" >Agregar al carro</a>
                      </div>`;
               detalle.appendChild(tarjeta);
         });
     };
   


let carro=[];
const comprarProducto= (catalogo) =>{                              //con esta función verifico si el nuevo producto agregado ya está en el carrito
    const catalogoCarro= carro.findIndex((elemento)=>{
        return elemento.id === productos[catalogo].id
    });
    if(catalogoCarro === -1){                            //aquí me está diciendo que el producto no está , entonces le digo que lo agregue 
        let agregarnuevo = productos[catalogo];
        agregarnuevo.cantidad = 1;
        carro.push(agregarnuevo);
        bosquejoCarro();
        
    }else {                                               // aquí le digo: Si hay el producto está en el carro suma 1 
       carro[catalogoCarro].cantidad +=1;
       infoStorage(carro);
       bosquejoCarro();
    };
    Toastify({
        text: "Producto agregado al carro!",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        className: 'btn'
    }).showToast();
};

let armarCarro= document.getElementById("carro");        // armando el carrito de compra 
let total = 0;
const bosquejoCarro = () => {
    armarCarro.innerHTML="";
    armarCarro.className = "carro";
    if (carro.length > 0 ){
        carro.forEach((producto, catalogo) =>{
            total = total + producto.precio * producto.cantidad ;
            let carroDetalle = document.createElement("div");
            carroDetalle.className = "producto-carro"
            carroDetalle.innerHTML = `<img src="${producto.imagen}" class="img-carro">
                                      <div class="contenido-carro"> ${producto.descripcion} </div>
                                      <div class="contenido-carro"> Cantidad: ${producto.cantidad} </div>
                                      <div class="contenido-carro"> Precio: $ ${producto.precio} </div>
                                      <div class="contenido-carro"> Sub-Total: $ ${producto.precio * producto.cantidad} </div>
                                      <button class="btn" id="remove-product" onClick="eliminarProducto(${catalogo})"> Eliminar Producto </button>`;
            armarCarro.appendChild(carroDetalle);
        });
        const totalCompra = document.createElement("div");
        totalCompra.className="totalCompra";
        totalCompra.innerHTML=`<div class="total"> TOTAL A PAGAR $ ${total}</div>
                            <button class="btn Finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR LA COMPRA </button>`;
        armarCarro.appendChild(totalCompra);  

    } else {
        armarCarro.innerHTML = `<h1 class="carrito__titulo"> No hay productos seleccionados, por favor agregue productos a su compra. </h1>`;
    };                  
};

const eliminarProducto = (catalogo) => {
    carro.splice(catalogo, 1);
    infoStorage(carro);
    bosquejoCarro();
};

const infoStorage = (carro) => {
    localStorage.setItem("carro", JSON.stringify(carro));
};

if (localStorage.getItem("carro")) {
    carro = JSON.parse(localStorage.getItem("carro"));
    bosquejoCarro();
  }
//ESTA FUNCION DE FINALIZAR COMPRA Y LLENAR FORMULARIO ENVIARLA DESPUÉS A OTRA PÁGINA 
const finalizarCompra= ()=>{
    const total= document.getElementsByClassName("totalCompra")[0].innerHTML;       //llamo a una función mediante una clase que cree arriba
    armarCarro.innerHTML="";                                                        // Esto hace que desaparezca el carro para que aparezca el mensaje siguiente
    const compraConcretada=`<div class="compra-concretada">
                            <p class=""> Estás a un paso de finalizar tu compra, Completa el formulario con tus datos para que los productos sean despachados.</p>
                            <button class= "btn" id="formulario" onClick="dibujarFormulario()"> FORMULARIO DE ENVÍO </button>
                            </div>`;
    armarCarro.innerHTML = compraConcretada;
};
//llenar formulario de envío
const dibujarFormulario = () => {
    armarCarro.innerHTML = "";
    const datosformu= `
                    <form action=" "method="post" class="formu">
                    <h2> DATOS PARA EL ENVÍO </h2>
                    <label for="Nombre">Nombre</label>
                    <input type="text" name="Nombre" id="nombre" class="form-control">
                    <label for="Apellido">Apellido</label>
                    <input type="text" name="Apellido" class="form-control" id="apellido">
                    <label for="Dirección">Dirección</label>
                    <input type="text" name="Dirección" class="form-control" id="direccion">
                    <label for="Comuna">Comuna</label>
                    <input type="text" name="Comuna" class="form-control" id="comuna">
                    <label for="Región">Región</label>
                    <input type="text" name="Región" class="form-control" id="region">
                    <label for="comentario">Comentario (opcional)</label>
                    <textarea name="comentario"></textarea>

                    <button type="button" class="btn envio form-control" onClick="mensajeFinal()"> Confirmar</button>

                 </form> `;
    armarCarro.innerHTML = datosformu;             
};
 
const mensajeFinal = ()=>{
    
    const cliente = document.getElementById("nombre").value;
    const direccion= document.getElementById("direccion").value;
    armarCarro.innerHTML = "";
    let mensajeDespedida = `<div class="mensaje-Despedida" >MUCHAS GRACIAS POR TU COMPRA</div>`;
    armarCarro.innerHTML = mensajeDespedida;
    Swal.fire({
        position: "center",
        icon: "success",
        title: `Gracias ${cliente} por tu compra! Los productos serán despachados en ${direccion} en las próximas 48 horas.`,
        showConfirmButton: true,
        allowOutsideClick: false,
      });
    };

//Desestructuración con los datos entregados por el cliente
function datosCliente (){
     
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let direccion = document.getElementById("direccion");
        
        const cliente = {
            nombre:nombre.value,
            apellido:apellido.value,
            direccion:direccion.value
        };    
    
};

function cliente ({nombre, apellido, direccion}){
    console.log(nombre);
    console.log(apellido);
    console.log(direccion);
};
