//finalizar compra y llenar formulario 

const mensaje= document.getElementById("finalizandoCompra");
mensaje.innerHTML = "Tu pedido está casi listo !!";

//llenar formulario de envío
let formulario = document.getElementById("formularioCompra");
const finalCompra = ()=>{
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
 
/*
let despacho = document.getElementById("comunas");
let comunas = ["Talagante","Isla de Maipo","El Monte","Peñaflor"];

for (let comuna of comunas){
    var elemento = document.createElement("li");
    elemento.innerHTML = comuna;
    despacho.appendChild(elemento);
};

*/
const mensajeFinal = ()=>{
    
    const cliente=document.getElementById("nombre").value;
    const direccion= document.getElementById("direccion").value;
    let formulario = document.getElementById("formularioCompra");
    console.log(formulario);
    formulario.innerHTML= `<div class="" > Gracias ${cliente} por su compra ! tus productos serán enviados a la brevedad en ${direccion} y esperamos verte pronto de vuelta . </div>`;
 
};
