console.log("-----------");

//EJERCICIO 1

let ejec1 = (numero) => {
  for (let index = numero + 1; index <= numero + 10; index++) {
    console.log(index);
  }
};
ejec1(1);

console.log("-----------");

//EJERCICIO 2

let ejec2 = (numero) => {
  for (let index = numero + 3; index <= 20; index = index + 3) {
    console.log(index);
  }
};
ejec2(5);

console.log("-----------");

//EJERCICIO 3

let ejec3 = () => {
  let suma = 0;
  for (let i = 0; i <= 100; i++) {
    suma = suma + i;
  }
  return suma;
};

console.log(ejec3());

console.log("-----------");

//EJERCICIO 4

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

console.log("-----------");

//EJERCICIO 5

const fibonacci = (numero) => {
  let contador = 0;
  for (let index = 1; index <= numero; index++) {
    console.log(`${index + contador}`);
    contador++;
  }
};

fibonacci(10);

console.log("-----------");

//OPCION 2 DE FIBONACCI QUE ENCONTRAMOS DE REFERENCIA

var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 12; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

// OPCION 3 DE FIBONACCI

// Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

const fib = (cant) => {
  let var1 = 1;
  for (let i = 1; i <= cant; i = i + var1) {
    var1 = i - var1;
    console.log(`${i}`);
  }
};
fib(25);
