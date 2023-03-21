//1 Escribir un programa que muestre en pantalla los números del 1 al 100,
//sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
//“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
//por la palabra “fizzbuzz”.

const ejercicio1 = () => {

    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else {
            if (i % 3 == 0) {
                console.log("fizz")
            } else if (i % 5 == 0) {
                console.log("buzz")
            } else {
                console.log(i)
            }
        }
    }

}
ejercicio1()

//2 Escriban una función que reciba dos parámetros: un array y un índice. La
//función deberá de mostrar por consola el valor del elemento según el
//índice dado.

const arrayYIndice = (array, index) => {
    console.log(array[index])
}

let arr = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]

let mostrar = arrayYIndice(arr, 1)

//3 Escribir una función que, dado un número de mes, devuelva la cantidad
//de días de ese mes —suponiendo que no es un año bisiesto—.

const diaMes = (mes) => {
    let mesesDelAnio = [
        [1, 31],
        [2, 28],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31]];
    return mesesDelAnio[mes - 1]
}

let mostrarDias = diaMes(5)

console.log(mostrarDias)

//4 Escribir una función de JavaScript que invierta un número.

const invertirNumero = (num) => {

    console.log(num.toString().split("").reverse().join(""));

}

invertirNumero(12345)

//5 Escribir una función que reciba una array y solo imprima los valores que
//se repiten. Por ejemplo, dada la siguiente array e índice, la función
//imprimirá '6,23,33,100'. 

let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

