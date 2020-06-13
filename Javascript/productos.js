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

        if(producto.id == productos.id) {
        
            foto.src = producto.foto;
            info.innerHTML = `
            <p><b>Producto:</b> ${producto.nombre}.</p><br>
            <p><b>Precio:</b> ${producto.precio}.</p><br>
            <p><b>Descripción:</b> ${producto.descripcion}.</p><br>
            <p><b>Deposito:</b> ${producto.ubicacionDepo}.</p><br>
            <p><b>Stock:</b> ${producto.stock} unidades.</p><br>
            <p><b>Categoria:</b> ${producto.categoria}.</p><br>
            `;
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";   
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}

