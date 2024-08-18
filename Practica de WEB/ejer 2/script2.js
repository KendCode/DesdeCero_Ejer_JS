function calcularLetraCI() {
    var ci = document.getElementById("ciInput").value;

    // Verificar si la entrada es un número válido
    if (!/^\d+$/.test(ci)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    ci = parseInt(ci);

    // Verificar si el número está dentro del rango permitido
    if (ci < 0 || ci > 99999999) {
        alert("El número de CI debe estar entre 0 y 99999999.");
        return;
    }

    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var resto = ci % 23;
    var letra = letras.charAt(resto);

    document.getElementById("resultado").textContent = "La letra del CI es: " + letra;
}