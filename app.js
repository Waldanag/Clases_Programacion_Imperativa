const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su Nombre: ");
console.log("Hola" + " " + nombre);

let persona = { nombre: "Walter", edad: 28 };
console.log(persona);

let paises = ["Chile", "Argentina", "Venezuela"];
console.log(paises);
