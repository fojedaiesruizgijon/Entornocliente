//1. Crea un objeto Date que contenga la fecha actual y guárdalo en una variable. Vuelca el contenido a la consola. Vuelca también a la consola el año, el mes (en formato numérico), el día(en formato numérico), el día de la semana (en formato numérico), la hora, los minutos y los segundos. Fíjate en el valor devuelto por el mes y deduce qué número asigna JavaScript al mes Enero.
let ej1_fecha=new Date();
console.log(`fecha actual:${ej1_fecha}`);
let ej1_año=ej1_fecha.getFullYear();
let ej1_mes=ej1_fecha.getMonth();
let ej1_dia=ej1_fecha.getDate();
let ej1_dia_semana=ej1_fecha.getDay();
let ej1_hora=ej1_fecha.getHours();
let ej1_minutos=ej1_fecha.getMinutes();
let ej1_segundos=ej1_fecha.getSeconds();
console.log(`Año:${ej1_año}, Mes:${ej1_mes}, Dia:${ej1_dia}, Dia semana:${ej1_dia_semana}, Hora:${ej1_hora}, Minutos:${ej1_minutos}, Segundos:${ej1_segundos}`);

//2. Crea un objeto Date que contenga la fecha de tu nacimiento. Muestra dicha fecha por consola. Si el mes no aparece correctamente busca en la documentación qué número de mes asigna JavaScript a Enero y corrige el problema.
let ej2_fecha_nac=new Date(1973,10,14); //14 noviembre 1973
console.log(`Fecha nacimiento:${ej2_fecha_nac.toString()}`);
//El mes se almacena con un número entre 0 y 11, donde 0 es enero

//3. Los objetos Date tienen un método llamado getMonth que devuelve el mes en formato numérico. Crea una función a la cual le pases como argumento ese número y devuelva un string con el mes (‘Enero’, ‘Febrero’, …, ‘Diciembre’).
function mesStr(mes){
    let meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return meses[mes];
}
for (let i=0; i<11; i++){
    console.log(`Mes ${i} => ${mesStr(i)}`);
}

//4. Los objetos Date tienen un método llamado getDay que devuelve el día de la semana  en formato numérico. Crea una función a la cual le pases como argumento ese número y devuelva un string con el día de la semana (‘Lunes’, ‘Martes’, …, ‘Domingo’)
function diaSeman(dia){
    let diasSemana=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    return diasSemana[dia];
}
for (let i=0; i<7; i++){
    console.log(`Dia ${i} => ${diaSeman(i)}`);
}

//5. Muestra por la consola el número de milisegundos que han transcurrido desde el 1 de enero de 1970 hasta el momento actual.
let hoy=new Date();
let milisegundos=hoy.getTime();
console.log(`Milisegundos transcurridos desde 1/1/1970 hasta hoy: ${milisegundos}`);

//6. Usando la página web https://www.epochconverter.com/ averigua el número de milisegundos transcurridos hasta la fecha de tu nacimiento. Crea un objeto Date con los milisegundos averiguados anteriormente. Vuelca el contenido del objeto fecha a la consola y comprueba que contiene la fecha correcta.
let ej6_milisegundos_nacimiento=122083200000; // Milisegundos transcurridos del el 1/1/1970 hasta el 14/11/1973: 122083200000
let ej6_fecha_nacimiento=new Date(ej6_milisegundos_nacimiento);
console.log(`Fecha nacimiento:${ej6_fecha_nacimiento}`);

//7. Los objetos Date contienen un método llamado getTimezoneOffset que devuelven la diferencia entre la hora UTC y la local. Crea un objeto que contenga la hora actual y ejecuta el método anterior para ver el valor devuelto (debe ser -120). Analiza el significado de -120 devuelto por el método.
let ej7_fecha=new Date();
let ej7_zoneoffset=ej7_fecha.getTimezoneOffset();
console.log(`Offset zona:${ej7_zoneoffset}`);
console.log(`-120 indicaría que la hora UTC son 2 horas menos (120 minutos)`);
console.log(`-60 indicaría que la hora UTC son 1 horas menos (60 minutos)`);


//8. Crea un objeto que contenga la fecha actual. Compara la diferencia devuelta por getUTCHours y getHours. ¿A qué se debe esa diferencia?
let ej8_fecha=new Date();
let hora=ej8_fecha.getHours();
let horaUTC=ej8_fecha.getUTCHours();
console.log(`Hora:${hora} Hora UTC:${horaUTC}`);
console.log(`Se muestra una diferencia de 2 horas`);

//9. Crea un objeto Date que contenga la fecha 28/2/2021. Obtén el día posterior a la fecha anterior y muéstralo por consola. Crea un nuevo objeto que contenga la fecha 28/2/2020 y obtén el día posterior.(Observación: Para asegurarte que has obtenido las fechas correctas utiliza algún calendario) ¿Por qué los resultados obtenidos han sido diferentes con ambas fechas?
let ej9_fecha1=new Date(2021,1,28); // 28/2/2021
ej9_fecha1.setDate(ej9_fecha1.getDate()+1); // Calculamos el día siguiente
console.log(`Día posterior al 28/2/2021 es ${ej9_fecha1.toString()}`)
let ej9_fecha2=new Date(2020,1,28); // 28/2/2020
ej9_fecha2.setDate(ej9_fecha2.getDate()+1); // Calculamos el día siguiente
console.log(`Día posterior al 28/2/2020 es ${ej9_fecha2.toString()}`)
console.log(`Las diferencias se deben a que 2021 es un año no bisiesto y 2020 sí lo es`);

//10. Intenta crear un objeto Date con la fecha 35/1/2021. ¿Se ha producido algún error? ¿Qué fecha almacena realmente el objeto anterior?
let ej10_fecha=new Date(2021,0,35);
console.log(`Fecha 35/1/2021:${ej10_fecha.toString()}`); // La fecha se corresponde con el 4/2/2021. Explicación: enero tiene 31 días, y al meter 35 lo considera 4 días posteriores al 31/1/2021

//11. Crea una función a la que le puedas pasar dos fechas como entrada y devuelva el número de días transcurridos entre esas dos fechas. Para comprobar que el cálculo es correcto utiliza alguna web que devuelva el número de días transcurridos entre dos fechas.
function numeroDiasFechas(fecha1,fecha2){
    const MILISEGUNDOS_UN_DIA=24*60*60*1000;
    let numDias=Math.round((fecha2.getTime()-fecha1.getTime())/MILISEGUNDOS_UN_DIA);
    return numDias;
}

let ej11_fecha1=new Date(2021,1,28); // 28/2/2021
let ej11_fecha2=new Date(2021,2,1); // 1/3/2021
let num_dias1=numeroDiasFechas(ej11_fecha1,ej11_fecha2);
console.log(`Número de días entre el 28/2/2021 y el 1/3/2021 = ${num_dias1} días`); // Observación: 2021 no es bisiesto
let ej11_fecha3=new Date(2020,1,28); // 28/2/2020
let ej11_fecha4=new Date(2020,2,1); // 1/3/2020
let num_dias2=numeroDiasFechas(ej11_fecha3,ej11_fecha4);
console.log(`Número de días entre el 28/2/2020 y el 1/3/2020 = ${num_dias2} días`); // Observación: 2020 sí es bisiesto

//Crea un objeto Date con la fecha de tu cumpleaños dando como argumento la fecha en formato String.
let ej12_fechaCumple = new Date("04/17/1973");
console.log(`Fecha cumple ${ej12_fechaCumple.toLocaleDateString()} `); //

