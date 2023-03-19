// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;
let num4 = 45.5;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

// const comparador = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         return num1
//     } else {
//         if (num2 > num3) {
//             return num2
//         }
//     }
//     return num3

// }

// console.log(comparador(num1, num2, num3));

const comparador = (num1, num2, num3, num4) => {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        return num1;
    } else {
        if (num2 > num3 && num2 > num4) {
            return num2;
        } else {
            if (num3 > num4) {
                return num3
            }
        }
    }
    return num4;
};

console.log(comparador(num1, num2, num3, num4));

//OTRA OPCION GENERANDO UN ARRAY

const numeros = [5, 12, 2, 40, 33, 2, 8];

const comparador2 = (arr) => {
    let numeroMayor = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (numeroMayor < arr[i]) {
            numeroMayor = arr[i]
        }

    }
    return numeroMayor
};
console.log(comparador2(numeros));