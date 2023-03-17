//1 CREAR UNA FUNCION LLAMADA LOOP DE PARES

const loopDePares = (numero) => {

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(`El numero ${i} es par`);
        }
    }

}
loopDePares(5)

//2 UNA FUNCION LLAMADA LOOP DE IMPARES

const loopDeImpares = (numero, palabra) => {

    for (let i = 0; i <= 100; i++) {
        if ((numero + i) % 2 !== 0) {
            console.log(`El numero ${numero + i} es impar`);
        }
    }

}
loopDeImpares(10000)

//3 CREAR LA FUNCION SUMATORIA

const sumatoria = (numero) => {

    let suma = 0
    for (let i = 0; i <= numero; i++) {
        suma += i
    }
    return suma
}
let resultado = sumatoria(8)
console.log(resultado);

//4 CREAR FUNCION NUEVO ARREGLO

let arr = []
const nuevoArreglo = ( arreglo, numero ) => {

    for (let i = 1; i <= numero; i++) {
        arreglo.push(i)
    }
    return arr
}
let resultadoArreglo = nuevoArreglo( arr, 13 )
console.log(resultadoArreglo);

//5 CREAR UNA FUNCION LLAMADA SPLIT

const split = (texto) => {
    
    let textoSeparado = []
    for (let i = 0; i < texto.length; i++) {
        textoSeparado.push(texto[i])
    }
    return textoSeparado

}
let resultadoTextoSeparado = split("hola como estas?")
console.log(resultadoTextoSeparado);

//6 CREAR FUNCION QUE MANEJE 2 ARREGLOS, MOSTRANDO POR CONSOLA SUS ELMENTOS QUE TENGAN LAS MISMAS POSICIONES

let numeros = [1,2,3,4]
let saludo = "Hola"
const arrayHandler = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
}
arrayHandler(numeros, saludo)

//7 CREAR FUNCION PALINDROMO

let text = ""
const palindromo = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        
        if ( arr[0] === arr[arr.length-i] ) {
            
        }
        
    }
    return true

}
let resultadoPalindromo = palindromo("enrique")
console.log(resultadoPalindromo);

//ESTO DEL PALINDROMO HAY QUE ARREGLARLO
