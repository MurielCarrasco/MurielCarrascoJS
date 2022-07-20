//finalizar compra y llenar formulario 

const mensaje= document.getElementById("finalizandoCompra");
mensaje.innerHTML = "Tu pedido está casi listo !!";

//llenar formulario de envío
let formulario = document.getElementById("finalizandoCompra")
const finalizarCompra = ()=>{
    formulario.className = "form";
    formulario = document.createElement("div");
    formulario.innerHTML= `<form action=" "method="post">
                    <label for="Nombre">Nombre</label>
                    <input type="text" name="Nombre" id="nombre">
                    <label for="Apellido">Apellido</label>
                    <input type="text" name="Apellido" id="apellido">
                    <label for="Dirección">Dirección</label>
                    <input type="text" name="Dirección" id="direccion">
                    <label for="Comuna">Comuna</label>
                    <input type="text" name="Comuna" id="comuna">
                    <label for="Región">Región</label>
                    <input type="text" name="Región" id="region">
                    <label for="comentario">Comentario (opcional)</label>
                    <textarea name="comentario"></textarea>

                    <button type="button" class="btn envio" onClick="mensajeFinal()"> Confirmar</button>

                 </form> `;
    formulario.appendChild(formulario);
};
 
const mensajeFinal = ()=>{
    const cliente=document.getElementById("nombre").value;
    const direccion= document.getElementById("direccion").value;
    let texto= `<div class="" > Gracias ${cliente} por su compra ! tus productos serán enviados a la brevedad en ${direccion} y esperamos verte pronto de vuelta .`;
 
    formulario.appendChild=texto;
};
 /* 
let comentario = document.getElementById("comentario");
comentario.className="comentario3";
comentario.innerHTML="Gracias por tu compra! Tus productos serán despachados a la brevedad.";
  */