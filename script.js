let doble = numero => numero*2;
let triple = numero => numero*3;
let apply = (valor, funcion) => funcion(valor);

console.log(apply(2, doble)); // 4
console.log(apply(4, triple)); // 12
