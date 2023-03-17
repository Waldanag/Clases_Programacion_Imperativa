//1 CREAR FUNCION RESTAR PARES

const restarPares = (numero1, numero2) => {

    if (numero1 % 2 === 0 && numero2 % 2 === 0) {
        return numero2 - numero1
    } else {
        return "Lo siento, uno o mas parámetros no cumple con la condición de ser un número par";
    }
}
let resultado1 = restarPares(2, 8)
console.log(resultado1);

console.log("--------------------------");

//2 CREAR UNA FUNCION PARA CONTROLAR EL ACCESO A UN RECITAL

const controlAcceso = (edad, ticket) => {

    if (ticket) {
        if (edad >= 18) {
            return true
        } else {
            return "Sólo puedes acceder con un adulto acompañante"
        }
    } else {
        return false
    }
}
let resultado2 = controlAcceso(18, true)
console.log(resultado2);

console.log("--------------------------");

//3 CREAR FUNCION PARA FILTRAR POR CATEGORIA DE PRODUCTOS

let productos = [
    {
        producto: "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto: "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto: "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto: "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto: "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto: "tablet",
        tipo: "tecnologia",
        precio: 60000
    },

]

let nuevoGrupoProductos = []
const agruparProductos = (arr, categoria, precio) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].tipo === categoria && arr[i].precio >= precio) {
            nuevoGrupoProductos.push(arr[i])
        }
    }
}
agruparProductos(productos, "tecnologia", 50000)
console.log(nuevoGrupoProductos);

console.log("--------------------------");


