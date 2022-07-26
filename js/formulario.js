//finalizar compra y llenar formulario 

const mensaje= document.getElementById("finalizandoCompra");
mensaje.innerHTML = "Tu pedido está casi listo !!";

//llenar formulario de envío
let formulario = document.getElementById("formularioCompra");
const finalCompra = ()=>{
    formulario.innerHTML = "";
    const datos= document.createElement("div");
    datos.className = "formu";
    let datosformu= `<form action=" "method="post">
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
    datos.innerHTML=datosformu;             
    formulario.appendChild(datos);
};
 
const mensajeFinal = ()=>{
    
    const cliente=document.getElementById("nombre").value;
    const direccion= document.getElementById("direccion").value;
    let formulario = document.getElementById("formularioCompra");
    console.log(formulario);
    formulario.innerHTML= `<div class=" despacho" > 
                           ${cliente} El despacho a ${direccion} Tiene un valor de $5.500 
                           <div class="botonesDespacho" id="confirmacion">
                           <button type="button" id="despachar" class="btn" onClick="confirmar()" >Confirmar despacho </button>
                           <button type="reset" class="btn btn-warning" onClick="cancelar()">cancelar compra</button>
                           </div>
                           </div>`;
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