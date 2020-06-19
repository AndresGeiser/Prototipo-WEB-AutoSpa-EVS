var usuarios = [
    {
        email: "fernandezhr_1998@hotmail.com",
        contraseña: "Fernandez1234"
    },
    {
        email: "pepe@gmail.com",
        contraseña: "Pepe1234"
    }
]

function login(event) {
    event.preventDefault();

    var email = document.querySelector("#email");
    var password = document.querySelector("#contraseña");

    if(validarCampos(email, password) == true) {

        if(validarUsuario(email, password) == true) {

            alert("¡Bienvenido!");
            window.location = "productos.html"; 
        }
    }
}

//Validación de campos de email y contraseña
function validarCampos(email, pass)
{
    mensaje_usuario.textContent = "";
    
    if(emailEsValido(email) & contraseñaEsValida(pass)) {
        return true;
    }
    return false;
}

function emailEsValido(email) {

    var mensaje_email  = document.getElementById("mensaje_email");

    //Verificamos si el email es uno registrado
    var existe = false;
    usuarios.forEach(usuario => {
        if(usuario.email == email.value) {
            existe = true;
            return;
        }
    });

    if(email.value == "") {
        mensaje_email.textContent = "No has ingresado un email.";
        email.classList.add("invalido");

        return false;

    } else if (existe == false) {
        mensaje_email.textContent = "El email no se encuentra registrado.";
        email.classList.add("invalido");

        return false;

    } else {
        mensaje_email.textContent = "";
        email.classList.remove("invalido");
        
        return true;
    }
}

function contraseñaEsValida(password) {

    var mensaje_pw  = document.getElementById("mensaje_pw");
    
    //Chequeamos mediante expresiones regulares que la contraseña tenga al menos
    //8 caracteres, 1 numero, 1 letra y que no contenga espacios ni tabs
    var regex  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var espacios = /\s/;

    if(password.value == "") {
        mensaje_pw.textContent = "No has ingresado una contraseña."
        password.classList.add("invalido");
        return false;

    } else if (regex.test(password.value) == false || espacios.test(password.value)) {
        mensaje_pw.textContent = "Ingrese una contraseña valida."
        password.classList.add("invalido");
        return false;

    } else { 
        password.classList.remove("invalido");
        mensaje_pw.textContent = "";
        return true;

    }
}


function validarUsuario(email, password) {

    var mensaje_usuario  = document.getElementById("mensaje_usuario");

    var existe = false;

    usuarios.forEach(usuario => {
        if(usuario.email == email.value && usuario.contraseña == password.value) {
            existe = true;
            return;
        }
    });

    if(existe == false) {
        mensaje_usuario.textContent = "El email y contraseña no coinciden con un usuario registrado.";
    
    } else {
        mensaje_usuario.textContent = "";
    }

    return existe;
}