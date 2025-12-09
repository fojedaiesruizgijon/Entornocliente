//1. Con los elementos: 'Plátanos', 'Naranjas', 'Pomelos', 'Fresas' y 'Limones' crea varios arrays usando las diferentes formas que permite JS.
let ej1_array1=['Plátanos', 'Naranjas', 'Pomelos', 'Fresas' , 'Limones'];
let ej1_array2=new Array(5);
ej1_array2[0]='Plátanos';
ej1_array2[1]='Naranjas';
ej1_array2[2]='Pomelos';
ej1_array2[3]='Fresas';
ej1_array2[4]='Limones';
let ej1_array3=new Array('Plátanos', 'Naranjas', 'Pomelos', 'Fresas' , 'Limones');
console.log("ej1_array1: " + ej1_array1.toString());
console.log("ej1_array2: " + ej1_array2.toString());
console.log("ej1_array3: " + ej1_array3.toString());

//2. Calcula la suma de todos los elementos del siguiente array disperso: [5, 2, , 3, -2, 7, ,9]
let ej2_array=[5, 2, , 3, -2, 7, ,9];
let ej2_sum=0;
for(let i=0; i < ej2_array.length ; i++){
    if(ej2_array[i] != undefined) ej2_sum += ej2_array[i];
}
console.log(`La suma del array disperso ${ej2_array.toString()} es ${ej2_sum}`);

//3. A partir del array ['Huelva', 'Sevilla', 'Córdoba'] usando método push debes agregar al final del mismo los elementos 'Jaén' y 'Granada' (examina el array para comprobar que realmente lo contiene). Posteriormente usando método pop debes extraer el último elemento del array (examina el array para comprobar que realmente ese elemento ya no forma parte del mismo).
let ej3_array=['Huelva', 'Sevilla', 'Córdoba'];
ej3_array.push('Jaén', 'Granada');
console.log(`ej3_array: ${ej3_array.toString()}`);

//4. A partir del array ['Huelva', 'Sevilla', 'Córdoba'] usando unshift debes añadir al principio del array el elemento 'Cádiz' (haz la comprobación oportuna). Posteriormente usando shift debes extraer el primer elemento del array.
let ej4_array=['Huelva', 'Sevilla', 'Córdoba'];
ej4_array.unshift('Cádiz');
console.log(`ej4_array: ${ej4_array.toString()}`);

//5. A partir del array ['Huelva', 'Sevilla', 'Córdoba'] y usando la instrucción delete debes eliminar el segundo elemento del array (posteriormente examina qué contiene el array en esa posición).
let ej5_array=['Huelva', 'Sevilla', 'Córdoba'];
delete ej5_array[1];
console.log(`ej5_array: ${ej5_array.toString()}`);

//6. A partir del array ['Huelva', 'Sevilla', 'Córdoba', 'Jaén', 'Almería', 'Granada', 'Málaga', 'Cádiz'] ordénalo en orden alfabético y examina el contenido. Posteriormente ordénalo en orden inverso (examina el contenido).
let ej6_array=['Huelva', 'Sevilla', 'Córdoba', 'Jaén', 'Almería', 'Granada', 'Málaga', 'Cádiz'];
ej6_array.sort();
console.log(`ej6_array: ${ej6_array.toString()}`);
ej6_array.reverse();
console.log(`ej6_array: ${ej6_array.toString()}`);

//7. Crea el array ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas']. Usando el método splice debes eliminar el segundo elemento del array (comprueba que realmente se ha eliminado 'Naranjas'). Posteriormente y usando de nuevo splice debes insertar 'Limones' entre el elemento 'Plátanos' y 'Pomelos' (comprueba que realmente se ha insertado correctamente).
let ej7_array=['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
ej7_array.splice(1,1);
console.log(`ej7_array: ${ej7_array.toString()}`);

//8. Crea el array ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas']. Usando el método slice debes extraer el tercer elemento del array y mostrarlo por pantalla (comprueba si el elemento extraído se ha eliminado del array).
let ej8_array=['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
let ej8_elto=ej8_array.slice(2,3);
console.log(`ej8_elto: ${ej8_elto}`);
console.log(`ej8_array: ${ej8_array}`);

//9. Concatena los arrays ['Plátanos', 'Naranjas', 'Pomelos'] y ['Cebollas', 'Pepinos', 'Pimientos'] en un solo array.
let ej9_array1= ['Plátanos', 'Naranjas', 'Pomelos'];
let ej9_array2= ['Cebollas', 'Pepinos', 'Pimientos'];
let ej9_array3=ej9_array1.concat(ej9_array2);
console.log(`ej9_array3: ${ej9_array3}`);

//10. Crear el array  ['Plátanos', 'Naranjas', 'Pomelos'] y recórrelo de cuatro maneras distintas de manera que se vaya volcando cada uno de los elementos a la consola de depuración.
let ej10_array=['Plátanos', 'Naranjas', 'Pomelos'];

console.log("Recorrer array mediante bucle for");
for (let i=0; i < ej10_array.length ; i++){
    console.log(`Indice:${i} Elto:${ej10_array[i]}`);
}

console.log("Recorrer array mediante forEach");
ej10_array.forEach(function (item,index) { console.log(`Indice:${index} Elto:${item}`); });

console.log("Recorrer array mediante for of");
let indice=0;
for (let item of ej10_array){
    console.log(`Indice:${indice} Elto:${item}`);
    indice++;
}

console.log("Recorrer array mediante for in");
for (let index in ej10_array){
    console.log(`Indice:${index} Elto:${ej10_array[index]}`);
}


//11. Crea el array ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas']. Usando el método indexOf busca en qué posición se encuentra el elemento 'Pomelos'. Intenta buscar el elemento 'Sandía' y comprueba qué devuelve el método indexOf
let ej11_array=['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
let ej11_posicion_pomelos=ej11_array.indexOf('Pomelos');
console.log(`Posición de Pomelos:${ej11_posicion_pomelos}`);
let ej11_posicion_sandia=ej11_array.indexOf('Sandía');
console.log(`Posición de Sandía:${ej11_posicion_sandia}`);


//12. Crea el array ['Plátanos', 'Naranjas', 'Pomelos', 'Fresas']. Usando el método includes debes comprobar si el array contiene el elemento 'Naranjas'. Comprueba si contiene el elemento 'Peras'
let ej12_array=['Plátanos', 'Naranjas', 'Pomelos', 'Fresas'];
let incluye_naranjas=ej12_array.includes('Naranjas');
console.log(`Array ej12_array incluye elto Naranjas:${incluye_naranjas?'Sí':'No'}`);
let incluye_peras=ej12_array.includes('Peras');
console.log(`Array ej12_array incluye elto Naranjas:${incluye_peras?'Sí':'No'}`);

//13. Crea el array [2, 12, 22, 30, 36]. Usando el método every debes comprobar si todos los elementos son pares. Crea un nuevo array [2, 12, 22, 7, 30, 36] y comprueba de nuevo usando every si todos los elementos son par.
let ej13_array1=[2, 12, 22, 30, 36];
let ej13_array1_todospares=ej13_array1.every(function (n) {return (n % 2 ==0);});
console.log(`Todos los elementos de [${ej13_array1.toString()}] son pares:${ej13_array1_todospares?'Sí':'No'}`);

let ej13_array2=[2, 12, 22, 7, 30, 36];
let ej13_array2_todospares=ej13_array2.every(function (n) {return (n % 2 ==0);});
console.log(`Todos los elementos de [${ej13_array2.toString()}] son pares:${ej13_array2_todospares?'Sí':'No'}`);

//14. Crea el array [2, 9, 7, 5.4, 8]. Usando el método map debes crear un nuevo array que contenga el cuadrado de cada elemento y almacenarlo en un nuevo array.
let ej14_array=[2, 9, 7, 5.4, 8];
let ej14_array_mapeado=ej14_array.map(function (n) { return Math.pow(n,2);});
console.log(`Array con eltos [${ej14_array}] al cuadrado:${ej14_array_mapeado.toString()}`);

//15. Crea un nuevo array [2, 7, 22, 3, 30, 17]. Usando el método filter debes crear un nuevo array que contenga solo los elementos impares del array anterior.
let ej15_array=[2, 7, 22, 3, 30, 17];
let ej15_array_solo_impares=ej15_array.filter(function (n) { return (n % 2 != 0);});
console.log(`Array con solo eltos impares de [${ej15_array}]:[${ej15_array_solo_impares.toString()}]`);


//16. Crea un nuevo array [2, 12, 7, 22, 3, 30, 17]. Usando el método find debes devolver el primer elemento del array que sea un número impar.
let ej16_array=[2, 12, 7, 22, 3, 30, 17];
let primer_elto_impar= ej16_array.find(function (n) {return n % 2 != 0;});
console.log(`Primer elto impar del array [${ej16_array}]: ${primer_elto_impar}`);

//17. Crea el array ['Plátanos', 'Naranjas', 'Pomelos', 'Plátanos', 'Fresas']. Usando el método lastIndexOf debes encontrar la última posición en que se encuentre el elemento  'Plátanos'
let ej17_array=['Plátanos', 'Naranjas', 'Pomelos', 'Plátanos', 'Fresas'];
let ultima_posicion_platanos= ej17_array.lastIndexOf('Plátanos');
console.log(`Última posición de Plátanos en el array: ${ultima_posicion_platanos}`);