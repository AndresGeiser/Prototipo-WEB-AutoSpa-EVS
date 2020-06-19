$(document).ready(function() {
    
  
    cargarServicios(servicios)
});

function cargarServicios(servicios) {

    var publicaciones = document.querySelector('.servicios');

    for (let servicio of servicios) {

        publicaciones.innerHTML +=` 
        <div class="servicio" id="${servicio.id}" >
        <figure>
            <img src="${servicio.foto}" alt="Servicio">
        </figure>
        <div class="datos">
            <h3>${servicio.nombre}</h3>
            <h4>${servicio.precio}</h4>
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

    servicios.forEach(servicio => {

        var aviso = seleccionado.parentElement.parentElement; //Nos devuelve el elemento que contiene al aviso 

        if(servicio.id == aviso.id) {
        
            foto.src = servicio.foto;
            info.innerHTML = `
            <p><b>Nombre:</b> ${servicio.nombre}.</p><br>
            <p><b>Precio:</b> ${servicio.precio}.</p><br>
            <p><b>Descripción:</b> ${servicio.descripcion}.</p><br>
            `;
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";   
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}

