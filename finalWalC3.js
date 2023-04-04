// Ejercicio 1
// Dado el siguiente array

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]

// Crear una función que reciba el array por parametro 
// y retorne un nuevo array con los autos cuyo modelo 
// sea mayor o igual a 2020.

const definirModelosActuales = (arr) => {

    let modelosActuales = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].modelo >= 2020) {
            modelosActuales.push(arr[i])
        }

    }
    return modelosActuales

}
let resultado1 = definirModelosActuales(autos)
console.table(resultado1);

console.log("----------------");

// Ejercicio 2
// Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenarNotas = (arr) => {

    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].notaPromedio < arr[j + 1].notaPromedio) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }

        }

    }

}
ordenarNotas(estudiantes)
console.table(estudiantes);

console.log("-----------");


// Ejercicio 3
// Dada la siguiente matriz, realizar los siguientes ejercicios.

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

// 1. Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
// La función debe retornar un arreglo con todos los elementos  de esa columna.

const tomarColumna = (mat, posColumna) => {

    let columnaTomada = []
    for (let i = 0; i < mat.length; i++) {
        columnaTomada.push(mat[i][posColumna])

    }
    return columnaTomada

}
let resultado2 = tomarColumna(matrix, 2)
console.log(resultado2);

console.log("-----------");


// 2. Crear una función que reciba por parámetro la matriz y cambie todos los elementos impares 
// de la matriz por un número 0 (cero)

const cambiarImpares = (mat) => {

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] % 2 !== 0) {
                mat[i][j] = 0
            }

        }

    }

}
console.table(matrix);
cambiarImpares(matrix)
console.table(matrix);

console.log("-----------");
