function loro(texto) {
  for (let index = 1; index <= 5; index++) {
    console.log(texto);
  }
}
loro("texto");

function noParesDeContarImparesHasta(numero) {
  let cantidadImpares = 0;
  for (let index = 0; index <= numero; index++) {
    if (index % 2 != 0) {
      cantidadImpares = cantidadImpares + 1;
    }
  }
  return cantidadImpares;
}
console.log(noParesDeContarImparesHasta(29));

function tablaDeMultiplicar(numero) {
  let index = 1;
  while (index <= 10) {
    console.log(numero + " * " + index + " = " + numero * index);
    index++;
  }
}
tablaDeMultiplicar(7);

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


//EJERCICIO 5

var i;
var fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 12; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

