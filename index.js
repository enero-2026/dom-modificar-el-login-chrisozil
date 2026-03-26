// Seleccionamos los elementos
const modal = document.getElementById("modalFondo");
const btnAbrir = document.getElementById("linkOlvidar");
const btnCerrar = document.getElementById("cerrarModal");

// Función para mostrar
if (btnAbrir) {
    btnAbrir.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "flex"; // Forzamos que se vea
    });
}

// Función para quitar la pestaña (Cerrar)
if (btnCerrar) {
    btnCerrar.addEventListener("click", function() {
        modal.style.display = "none"; // Esto quita el cuadro y el fondo gris
    });
}
