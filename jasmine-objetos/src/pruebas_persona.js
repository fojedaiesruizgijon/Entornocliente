const persona1=new Persona("María", 25, 1.72);
const persona2=new Persona("Juan", 27, 1.73);
const persona3=new Persona("Álvaro", 19, 1.80);

// Declaramos un array de objetos persona para ordenarlos posteriorment según distintos criterios(nombre, edad, altura)
const personas = [ persona1, persona2, persona3,];

// Getters (observa el nombre en mayúsculas)
console.log("El setter nombre de persona1 debería mostrar MARÍA");
console.log(persona1.nombre); // "MARÍA"

// toString con el nombre original almacenado
console.log("El método toString() de persona1 debería mostrar 'María, 25 años, altura de 1.72m'");
console.log(persona1.toString()); // "María, 25 años, altura de 1.72m"

// Ordenamos el array alfabéticamente por el nombre
const porNombre = [...personas].sort(Persona.cmpNombre);
console.log("Array de objetos Persona del array ordenados alfabéticamente por el nombre");
console.log(porNombre.map(p => p.toString()));

// Orden por edad
const porEdad = [...personas].sort(Persona.cmpEdad);
console.log("Array de objetos Persona del array ordenados por la edad en orden creciente");
console.log(porEdad.map(p => p.toString()));



// Orden por altura
const porAltura = [...personas].sort(Persona.cmpAltura);
console.log("Array de objetos Persona del array ordenados por la altura en orden creciente");
console.log(porAltura.map(p => p.toString()));


// Comprobación de validaciones (debe lanzar error)
try { persona1.nombre="   "; } 
catch (e) { console.warn(e.message); } // "El nombre no puede estar en blanco"
try { persona1.edad= -3; } 
catch (e) { console.warn(e.message); } // "La edad no puede ser un número negativo"
try { persona1.altura= -1.2; } 
catch (e) { console.warn(e.message); } // "La altura no puede ser un número negativo"
