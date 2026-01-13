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
/*En ES5 podemos crear objetos (Objects) que están constituidos por propiedades y métodos. Para crear nuevos objetos usaremos la notación literal de objeto:

 let persona = {
                         nombre: "Pedro",
                          edad: 30,
                          cumplirAños: function(){
                               this.edad++
                            }
                         }
Nota:  nombre y edad serían propiedades del objeto y cumplirAños() sería un método del mismo. Fíjate también que para acceder a las propiedades del objeto dentro de un método es necesario usar this (ejemplo: this.edad).

Veamos otro ejemplo de un objeto alumno con las propiedad nombre, fechaNac y notas y el método toString():
let alumno = {
	nombre: "Juan",
	fechaNac: new Date(2001,2,15),
	notas: [6.7, 7.2, 8.9, 5.1],
	toString: function(){
		return `Me llamo ${this.nombre}, nací el ${this.fechaNac.toLocaleDateString()} y mis notas son: ${this.notas.toString()}`
	}
}*/
/** 
 * <!DOCTYPE html>
<html>

<head>
    <title>Ejemplo de JavaScript</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        class Cliente {
            constructor(nombre, saldo) {
                this.nombre = nombre;
                this.saldo = saldo;
            }

            depositar(dinero) {
                this.saldo = this.saldo + dinero;
            }

            extraer(dinero) {
                this.saldo = this.saldo - dinero;
            }
        }

        const cliente1 = new Cliente('diego', 1200);
        document.write('Nombre del cliente:' + cliente1.nombre + '<br>');
        document.write('Saldo actual:' + cliente1.saldo + '<br>');
        cliente1.depositar(120);
        document.write('Saldo luego de depositar $120---->' + cliente1.saldo + '<br>');
        cliente1.extraer(1000);
        document.write('Saldo luego de extraer $1000---->' + cliente1.saldo + '<br>');

        const cliente2 = new Cliente('ana', 100);
        document.write('Nombre del cliente:' + cliente2.nombre + '<br>');
        document.write('Saldo actual:' + cliente2.saldo + '<br>');
        cliente2.depositar(200);
        document.write('Saldo luego de depositar $200---->' + cliente2.saldo + '<br>');
    </script>

</body>

</html>
Para declarar una clase en ES6 utilizamos la palabra clave class y seguidamente el nombre de la clase:

        class Cliente {
Luego entre llaves encerramos todos los métodos de dicha clase.

Tenemos la palabra clave 'constructor' para definir el primer método que se ejecutará al crear el objeto:

            constructor(nombre, saldo) {
                this.nombre = nombre;
                this.saldo = saldo;
            }
Los atributos se les debe anteceder la palabra clave this

Los atributos que definamos se tiene acceso en todos los métodos de la clase:

            depositar(dinero) {
                this.saldo = this.saldo + dinero;
            }
Cuando creamos un objeto de la clase Cliente lo primero que se ejecuta es el constructor, debemos pasar los datos a los parámetros:

        const cliente1 = new Cliente('diego', 1200);
A los demás métodos del objeto 'cliente1' los llamamos antecediendo primero el nombre del objeto:

        cliente1.depositar(120);
Problema
Plantear una clase llamada Menu que administre una lista de enlaces. Definir como atributos dos vectores paralelos que almacenen en uno la 'url' y en el otro la 'descripcion' de dicho enlace. Permitir insertar enlaces y finalmente mediante un método que le pasamos el 'id' de un elemento HTML proceda a crearlo al menú.

<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo de JavaScript</title>
    <meta charset="UTF-8">
</head>

<body>

    <div id="menu"></div>

    <script>
        class Menu {
            constructor() {
                this.enlaces = [];
                this.descripcion = [];
            }

            insertar(enlace, descripcion) {
                this.enlaces.push(enlace);
                this.descripcion.push(descripcion);
            }

            mostrar(elemento) {
                let cadena = '<div>';
                for (let x = 0; x < this.enlaces.length; x++)
                    cadena += `[<a href="${this.enlaces[x]}">${this.descripcion[x]}</a>]`;
                cadena += '</div>';
                document.getElementById(elemento).innerHTML = cadena;
            }
        }

        const menu = new Menu();
        menu.insertar("http://www.google.com", "Google");
        menu.insertar("http://www.bing.com", "Bing");
        menu.insertar("http://www.yahoo.com", "Yahoo");
        menu.mostrar('menu');
    </script>

</body>

</html>
Cuando se termina de cargar la página por completo, por eso definimos el código JavaScript en la parte inferior, procedemos a crear un objeto de la clase Menu, insertar un conjunto de enlaces y finalmente generar la anclas:

        const menu = new Menu();
        menu.insertar("http://www.google.com", "Google");
        menu.insertar("http://www.bing.com", "Bing");
        menu.insertar("http://www.yahoo.com", "Yahoo");
        menu.mostrar('menu');
La clase Menu encapsula la administración de los enlaces y descripciones de dichos enlaces. En el constructor creamos los dos vectores:

        class Menu {
            constructor() {
                this.enlaces = [];
                this.descripcion = [];
            }
El método insertar llegan dos string con el enlace y descripción de dicho enlace, procedemos a agregarlos a los vectores:

            insertar(enlace, descripcion) {
                this.enlaces.push(enlace);
                this.descripcion.push(descripcion);
            }
El método mostrar recibe el 'id' del elemento HTML donde se debe insertar todas las anclas:

            mostrar(elemento) {
                let cadena = '<div>';
                for (let x = 0; x < this.enlaces.length; x++)
                    cadena += `[<a href="${this.enlaces[x]}">${this.descripcion[x]}</a>]`;
                cadena += '</div>';
                document.getElementById(elemento).innerHTML = cadena;
            }
 * 
 * 
 * 
*/