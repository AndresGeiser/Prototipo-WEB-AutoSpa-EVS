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
            <p id="mensaje_medio" class='error'></p><br>


            <p><b>Taller:</b><br>

            <select name="taller" id="taller">
                <option value="NoEspecificado">No especificado</option>
                <option value="Taller1">San Martín</option>
                <option value="Taller2">Urquiza</option>
                <option value="Taller3">Zárate</option>
                <option value="Taller4">Tigre</option>
                <option value="Taller5">Beccar</option>
            </select>
            </p><br>
            <p id="mensaje_taller" class='error'></p><br>

            <p><b>Fecha:</b><br>

         <div class = "fechaCont" id = "fechaCont">    
            <select name="fecha" id="fecha">
            <option value="NoEspecificado">No especificado</option>
            <option value="Fecha1">19/06/2020</option>
            <option value="Fecha2">25/06/2020</option>
            <option value="Fecha3">28/06/2020</option>
            </select>
            </p><br>
            <p id="mensaje_fecha" class='error'></p><br>
        </div>   


            <p><b>Vehiculo:</b><br>
            <select name="automovil" id="automovil">
            <option value="NoEspecificado">No especificado</option>
            <option value="Automovil1">Corsa Wagon 2008</option>
            <option value="Automovil2">Renault Clio 2009</option>
            </select>
            <p id="mensaje_automovil" class='error'></p><br>


            <button onclick="procesarReserva()">Reservar</button>
            <p id="mensaje_reserva" class='valida'></p><br>


            `;
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";   
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}

function procesarReserva()
{
    var medio = $("#medioPago :selected").text();
    var taller = $("#taller :selected").text();
    var fecha = $("#fecha :selected").text();
    var vehiculo = $("#automovil :selected").text();


    var mensaje_taller = document.querySelector('#mensaje_taller');
    var mensaje_medio = document.querySelector('#mensaje_medio');
    var mensaje_reserva = document.querySelector('#mensaje_reserva');
    var mensaje_automovil = document.querySelector('#mensaje_automovil');




    //Validación de reservas
    if(medio != "Seleccione un medio de pago" && taller != "No especificado" )
    {
        mensaje_reserva.textContent = 'La reserva se ha realizado correctamente';

        mensaje_taller.textContent = '';
        mensaje_automovil.textContent = '';
        mensaje_medio.textContent = '';

    }
    else if ( medio = "Seleccione un medio de pago")
    {
        mensaje_reserva.textContent = '';

        mensaje_medio.textContent = 'Seleccione un medio de pago';

    }
    else if ( medio = "Seleccione un medio de pago" && taller == "No especificado") //No lo toma
    {
        mensaje_reserva.textContent = '';
        mensaje_taller.textContent = 'Seleccione taller';


    }


}