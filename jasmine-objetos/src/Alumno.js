class Alumno extends Persona {
    _expediente;
    _notas;

    constructor(nombre, edad, altura, expediente, notas = []) {
        super(nombre, edad, altura);
        this._expediente = expediente;
        this._notas = notas;
    }

    get expediente() {
        return this._expediente;
    }

    set expediente(nuevoExpediente) {
        if (!nuevoExpediente || nuevoExpediente.trim() === '') {
            throw new Error('El expediente no puede estar en blanco');
        }
        this._expediente = nuevoExpediente;
    }

    get notas() {
        return [this._notas];
    }

    notaMedia() {
        if (this._notas.length === 0) return undefined;
        let suma = 0;
        for (let i = 0; i < this._notas.length; i++) {
            suma += this._notas[i];
        }
        const media = suma / this._notas.length;
        const decimales = 1;
        return Math.round(media * Math.pow(10, decimales)) / Math.pow(10, decimales);
    }

                    toString() {
                    let resultado = `${super.toString()}, expediente ${this._expediente}`;
                        if (this._notas.length > 0) {
                    let notasStr = "";
                        for (let i = 0; i < this._notas.length; i++) {
                                if (i > 0) {
                                    notasStr += ",";
                            }
                                notasStr += this._notas[i];
                            }
                                resultado += `, notas: ${notasStr}, nota media: ${this.notaMedia()}`;
                        } else {
                            resultado += `, nota media: sin notas`;
                            }
                            return resultado;
                    }

                añadirNota(nota) {
        if (typeof nota !== 'number') {
            throw new Error('La nota debe ser un dato numérico');
        }
        this._notas.push(nota);
    }

    eliminarNota(posicion) {
        if (posicion < 0 || posicion >= this._notas.length) {
            throw new Error('No existe una nota en esa posición');
        }
        return this._notas.splice(posicion, 1)[0];
    }

    static cmpNotaMedia(a1, a2) {
        let media1 = a1.notaMedia();
        let media2 = a2.notaMedia();
                if (media1 === undefined) {
                    media1 = 0;
                }
                if (media2 === undefined) {
                    media2 = 0;
                }
                    return media2 - media1;
    }

    static cmpNombre(a1, a2) {
        return a1._nombre.localeCompare(a2._nombre);
    }
}

