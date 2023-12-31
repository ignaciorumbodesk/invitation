 // Funciones JavaScript para la interacción
 function irALocalizacion() {
    // Redirigir a una ubicación específica (reemplaza 'URL' con la URL deseada)
    //window.location.href = 'http://maps.app.goo.gl/NiZ5wXr6RAotYEDj6';
    var modal = document.getElementById('irALocalizacion');
    modal.style.display = 'block';
}

function verOutfits() {
    // Redirigir a una página con outfits (reemplaza 'URL_OUTFITS' con la URL de outfits)
    //window.location.href = 'URL_OUTFITS';

    var modal = document.getElementById('verOutfits');
    modal.style.display = 'block';
}

function musica() {
    // Redirigir a una página con outfits (reemplaza 'URL_OUTFITS' con la URL de outfits)
    //window.location.href = 'URL_OUTFITS';

    var modal = document.getElementById('musica');
    modal.style.display = 'block';
}

function confirmarAsistencia() {
    // Agregar aquí la lógica para confirmar asistencia (puede ser una ventana modal o un formulario)
    alert('Gracias por confirmar tu asistencia.');
}

// Función para mostrar la ventana modal
function mostrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function regalos() {
    var modal = document.getElementById('regalos');
    modal.style.display = 'block';
}

// Función para cerrar la ventana modal
function cerrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function cerrarModalRegalos() {
    var modal = document.getElementById('regalos');
    modal.style.display = 'none';
}

// Función para cerrar la ventana modal outfits
function cerrarModalOutfits() {
    var modal = document.getElementById('verOutfits');
    modal.style.display = 'none';
}

// Función para cerrar la ventana modal ubicacion
function cerrarModalUbicacion() {
    var modal = document.getElementById('irALocalizacion');
    modal.style.display = 'none';
}

// Función para cerrar la ventana modal ubicacion
function cerrarModalmusica() {
    var modal = document.getElementById('musica');
    modal.style.display = 'none';
}

// Función para confirmar la asistencia
function confirmarAsistencia() {
    var nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    alert('Gracias por confirmar tu asistencia, ' + nombre + '!');
    cerrarModal();
}
