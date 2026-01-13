//1. Calcula el valor absoluto de los siguientes números: 3, -5, 8, -3.5, 12.2
console.log(`----------------- EJ1 ----------------------------`);
let ej1_array=[3, -5, 8, -3.5, 12.2];
let ej1_array_valores_absolutos=ej1_array.map((n) => Math.abs(n));
console.log(`Valores absolutos:${ej1_array_valores_absolutos.toString()}`);

//2. Muestra por la consola el valor de la constante PI definida en la clase Math. 
console.log(`----------------- EJ2 ----------------------------`);
console.log(`Constante PI:${Math.PI}`);

//3. Calcula el coseno de 30º. Haz el mismo cálculo usando la calculadora de Windows. Compara ambos resultados y si no coinciden investiga el motivo y corrige tu código de JS. Calcula el seno de 45º en JS y con la calculadora y comprueba que coincidan. Calcula el coseno de /3radianes y comprueba con la calculadora que es correcto.
console.log(`----------------- EJ3 ----------------------------`);
let ej3_angulo_grados=30;
let ej3_angulo_radianes=ej3_angulo_grados/180*Math.PI;
let ej3_coseno_30=Math.cos(ej3_angulo_radianes);
console.log(`Coseno de 30 grados=${ej3_coseno_30}`);

//4. Calcula e^3
console.log(`----------------- EJ4 ----------------------------`);
let ej4_exponencial=Math.exp(3);
console.log(`e^3=${ej4_exponencial}`);

//5. Calcula  log 12.5 ( logaritmo en base 10). Calcula ln 15.7 (logaritmo neperiano). Compara ambos resultados con la calculadora.
console.log(`----------------- EJ5 ----------------------------`);
let ej5_logaritmo=Math.log10(12.5);
console.log(`Logarartimo de 12.7=${ej5_logaritmo}`);
let ej5_neperiano=Math.log(15.7);
console.log(`Neperiano de 15.7=${ej5_neperiano}`);

//6. Calcula la raiz cuadrada de 128.12 comparando con la calculadora que el resultado es correcto.
console.log(`----------------- EJ6 ----------------------------`);
let ej6_raiz=Math.sqrt(128.12);
console.log(`Raiz cuadrada de 128.12=${ej6_raiz}`);

//7. Redondea los siguientes números al entero más cercano: 2.7, -2.7, 12.4, 12.5, -0.6, 0.6
console.log(`----------------- EJ7 ----------------------------`);
let ej7_array=[2.7, -2.7, 12.4, 12.5, -0.6, 0.6];
let ej7_array_redondeo=ej7_array.map((n)=> Math.round(n));
console.log(`Array redondeo:${ej7_array_redondeo}`);

//8. Calcula el techo (ceil) de los siguientes números: 2.7, -2.7, 12.4, 12.5, -0.6, 0.6
console.log(`----------------- EJ8 ----------------------------`);
let ej8_array=[2.7, -2.7, 12.4, 12.5, -0.6, 0.6];
let ej8_array_ceil=ej7_array.map((n)=> Math.ceil(n));
console.log(`Array techo:${ej8_array_ceil}`);

//9. Calcula el suelo(floor) de los siguientes números: 2.7, -2.7, 12.4, 12.5, -0.6, 0.6
console.log(`----------------- EJ9 ----------------------------`);
let ej9_array=[2.7, -2.7, 12.4, 12.5, -0.6, 0.6];
let ej9_array_floor=ej8_array.map((n)=> Math.floor(n));
console.log(`Array suelo:${ej9_array_floor}`);

//10. Calcula el menor de los valores de estos pares de números: (-8, 7), (12, 5), (-12, 5)
console.log(`----------------- EJ10 ----------------------------`);
let ej10_min1=Math.min(-8, 7);
console.log(`ej10_min1: ${ej10_min1}`);
let ej10_min2=Math.min(12, 5);
console.log(`ej10_min2: ${ej10_min2}`);
let ej10_min3=Math.min( -12, 5);
console.log(`ej10_min3: ${ej10_min3}`);


//11. Calcula el mayor de los valores de estos pares de números: (-8, 7), (12, 5), (-12, 5)
console.log(`----------------- EJ11 ----------------------------`);
let ej11_max1=Math.max(-8, 7);
console.log(`ej11_max1: ${ej11_max1}`);
let ej11_max2=Math.max(12, 5);
console.log(`ej11_max2: ${ej11_max2}`);
let ej11_max3=Math.max( -12, 5);
console.log(`ej11_max3: ${ej11_max3}`);

//12. Queremos simular el lanzamiento de un dado. Genera un número aleatorio entre 1 y 6.
console.log(`----------------- EJ12 ----------------------------`);
let ej12_dado=Math.floor(Math.random()*6)+1;
console.log(`Valor aleatorio dado:${ej12_dado}`);

//13. Genera un número aleatorio entre 26 y 79.
console.log(`----------------- EJ13 ----------------------------`);
let ej13_aletorio=Math.floor(Math.random()*54)+26;
console.log(`Valor aleatorio rango:${ej13_aletorio}`);

//14. Redondea la constante Math.PI a dos decimales. Haz lo mismo pero redondeando a tres, cuatro y cinco decimales.
console.log(`----------------- EJ14 ----------------------------`);
let ej14_pi_dos_decimales=Math.round(Math.PI*100)/100;
console.log(`Pi con dos decimales:${ej14_pi_dos_decimales}`);
let ej14_pi_tres_decimales=Math.round(Math.PI*1000)/1000;
console.log(`Pi con tres decimales:${ej14_pi_tres_decimales}`);
let ej14_pi_cuatro_decimales=Math.round(Math.PI*10000)/10000;
console.log(`Pi con cuatro decimales:${ej14_pi_cuatro_decimales}`);
let ej14_pi_cinco_decimales=Math.round(Math.PI*10000)/10000;
console.log(`Pi con cinco decimales:${ej14_pi_cinco_decimales}`);
