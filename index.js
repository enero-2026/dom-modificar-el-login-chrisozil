const loginForm = document.getElementById("loginForm");
const mensajeError = document.getElementById("mensaje");
const modal = document.getElementById("modalFondo");
const btnAbrirModal = document.getElementById("linkOlvidar");
const btnCerrarModal = document.getElementById("cerrarModal");

document.getElementById("iniciarSesionBtn").addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    if (usuario === "" || pass === "") {
        mensajeError.textContent = "Por favor, completa todos los campos";
        mensajeError.classList.replace("oculto", "visible");
    } else {
        // Simulación de error de credenciales
        mensajeError.textContent = "Usuario o contraseña incorrectos";
        mensajeError.classList.replace("oculto", "visible");
    }
});

btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex"; 
});

btnCerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
