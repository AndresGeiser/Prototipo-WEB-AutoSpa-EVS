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

            <p><b>Medio de pago:</b>

                <select name="medioPago" id="medioPago">
                    <option value="NoEspecificado">Seleccione un medio de pago</option>
                    <option value="TarjetaCredito">Tarjeta de Crédito</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="MercadoPago">Mercado Pago</option>
                </select>
            </p><br>  

            <p><b>Taller:</b>

            <select name="taller" id="taller">
                <option value="NoEspecificado">No especificado</option>
                <option value="Taller1">San Martín</option>
                <option value="Taller2">Urquiza</option>
                <option value="Taller3">Zárate</option>
                <option value="Taller4">Tigre</option>
                <option value="Taller5">Beccar</option>
            </select>
        </p><br>

            <button onclick="procesarReserva(placeholder)">Reservar</button>

            `;
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";   
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}

function procesarReserva(seleccionado)
{
    var medio = $("#medioPago :selected").text();
    var taller = $("#taller :selected").text();

    //Validación de reservas
    if(medio != "Seleccione un medio de pago" && taller != "No especificado" )
    {
        //Reserva exitosa (Aún no se tiene en cuenta la fecha)
    }
    else if ( medio = "Seleccione un medio de pago")
    {
        //Mostrar mensaje de error "Seleccione un medio de pago"
    }


}