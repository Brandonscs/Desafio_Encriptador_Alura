document.getElementById("texto__devuelto").style.display = "none";

function mostrarOcultarMensaje() {
    let texto = document.getElementById("texto__ingresado").value;

    if (texto.trim() === "") {
        document.getElementById("texto__devuelto").style.display = "none";
        document.getElementById("texto__vacio").style.display = "block";
    } else {
        document.getElementById("texto__devuelto").style.display = "block";
        document.getElementById("texto__vacio").style.display = "none";
    }
}