function calcularCalificacion() {
    var nota = parseFloat(document.getElementById("notaInput").value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        document.getElementById("calificacion").textContent = "Nota no válida";
        return;
    }

    if (nota >= 0 && nota < 3) {
        document.getElementById("calificacion").textContent = "Su desarollo es Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        document.getElementById("calificacion").textContent = "Su desarollo es Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        document.getElementById("calificacion").textContent = "Su desarollo es Suficiente";
    } else if (nota >= 6 && nota < 7) {
        document.getElementById("calificacion").textContent = "Su desarollo es Bien";
    } else if (nota >= 7 && nota < 9) {
        document.getElementById("calificacion").textContent = "Su desarollo es Notable";
    } else if (nota >= 9 && nota <= 10) {
        document.getElementById("calificacion").textContent = "Su desarollo es Sobresaliente";
    }
}