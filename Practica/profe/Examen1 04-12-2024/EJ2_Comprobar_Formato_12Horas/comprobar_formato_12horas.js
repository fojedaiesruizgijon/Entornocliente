// Formato h:mm am|pm (ej. 8:12 pm, 12:15 am)
function comprobarHora(fechaHoraStr){
    let patron = /^((([1-9]|[0][1-9]|[1][0-2])[:]([0-5]\d))\s(am|pm))$/i;

    return patron.test(fechaHoraStr);
}