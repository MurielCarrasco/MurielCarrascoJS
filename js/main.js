/*let mensaje = "Ingresar Nombre";
let mensaje1 = "Ingresar alguna Opcion:\n 1- Comprar Productos \n 2- Salir";
const carrito = [];
const productos =[{id:1 ,descripcion:"Conjunto accesorios en tonos Rosado", precio: 9900, cantidad:10},
				  {id:2 ,descripcion:"Conjunto accesorios en tonos Morado", precio: 9900, cantidad:10},
				  {id:3 ,descripcion:"Conjunto pinsas en tonos Rosado", precio: 25900, cantidad:10},
				  {id:4 ,descripcion:"Conjunto pinsas en tonos Morado", precio: 25900, cantidad:10},
				  {id:5 ,descripcion:"Conjunto pinsas en tonos Amarillo", precio: 25900, cantidad:10},
				  {id:6 ,descripcion:"Conjunto pinsas Flores", precio: 8900, cantidad:10},
				  {id:7 ,descripcion:"Conjunto pinsas Conejo", precio: 9900, cantidad:10},
				  {id:8 ,descripcion:"Conjunto pinsas Mujer", precio: 12990, cantidad:10},
];
let respuesta;
let nuevoObjeto=[];

class productoCarrito {
	constructor (objeto){
	this.id = objeto.id;
	this.descripcion = objeto.descripcion;
	this.precio = objeto.precio;
	this.cantidad = objeto.cantidad;
	}
	
}         
function validarAlerta (mensaje){
	
    let entrada = prompt(mensaje);
	   while (entrada =="" || entrada == null){		
		   alert("No se cargaron datos");
		   entrada= prompt(mensaje);
	   }
	return respuesta = entrada;	
}

function menuPrincipal (){
	validarAlerta(mensaje1);
	 parseInt(respuesta);  
      
     switch (respuesta){
       case "1":
		menuDeProductos();
	   break;
	   
	   case "2":
		salir(false);
	   break;
	   
	   default:
		alert("opcion mal Ingresada");
		menuPrincipal(); 
	 }
}	

function menuDeProductos() {
	let mostrarProductos="";
	let x=1;
	productos.forEach((i)=> {
	  mostrarProductos+= (i.id + " - " + i.descripcion + " $ " + i.precio + "Cantidad :" + i.cantidad+"\n");
	 x++;
   });
   let menuProductos=(mostrarProductos+(x)+" - Finalizar Compra \n" + (x+1)+ " - Volver");
   validoMenuProductos(menuProductos, x);
}

function validoMenuProductos(menuProductos,x){
	validarAlerta(menuProductos);
	  if (respuesta == x){
          if (carrito.length == 0){
			alert ("carrito Vacio");
			menuDeProductos();
		  }else {
            mostrandoCarrito();
		  }
		  
	  } else if (respuesta == x+1){
		alert ("Eliminando datos del Carrito");
		carrito =[];
		console.log(carrito);
		menuPrincipal();
	  }	else if (respuesta > 0 && respuesta < productos.length+1){
		buscoProductos();
	  }	else {
	  alert ("Opcion mal ingresada")
      menuDeProductos();
	  } 
}		
function buscoProductos(){
	var cantidad=1;
	productos.map(function(producto){
		if (producto.id == respuesta){
			nuevoObjeto ={id:producto.id,
				descripcion:producto.descripcion,
				precio: producto.precio,
				cantidad: cantidad,};
				return nuevoObjeto;
		}	
	});
	
	agregarProductos(nuevoObjeto);
}

function agregarProductos(objeto){
	
	const resultado = carrito.some((elemento) => elemento.id == respuesta);
	if (resultado == false){
		const nuevoCarrito  = new productoCarrito (nuevoObjeto);
		carrito.push (nuevoCarrito);
		alert("agregando productos");
	} else {
		carrito.filter((elemento)=>{
			 if (elemento.id == respuesta) {elemento.cantidad++}
			});
			alert("agregando productos");
			
	}
    menuDeProductos();
}

function mostrandoCarrito(){
	let mostrarCarrito="";
 	let subTotal=0;
 	let Total=0;	
 	carrito.forEach((i)=> {
		subTotal = i.precio*i.cantidad;
		Total+=subTotal;
    	mostrarCarrito+= (i.descripcion + " $ " + i.precio + " Cantidad : " + i.cantidad + " Sub Total "+ subTotal +"\n");
 });
   alert(mostrarCarrito +"\n Total a Pagar $ "+Total);
   salir (true);
}

function salir(saludo){
	
	if (saludo == false){
	    alert ("Gracias Por visitar nuestro sitio web");
		 return; 
	} else{
	    alert ("Gracias Por su Compra lo Esperamos Pronto");
		return;
    }
}

validarAlerta(mensaje);
alert ("Bienvenido/a " + respuesta + " a TU TIENDITA DE ACCESORIOS");
menuPrincipal();
*/

