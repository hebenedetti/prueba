/*let nombre = "Daniel";
console.log(nombre);
if(nombre == "Daniel"){
    let nombre = "Cici";   //Ambito de la variable
    console.log(nombre);
}
console.log('------------------------');

console.log(nombre);

let nombre1 = "Eduardo";
console.log(nombre1);
*/
//Vamos a realizar la calculadora propuesta por Edu
//Funciones declarativas
const sumar = require('./modulos/sumar');
const http = require('http');
const fs = require('fs');
console.log(http);
console.log(fs);



function restar(numeroa,numerob){
    return numeroa - numerob;
}

function multiplicar (numeroa,numerob){
    if(numeroa === 0 || numerob === 0){
        return "No puedo hacer esa multiplicacion";
    }
    return numeroa * numerob;
}

function dividir (numeroa,numerob){
    if (numeroa != 0 || numerob != 0){
        return numeroa/numerob;
    } else {
        return "No se puede hacer";
    }
}


//Invocar la función
let sumatoria = sumar(2,2);
console.log("La sumatoria es " + sumatoria);
console.log();
console.log(restar(4,2));
console.log();
console.log(multiplicar(0,2));
console.log();
console.log(dividir(4,2));
//Aclaratoria para todos
function comparar(){
    return 10 === "10"
}

console.log(comparar());
























