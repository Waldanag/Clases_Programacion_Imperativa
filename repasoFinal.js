
//1 Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no. 
// si están ordenados retornar true
// caso contrario retorna false
// ejemplos de arrays
// 	[4,9,2,5,6,7,1,2] // false
// [1,2,3,4,5,6,7,8] // true

let arrDesOrdenado = [4, 9, 2, 5, 6, 7, 1, 2]
let arrOrdenado = [1, 2, 3, 4, 5, 6, 7, 8]

const revisarOrden = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            return false
        }

    }
    return true

}
let resultado1 = revisarOrden(arrDesOrdenado)
let resultado2 = revisarOrden(arrOrdenado)

console.log(resultado1);
console.log(resultado2);

console.log("-------------");

// 2 Desarrollar una función que genere una matriz, 
// deberá recibir por parámetros la cantidad de filas y columnas 
// y retornar con valores secuenciales numéricos.

const crearMat = (numFilas, numCol) => {

    let nuevaMat = []
    let acc = 1
    for (let i = 0; i < numFilas; i++) {

        nuevaMat.push([])

        for (let j = 0; j < numCol; j++) {

            nuevaMat[i].push(acc)
            acc++

        }

    }
    return nuevaMat
}
let matFinal = crearMat(3, 3)
console.table(matFinal);

console.log("-------------");

// Dado él siguiente array de personas 

const personas =
    [
        {
            nombre: "Arlene Barr",
            legajo: 3955,
            edad: 33,
        },
        {
            nombre: "Roslyn Torres",
            legajo: 3925,
            edad: 27,
        },
        {
            nombre: "Cleo Lopez",
            legajo: 1965,
            edad: 34,
        },
        {
            nombre: "Daniel Malone",
            legajo: 3925,
            edad: 30,
        },
        {
            nombre: "Ethel Leon",
            legajo: 1915,
            edad: 34,
        },
        {
            nombre: "Harding Mitchell",
            legajo: 1905,
            edad: 25,
        }
    ]

// 3 Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas 
// y realice un ordenamiento de forma ascendente
// Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas 
// y realice un ordenamiento de forma descendente
// Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función

const ordenLegajo = (arr, orden) => {

    let aux = 0
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (orden === "ASC") {

                if (arr[j].legajo > arr[j + 1].legajo) {
                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux

                }
            } else if (orden === "DESC") {

                if (arr[j].legajo < arr[j + 1].legajo) {
                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux

                }

            }


        }

    }

}
ordenLegajo(personas, "ASC")
console.table(personas);

console.log("-------------");


//4 Teniendo 3 arrays:

let fila1 = [4, 9, 2]
let fila2 = [3, 5, 7]
let fila3 = [8, 1, 6]

// Realiza las siguientes tareas:
// Crea una matriz con esta forma 3X3:

let nuevaMat2 = [fila1, fila2, fila3]
console.table(nuevaMat2)

console.log("-------------");

// Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por parámetro y retorne lo solicitado:
// Función que reciba por parámetro la fila y retornar la suma de la misma.

const sumaFila = (mat, fila) => {

    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        acc += mat[fila - 1][i]

    }
    return acc

}
let resultadoSumaFila = sumaFila(nuevaMat2, 1)
console.log(resultadoSumaFila);

console.log("-------------");

// Función que retorne en un array la suma de las diagonales [15 , 15], sumando él centro las dos veces

const sumaDiag = (mat) => {

    let diag1 = 0
    let diag2 = 0
    let arrDiag = []
    for (let i = 0; i < mat.length; i++) {
        diag1 += mat[i][i]
        diag2 += mat[mat.length - (1 + i)][i]
    }
    arrDiag.push(diag1)
    arrDiag.push(diag2)
    return arrDiag

}
let resultadoDiag = sumaDiag(nuevaMat2)
console.log(resultadoDiag);

console.log("-------------");

// Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]

const extraerPares = (mat) => {

    let arrPares = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] % 2 === 0) {
                arrPares.push(mat[i][j])
            }

        }

    }
    return arrPares

}
let resultadoExtraerPar = extraerPares(nuevaMat2)
console.log(resultadoExtraerPar);

console.log("-------------");

// Función que retorne en un array los elementos mayores a 5

const mayoresQue = (mat, numLimite) => {

    let numMayores = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] > numLimite) {
                numMayores.push(mat[i][j])
            }

        }

    }
    return numMayores

}
let resultadoNumMayores = mayoresQue(nuevaMat2, 5)
console.log(resultadoNumMayores);

console.log("-------------");

// Función que retorne un objeto literal con dos propiedades
// pares : [4, 2, 8, 6], // array de pares
// impares : [9, 3, 5, 7, 1], // array de impares

const crearObjeto = (mat) => {

    let arrPar = []
    let arrImpar = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] % 2 === 0) {

                arrPar.push(mat[i][j])

            } else if (mat[i][j] % 2 !== 0) {
                arrImpar.push(mat[i][j])
            }

        }

    }
    return {
        pares: arrPar,
        impares: arrImpar
    }
}
let resultadoObjeto = crearObjeto(nuevaMat2)
console.log(resultadoObjeto);


