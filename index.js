const usuarioCorrecto = "juanito123";
const passwordCorrecto = "a0b1c2d3";

const usuarioTxt = document.getElementById("usuario");
const passwordTxt = document.getElementById("password");
const mensajeSpan = document.getElementById("mensaje");
const botonLogin = document.getElementById("iniciarSesionBtn");

const linkOlvidar = document.getElementById("linkOlvidar");
const modal = document.getElementById("modalFondo");
const btnCerrarModal = document.getElementById("cerrarModal");

function iniciarSesion() {
    const user = usuarioTxt.value.trim();
    const pass = passwordTxt.value.trim();

    // Paso 1: Validar que no estén vacíos
    if (user === "" || pass === "") {
        mensajeSpan.textContent = "Por favor, llena todos los campos.";
        mensajeSpan.className = "visible";
        return;
    }

    if (user === usuarioCorrecto && pass === passwordCorrecto) {
        mensajeSpan.className = "oculto";
        alert("¡Bienvenido, " + user + "!");
    } else {
        mensajeSpan.textContent = "Usuario o contraseña incorrectos.";
        mensajeSpan.className = "visible";
    }
}

function mostrarModal(e) {
    e.preventDefault(); // Evita que el link recargue la página
    modal.classList.replace("oculto", "visible");
}

function ocultarModal() {
    modal.classList.replace("visible", "oculto");
}

botonLogin.addEventListener("click", iniciarSesion);
linkOlvidar.addEventListener("click", mostrarModal);
btnCerrarModal.addEventListener("click", ocultarModal);
