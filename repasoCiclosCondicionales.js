const tabla = (numero) => {
    if (numero % 1 !== 0 || numero < 1 || numero > 12) {
        console.log("Lo siento el numero no es valido");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);

    }
};
tabla(11)

console.log("____________");

//Pregunta 1
const frase = (texto) => {
}
console.log("Holas");

//Pregunta 2

function saludar(nombreUsuario) {
    return `Hola ${nombreUsuario} !`

}
let saludo = saludar("Carlos")
console.log(saludo)


//Pregunta 3

const sumar = (num1, num2) => {
    return num1 + num2
}
let resultado = sumar(11, 4)
console.log(resultado);

//Pregunta 4

let actual = 2019
const anios = (actual, nacimiento) => {
    return actual - nacimiento

}
console.log(anios(2023, 1984));

//Pregunta 5

const adivinanza = numero => {
    let aleatorio = Math.floor(Math.random() * 10) + 1;

    if (numero === aleatorio) {
        return "Felicitaciones, ese era!"

    } else {
        return "Lo siento, intenta nuevamente"
    }

}
console.log(adivinanza(7));

//Pregunta 6

let ejec6 = () => {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
};
console.log(ejec6());

//Pregunta 7

const natural = numero => { }








