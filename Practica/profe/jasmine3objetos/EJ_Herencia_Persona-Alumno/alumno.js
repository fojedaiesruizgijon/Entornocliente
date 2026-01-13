class Alumno extends Persona {
    // Propiedades pseudo internas
    _expediente; // Expediente del alumno (del tipo "2024/12")
    _notas; // Array de números con las notas

    constructor(nombre, edad, altura, expediente, notas = []) {
        super(nombre, edad, altura); // Llamada al constructor de la clase padre
        this._expediente = expediente;
        this._notas = notas; // notas es un argumento opcional, el valor por defecto es []
    }

    // Getter expediente
    get expediente() { return this._expediente; }

    // Setter expediente
    set expediente(nuevoExpediente) {
        if (nuevoExpediente.trim() == "") throw new Error("El expediente no puede estar en blanco");
        this._expediente = nuevoExpediente;
    }

    // Getter notas (devolvemos un clone para que no se modifiquen externamente)
    get notas() { return this._notas.splice(); }


    // Método estático auxiliar para calcular el promedio de un array
    static promedio(array) {
        let suma = 0;
        array.forEach(
            item => suma += item
        );
        return suma / array.length;
    }

    //Método estático para redondear con un número de decimales
    static redondearDecimales(numero, decimales) {
        return Math.round(numero * Math.pow(10, decimales)) / Math.pow(10, decimales);
    }

    // Método de instancia notaMedia()
    notaMedia() {
        if(this._notas.length==0) return undefined;
        return Alumno.redondearDecimales(Alumno.promedio(this._notas), 1);
    }

        // Método toString para mostrar nombre, edad, altura (como persona que es )y expediente y notas
    toString() {
        return `${super.toString()}, expediente: ${this._expediente} , notas:${this._notas.join(",")} nota media:${this.notaMedia() ?? "-"}`;
    }

    // Método de instancia añadirNota()
    añadirNota(nota){
        if(!(nota instanceof Number)) throw new Error("La nota debe ser un dato numérico");
        this._notas.push(nota);
    }

    // Método de instancia eliminarNota()
    eliminarNota(posicion){
        let notaElimnada = this._notas.splice(posicion,1)[0];
        if(!notaElimnada) throw new Error("No existe una nota en esa posición");
        return notaElimnada;
    }

    // Comparador estático para ordenar de mayor a menor por la nota media
    static cmpNotaMedia(a1, a2) {
        return -(a1.notaMedia() - a2.notaMedia());
    }


}