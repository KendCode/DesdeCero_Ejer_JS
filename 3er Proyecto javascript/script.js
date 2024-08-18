let a, b,c;
a = prompt("Ingrese valor A: ");
b = prompt("Ingrese valor B: ");
c = prompt("Ingrese valor C: ");

/*if(a>b && a>c){
    let tem =a; 
    a = b;
    b = tem   
}
if(b>c && b>a){
    let tem = b;
    b = c;
    c = tem;
}else if( a > b){
    let tem = a;
    a = b;
    b = tem;

}*/


if(a>b && a>c){
    let mayor = a;
}else if(b>a && b>c){
    if(b > mayor){
        let mayor = b;
    }else{
        let menor = b;
    }
}else(c>a && c>b)
    if(b > mayor){
        let mayor = c;
    }else{
        menor = c;
    }
alert(a,b,c)

