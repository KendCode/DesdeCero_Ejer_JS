let btn = document.getElementById("Analizar");
btn.addEventListener("click", function() {
    let a = parseInt(document.getElementById("nota").value);
    let tablaHTML = "<h2>Tabla de Multiplicar:</h2><table border='1'>";
    if (a > 0) {
        for (let i = 1; i <= 10; i++) {
            let R = i * a;
            tablaHTML += `<tr><td>${i} x ${a}</td><td>${R}</td></tr>`;
        }
        tablaHTML += "</table>";
        document.getElementById("resp").innerHTML = tablaHTML;
    } else {
        document.getElementById("resp").innerHTML = `<h1>Ingrese un número válido</h1>`;
    }
});


//limpiar los datos
function limpiarCampos() {
    // todo Obtener los elementos de entrada por su ID y establecer su valor en cadena vacía.
    document.getElementById("nota").value = "";
    document.getElementById("resp").innerHTML = "";
}
