function anterior(numero){
    return numero-1;
}

function triple(numero){
    return numero*3;
}

function anteriorDelTriple(numero){
    return anterior(triple(numero));
}
console.log(anteriorDelTriple(1))
console.log(anteriorDelTriple(8))
console.log(anteriorDelTriple(90))