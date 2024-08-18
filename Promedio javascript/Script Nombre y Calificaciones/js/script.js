let btn= document.getElementById("Analizar");
btn.addEventListener("click", function () {
    let n1, n2, n3, n4, nomb;
    nomb = parseInt(document.getElementById("nomb").value);
    n1 = parseInt(document.getElementById("nota1").value);
    n2 = parseInt(document.getElementById("nota2").value);
    n3 = parseInt(document.getElementById("nota3").value);
    n4 = parseInt(document.getElementById("nota4").value);
    if(n1 >= 0 && n1<= 100 && n2>=0 &&n2<=100 && n3 >= 0 && n3<= 100 && n4>=0 && n4<=100)
    {
        let resp = (n1+n2+n3+n4) / 4;
        document.getElementById("resp").innerHTML = `<h1> Promedio: ${resp} pts.</h1>`;
        document.getElementById("resp").innerHTML = `<h1>  ${nomb} </h1>`;
        
    }
    else{
        document.getElementById("nomb").innerHTML = `<h1> Ingrese un número valido</h1>`;
    }
});
function limpiarCampos() {
    // todo Obtener los elementos de entrada por su ID y establecer su valor en cadena vacía.
    document.getElementById("nomb").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
    document.getElementById("resp").innerHTML = "";
}






/*function calcularPromedio() {
    const nombre = document.getElementById("nombre").value;
    const calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    const calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    const calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    const calificacion4 = parseFloat(document.getElementById("calificacion4").value);

    const promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Nombre del usuario: ${nombre}\nPromedio de calificaciones: ${promedio.toFixed(2)}`;
}*/