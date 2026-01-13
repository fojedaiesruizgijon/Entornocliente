// Funciones auxiliares
function compruebaDuplicidadArray(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
}

function redondearDecimales(numero, decimales) {
    return Math.round(numero * Math.pow(10, decimales)) / Math.pow(10, decimales);
}