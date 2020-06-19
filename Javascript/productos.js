$(document).ready(function() {
    
  
    cargarProductos(productos)
});

function cargarProductos(negocios) {

    var publicaciones = document.querySelector('.productos');

    for (let producto of productos) {

        publicaciones.innerHTML +=` 
        <div class="producto" id="${producto.id}" >
        <figure>
            <img src="${producto.foto}" alt="Producto">
        </figure>
        <div class="datos">
            <h3>${producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            <p>${producto.stock} unidades</p>
        </div>
        <div>
            <button onclick="mostrarDetalles(this)">Ver mas</button>
        </div>
        </div>
        `    
    }  
}


function mostrarDetalles(seleccionado) {

    var foto =  document.querySelector('.cont_ventana .ventana figure img');
    var info =  document.querySelector('.cont_ventana .ventana .info');

    productos.forEach(producto => {

        var aviso = seleccionado.parentElement.parentElement; //Nos devuelve el elemento que contiene al aviso 

        if(producto.id == aviso.id) {
        
            foto.src = producto.foto;
            info.innerHTML = `
            <p><b>Producto:</b> ${producto.nombre}.</p><br>
            <p><b>Precio:</b> ${producto.precio}.</p><br>
            <p><b>Descripción:</b> ${producto.descripcion}.</p><br>
            <p><b>Deposito:</b> ${producto.ubicacionDepo}.</p><br>
            <p><b>Stock:</b> <span class='stock'>${producto.stock}</span> unidades.</p><br>

            <p><b>Medio de pago:</b>

                <select name="medioPago" id="medioPago">
                    <option value="NoEspecificado">Seleccione un medio de pago</option>
                    <option value="TarjetaCredito">Tarjeta de Crédito</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="MercadoPago">Mercado Pago</option>
                </select>
            </p>
            <p id="mensaje_medio" class='error'></p><br>

            <p><b>Cantidad:</b><br>
            <input id="cantidad" type="number" value="1" min= "1" > </p>
            <p id="mensaje_cantidad" class='error'></p><br>

            <button onclick="procesarCompra(${producto.stock})">Comprar</button><br>
            <p id="mensaje_compra" class='valida'></p><br>
            `;
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";   
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}

function procesarCompra(seleccionado)
{
    var stock = document.querySelector('.ventana .stock').textContent;

    var eleccion = $("#medioPago :selected").text();
    var cantidad = document.querySelector('#cantidad').value;

    var mensaje_cantidad = document.querySelector('#mensaje_cantidad');
    var mensaje_medio = document.querySelector('#mensaje_medio');
    var mensaje_compra = document.querySelector('#mensaje_compra');

    //Parseamos a int ambos para compararlos
    stock = parseInt(stock, 10);
    cantidad = parseInt(cantidad, 10);
    
    //Validación de Compra
    if(eleccion != "Seleccione un medio de pago" && cantidad <= stock) {
        mensaje_compra.textContent = 'La compra se ha realizado de manera exitosa.';
        mensaje_cantidad.textContent = '';
        mensaje_medio.textContent = '';

    }
    else if (eleccion != "Seleccione un medio de pago" && cantidad > stock) {
        mensaje_cantidad.textContent = 'La cantidad ingresada supera el stock del producto.';
        mensaje_medio.textContent = '';
        mensaje_compra.textContent = '';

    }
    else if (eleccion = "Seleccione un medio de pago" && cantidad <= stock) {
      
        mensaje_cantidad.textContent = '';
        mensaje_compra.textContent = '';
        mensaje_medio.textContent = 'Seleccione un medio de pago.';

    }
    else if (eleccion = "Seleccione un medio de pago" && cantidad > stock) {
        mensaje_cantidad.textContent = 'La cantidad supera stock.';
        mensaje_medio.textContent = 'Seleccione un medio de pago.';
        mensaje_compra.textContent = '';
    }

}


