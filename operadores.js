console.log(10 / 2);
console.log(100 % 3);

function anterior (numero){
    return numero - 1
}

function triple (numero) {
    return numero * 3
}

function anteriorDelTriple (numero) {
    return anterior(triple(numero))
}

console.log(anterior(10));
console.log(triple(10));
console.log(anteriorDelTriple(10));


