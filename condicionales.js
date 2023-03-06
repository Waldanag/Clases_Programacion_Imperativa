// const puedePasar = edad => {

//     if(edad > 21 && edad % 2 != 0) {
//         console.log("Puede pasar al bar y tomar alcohol. Además sabías que tu edad es impar?")
//         }else if (edad > 21) {
//             console.log("Puede pasar al bar y tomar alcohol.")    
//         }else if (edad < 21 && edad > 18 && edad % 2 != 0){
//             console.log("Puede pasar al bar, pero no puede tomar alcohol. Además sabías que tu edad es impar?")
//         }else if (edad < 21 && edad > 18){
//         console.log("Puede pasar al bar, pero no puede tomar alcohol.")
//         }else if (edad < 18 && edad >0 && edad % 2 != 0){
//             console.log("Puede pasar al bar, pero no puede tomar alcohol. Además sabías que tu edad es impar?")
//         }else if (edad < 18 && edad >0 ){
//         console.log("Puede pasar al bar y tomar alcohol.")
//         } else {
//         console.log("Error, edad inválida. Por favor ingrese un número válido.");    
//         }

// }
// puedePasar(23)


//CONTROL DE ACCESO DE UNA DISCOTECA

const puedePasar2 = (edad) => {

    if (edad < 0) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
        return
    }

    if (edad < 18) {
        console.log("No puede pasar al bar.")
    } else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else {
        console.log("Puede pasar al bar y tomar alcohol.")
    }

    if (edad === 21) {
        console.log("Felicitaciones por haber llegado a la mayoría de edad.");
    }

    if (edad % 2 !== 0) {
        console.log("Sabías que tu edad es impar");
    }

}
puedePasar2(-1)




