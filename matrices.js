/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz5 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
]
console.table(matriz5)

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const sumarMat = (mat) => {
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            acc += mat[i][j]
        }
    }
    return acc
}
let resultado = sumarMat(matriz5)
console.log(resultado);

//Ejercicio 2
/*Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100 */ 

const matriz = (range) => {
    let fila = []
    let acc = 1
    for (let i = 0; i < range; i++) {
        fila.push([]);
        for (let j = 0; j < range; j++) {
            fila[i].push(acc);
            acc++
        }
    }
    return fila;
}
let mat = matriz(10);
console.table(mat);

/*3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/

const diagonalPrincipal = (arr) =>{
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i][arr.length-1-i];       
    }
    return acc
}
let resultado3 = diagonalPrincipal(mat);
console.log(`Diagonal Principal ${resultado3}`);

const diagonalSecundaria = (array) => {
    let acc = 0;
    for (let i = 0; i < array.length; i++) {
        acc += array[i][array.length-1-i];
                
    }
    return acc
}
let resultado4 = diagonalSecundaria(mat);
console.log(`Diagonal Secundaria ${resultado4}`);
