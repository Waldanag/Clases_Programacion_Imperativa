const edades = [33, 27, 34, 30, 34, 25];


// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [
    125, 21, 364, 214, 8544, 23, 45, 67, 1158, 21902, 234, 345, 46, 560, 567
];

const ordenarLikes = (arr) => {

    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if ( arr[j] < arr[j + 1] ) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
            
        }
        
    }

}
ordenarLikes(likes)
console.table(likes);
console.log(`El usuario con más likes obtuvo ${likes[0]} likes, el segundo obtuvo ${likes[1]} likes y el tercero ${likes[2]}. El usuario con menos likes obtuvo ${likes[14]}`);

console.log("--------------");

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperatura = [
    {
        dia: 1,
        mes: 1,
        tempMax: 31,
        tempMin: 13
    },
    {
        dia: 2,
        mes: 1,
        tempMax: 30,
        tempMin: 14
    },
    {
        dia: 3,
        mes: 1,
        tempMax: 22,
        tempMin: 18
    },
    {
        dia: 4,
        mes: 1,
        tempMax: 23,
        tempMin: 15
    },
    {
        dia: 5,
        mes: 1,
        tempMax: 24,
        tempMin: 11
    }

]

const ordenarTempMin = (arr) => {

    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].tempMin > arr[j + 1].tempMin) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
            
        }
        
    }

}
ordenarTempMin(temperatura)
console.table(temperatura);

console.log("--------------");


const ordenarTempMax = (arr) => {

    let aux
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].tempMax < arr[j + 1].tempMax) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
            
        }
        
    }

}
ordenarTempMax(temperatura)
console.table(temperatura);

console.log("--------------");
