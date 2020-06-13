
//Toma de datos del formulario
function login()
{   
    var nombreUsuario = document.getElementsByName("nombre");
    var password = document.getElementsByName("contraseña");


    validarDatos(nombreUsuario,password);
    
}

//Validación de usuario y contraseña
function validarDatos(user,pass)
{
    var nombreUsuario = user[0].value;
    var password = pass[0].value;

    var errorNombre  = document.getElementById("usuarioInvalido");
    var errorPassword  = document.getElementById("contraseñaInvalida");

    if(nombreUsuario == "" || nombreUsuario.length < 2)
    {
        errorNombre.style.display = "block";
        errorPassword.style.display = "none";

    }
    else if ( passInvalida(password))
    {
        errorNombre.style.display = "none";
        errorPassword.style.display = "block";
    }

    else
    {
        errorNombre.style.display = "none";
        errorPassword.style.display = "none";

        alert("¡Bienvenido " + nombreUsuario + "!" );
       // window.location = "index.html";    
    }
    
}


function passInvalida(password)
{   
    //Chequeamos mediante expresiones regulares que la contraseña tenga al menos
    //8 caracteres, 1 minúscula, 1 mayúscula, 1 numero y que no contenga espacios ni tabs

    var regex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    var espacios = /\s/;


    if(regex.test(password) == false || espacios.test(password) )
    {
        return true;
    }

    return false;
}


