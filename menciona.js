function menciona(texto,quebusco) {
    return (texto.indexOf(quebusco)<0)? false: true;
}

console.log(menciona("hola mundo","hola"));
//console.log("hola mundo".indexOf("mundo"));
