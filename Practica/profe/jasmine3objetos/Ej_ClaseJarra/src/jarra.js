class Jarra {

    // Propiedades pseudointernas
    _capacidad; // Capacidad máxima de litros en la jarra
    _cantidad; // Cantidad de litros que contiene la jarra

    constructor(capacidad, cantidad) {
        this._capacidad = capacidad;
        this._cantidad = cantidad;
    }

    // Getter para rescatar la propiedad _capacidad
    get capacidad() { return this._capacidad; }

    // Getter para rescatar la propiedad _cantidad
    get cantidad() { return this._cantidad; }

    // Este setter garantiza que la cantidad de la jarra no pueda superar a la capcidad
    // También lanza un error si el argumento es un número negativo
    set cantidad(c) {
        if (c < 0) throw new Error('La cantidad debe ser un número positivo');
        this._cantidad = Math.min(c, this._capacidad);
    }

  
    // Método de instancia para llenar completamente la jarra
    llenar() {
        this._cantidad = this._capacidad;
    }

    // Método de instancia para vaciar completamente la jarra
    vaciar() {
        this._cantidad = 0;
    }

    //Método de instancia para mostrar las propiedades internas de nuestra jarra
    toString() {
        return `Capacidad: ${this._capacidad} cantidad: ${this._cantidad}`;
    }

    // Método de instancia que vierte líquido de jarra2 en nuestra propia jarra
    // Dependiendo de la cantidad y capacidad nuestra jarra se llenará completamente o la otra se vaciará completamente
    llenarDesde(jarra2) {
        let cantidadRestante = this._capacidad - this._cantidad;
        if (jarra2._cantidad <= cantidadRestante) {
            this._cantidad += jarra2._cantidad;
            jarra2.vaciar();
        } else {
            this._cantidad += cantidadRestante;
            jarra2._cantidad -= cantidadRestante;
        }
    }

    // Método estático que permite comparar la cantidad de dos jarras
    // Devuelve la jarra con más cantidad
    static comparar(jarra1, jarra2) {
        if (jarra1._cantidad > jarra2._cantidad) return jarra1;
        else return jarra2;
    }

    // Método de instancia con argumento REST al que le pasamos un número variable de objetos jarras
    // y devuelve un array con las jarras con más cantidad que la de nuestro propio objeto ordenadas de mayor a menor
    jarrasConMasCantidad(...jarras) {
        let arrayJarras = [];
        for (let i = 0; i < jarras.length; i++) {
            if (jarras[i].cantidad > this.cantidad) arrayJarras.push(jarras[i]);
        }
        return arrayJarras.sort((j1,j2) => j1._cantidad - j2._cantidad).reverse();
    }

}