// Le damos un array de números de entrada y devuelve array sin duplicados y ordenados de menor a mayor
function arraySinDuplicados(array){
    // Comprobamos que el argumento de entrada está definido
    if(array == undefined) throw new Error("El argumento de entrada no está definido");
    //Comprobamos que el argumento de entrada sea un array
    if(! array instanceof Array) throw new Error("El argumento de entrada debe ser un array");
    // Comprobamos que todos los elementos del array sean números
    if(array.some(item => typeof item != "number")) throw new Error("Todos los elementos del array deben ser números");
    let sinDuplicados=new Set();
    array.forEach(element => {
        sinDuplicados.add(element);
    });
    return Array.from(sinDuplicados).sort((a,b) => a-b);
}