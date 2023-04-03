let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]

const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

//EJERCICIO OPCIONAL Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.

const semanaMayor = (matGastos) => {

    let totalPorSemana = 0
    let totalPorDia = 0
    let semanaMayor =[]
    let diaMayor = []
    for (let i = 0; i < matGastos.length; i++) {
        for (let j = 0; j < matGastos[i].length; j++) {
            totalPorSemana += matGastos[i][j]
        }
        semanaMayor.push(totalPorSemana)
        totalPorSemana = 0
    }

    
}

semanaMayor(gastos)


// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?



let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */


