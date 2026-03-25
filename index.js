console.log("hola mundo");

var usuarioCorrecto = "juanito123";
var passwordCorrecto = "a0b1c2d3";


var usuarioTxt = document.getElementById("usuario");
var passwordTxt = document.getElementById("password");
var mensajeSpan = document.getElementById("mensaje");
var boton = document.querySelector('button');

function iniciarSesion(){
    //Paso 1 validar que el usuario y contraseña no estén vacíos
    // Paso 2 validar que el usuario y contraseña sean correctos
    if(usuarioTxt.value === usuarioCorrecto && passwordTxt.value === passwordCorrecto){
        alert("Bienvenido, " + usuarioTxt.value);
    } else{
        mensajeSpan.classList.remove("oculto");
        mensajeSpan.classList.add("visible");
    }
}


boton.addEventListener("click", iniciarSesion);