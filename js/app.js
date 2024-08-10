document.getElementById("mensaje-lleno").style.display = "none";

function mostrarOcultarMensaje() {
    let texto = document.getElementById("entrada-mensaje-area").value;

    if (texto.trim() === "") {
        document.getElementById("mensaje-lleno").style.display = "none";
        document.getElementById("mensaje-vacio").style.display = "block";
    } else {
        document.getElementById("mensaje-lleno").style.display = "block";
        document.getElementById("mensaje-vacio").style.display = "none";
    }
}