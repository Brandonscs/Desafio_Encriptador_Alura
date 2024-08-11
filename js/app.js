document.getElementById("boton-copiar").style.display = "none";

const llavesEncriptacion = [
    { letra: "e", reemplazo: "enter" },
    { letra: "i", reemplazo: "imes" },
    { letra: "a", reemplazo: "ai" },
    { letra: "o", reemplazo: "ober" },
    { letra: "u", reemplazo: "ufat" }
];

function encriptarMensaje() {
    let mensaje = document.getElementById("entrada-mensaje-area").value;
    limpiarMensajeAreas();

    if (validarMensajeLleno(mensaje) === true) {

        for (let i = 0; i < llavesEncriptacion.length; i++) {
            mensaje = mensaje.replace(new RegExp(llavesEncriptacion[i].letra, 'g'), llavesEncriptacion[i].reemplazo);
        }
    
        document.getElementById("salida-mensaje-area").value = mensaje;

        ocultarMostrarContenido(1)
    } else {
        ocultarMostrarContenido(2)
    }
}

function desencriptarMensaje() {
    let mensaje = document.getElementById("entrada-mensaje-area").value;
    limpiarMensajeAreas();

    if (validarMensajeLleno(mensaje) === true) {

        for (let i = 0; i < llavesEncriptacion.length; i++) {
            mensaje = mensaje.replace(new RegExp(llavesEncriptacion[i].reemplazo, 'g'), llavesEncriptacion[i].letra);
        }
    
        document.getElementById("salida-mensaje-area").value = mensaje;

        ocultarMostrarContenido(1)
    } else {
        ocultarMostrarContenido(2)
    }
}

function copiarMensaje() {
    let mensaje = document.getElementById("salida-mensaje-area").value;

    navigator.clipboard.writeText(mensaje).then(function() {
        alert("Mensaje copiado al portapapeles.");
        }).catch(function(error) {
            console.error("Error al copiar el mensaje: ", error);
        });
    }

function validarMensajeLleno(mensaje) {
    if (mensaje.trim() === "") {
        return false;
    }

    return true;
}

function limpiarMensajeAreas() {
    document.getElementById("salida-mensaje-area").value = "";
    document.getElementById("entrada-mensaje-area").value = "";   
}

function ocultarMostrarContenido(opcion){
    if(opcion === 1) {
        document.getElementById("boton-copiar").style.display = "block";
        document.getElementById("mensaje-vacio").style.display = "none";
        document.getElementById("salida-mensaje-area").style.backgroundImage = "none";
    } else {
        document.getElementById("boton-copiar").style.display = "none";
        document.getElementById("mensaje-vacio").style.display = "block";
        document.getElementById("salida-mensaje-area").style.backgroundImage = "url('../img/Muñeco.png')";
    }
}