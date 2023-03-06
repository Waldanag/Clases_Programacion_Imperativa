const tengoClases = (dia) => {
    switch (dia) {
        case 'lunes', 'miercoles', 'viernes':
            console.log('tenés clases');
            break;
        default:
            console.log('no tenés clases');
    }
}
tengoClases('viernes')