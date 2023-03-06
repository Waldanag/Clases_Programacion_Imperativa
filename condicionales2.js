//PAGO DE LITROS CONSUMIDOS DE ACUERDO CON EL TIPO DE VEHICULO Y COSTO FIJO

const totalPagar = (vehiculo, litrosConsumidos) => {

    let precioPorLitro = 0;
    let costoFijo = 0;

    switch (vehiculo) {
        case "coche":
            precioPorLitro = 86;
            break;
        case "moto":
            precioPorLitro = 70;
            break;
        case "autobus":
            precioPorLitro = 55;
            break;
    }

    if (litrosConsumidos <= 25) {
        costoFijo = 50;
    } else {
        costoFijo = 25;
    }
    return litrosConsumidos * precioPorLitro + costoFijo

}
let totalFinal = totalPagar("moto", 2)
console.log(`El total a pagar es: ${totalFinal}`);


//PAGO POR CUENTA DE LOCAL DE SANDWICHES

const totalPagar2 = (sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {

    let precioSandwich = 0;

    switch (sandwichBase) {
        case "pollo":
            precioSandwich += 150;
            break;
        case "carne":
            precioSandwich += 200;
            break;
        case "veggie":
            precioSandwich += 100;
            break;
    }

    switch (tipoPan) {
        case "blanco":
            precioSandwich += 50;
            break;
        case "negro":
            precioSandwich += 60;
            break;
        case "s/Gluten":
            precioSandwich += 75;
            break;
    }

    queso === true ? (precioSandwich += 20) : "";
    tomate === true ? (precioSandwich += 15) : "";
    lechuga === true ? (precioSandwich += 10) : "";
    cebolla === true ? (precioSandwich += 15) : "";
    mayonesa === true ? (precioSandwich += 5) : "";
    mostaza === true ? (precioSandwich += 5) : "";


    return precioSandwich;

}
let totalFinal2 = totalPagar2("carne", "blanco", true, false, true, true, false, false)
console.log(`El total a pagar por el Sandwich es: ${totalFinal2}`);

