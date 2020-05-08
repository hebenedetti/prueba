function noParesDeContarImparesHasta(numero) {
    var impar=0;
    for (var i=0; i<numero; i++) {
        if (i % 2 != 0) {
            impar++;
        }  
    }
    return impar;
}

console.log(noParesDeContarImparesHasta(2))
console.log(noParesDeContarImparesHasta(5))
console.log(noParesDeContarImparesHasta(20))
