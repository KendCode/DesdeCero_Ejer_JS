function ingresar(){
    let name= document.getElementById("Inpname").value;
    let con= document.getElementById("pass").value;

    if(name == "ALAMBRITO" && con == "PROGRAMACION-1"){
        document.getElementById("resp").innerHTML = `<h1>Bienvenido al Sistema</h1>`;
        
    }
    else{
        document.getElementById("resp").innerHTML = `<h1>Error</h1>`;
    }
}
console.log("hola")
// ALAMBRITO
// PROGRAMACION-1