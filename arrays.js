// let str = "un string cualquiera"
// let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peluculasAnimadas = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"]
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

//TRANSFORMAR TODO UN ARRAY A MAYUSCULAS
const minToMayusculas = (array) => {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
    return array
}

//AGREGAR UN ARRAY A OTRO ARRAY
const agregarPeliculas = () => {

    peliculas = [].concat(peliculas, peluculasAnimadas)
    return peliculas

}
agregarPeliculas()

let nuevoArray = minToMayusculas(peliculas)
console.log(nuevoArray);

//SACAR EL ULTIMO ELEMENTO YA QUE NO CORRESPONDE AL GRUPO
let videoJuegos = peliculas.pop()
console.log(videoJuegos);

//COMPARAR SI 2 ARRAYS SON IGUALES O NO, EN ESTE CASO LAS CALIFICACIONES
const comparacionNotas = (a, b) => {

    if (a.length !== b.length) return false;
    else {
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
}

//TAREA ENTENDER MEJOR LA FUNCION DE COMPARACION 
let notaPeliculas = comparacionNotas(asiaScores, euroScores)
console.log(notaPeliculas);


let frase = 'Breaking Bad Rules!'
console.log(frase.slice(9, 12));
console.log(frase.slice(13));
console.log(frase.slice(-10));


function reemplazoFastFast (texto, text1, text2) {
    return texto.replace(text1, text2)
};

let textoNuevo = reemplazoFastFast("Todo lo que pasa tiene que bajar", "pasa", "sube")
console.log(textoNuevo)


