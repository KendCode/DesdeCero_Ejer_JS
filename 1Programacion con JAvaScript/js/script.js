//Como crear las variables
//var num1 = a; => depende de la situacion
// let de manera general pero es mejor

function suma(){
    let a,b,c;
    a = parseInt(document.getElementById("txt1").value);
    b = parseInt(document.getElementById("txt2").value);
    c = a + b;
    document.getElementById("res"),innerHTML =
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    alert(c);
}