// Clase Persona
class Persona {
    // Propiedades pseudointernas
    _nombre; // Nombre de la persona, p.ej "Juan"
    _edad; // Edad de la persona, p.ej. 27
    _altura; // Altura de la persona en metros, p.ej. 1.73

    // Comparador sin validaciones de los argumentos
    constructor(nombre, edad, altura) {
        this._nombre = nombre;
        this._edad = edad;
        this._altura = altura;
    } 

    // Getter nombre. Devuelve nombre en mayúsculas
    get nombre() { return this._nombre.toUpperCase(); }

    // Setter nombre
    set nombre(nuevoNombre) {
        if (nuevoNombre.trim() == "") throw new Error("El nombre no puede estar en blanco");
        this._nombre = nuevoNombre;
    }

    // Getter edad
    get edad() { return this._edad; }

    // Setter edad
    set edad(nuevaEdad) {
        if (nuevaEdad < 0) throw new Error("La edad no puede ser un número negativo");
        this._edad = nuevaEdad;
    }

    // Getter altura
    get altura() { return this._altura; }

    // Setter altura
    set altura(nuevaAltura) {
        if (nuevaAltura < 0) throw new Error("La altura no puede ser un número negativo");
        this._altura = nuevaAltura;
    }

    // Método toString para mostrar nombre y edad
    toString() {
        return `${this._nombre}, ${this._edad} años, altura de ${this._altura}m`;
    }

     // Comparador usando el nombre
    static cmpNombre(p1, p2) {
          return p1._nombre.localeCompare(p2._nombre);
    }

    // Comparador usando la altura
    static cmpAltura(p1, p2) {
        return p1._altura - p2._altura;
    }

    // Comparador usando la edad
    static cmpEdad(p1, p2) {
        return p1._edad - p2._edad;
    }

}

