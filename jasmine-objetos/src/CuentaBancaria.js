class CuentaBancaria {
    constructor(titular, cuenta, saldo = 100) {
        this._titular = titular.trim();
        this._cuenta = cuenta.trim();
        this._saldo = saldo;


        if (typeof this._saldo !== 'number' || this._saldo < 0) {
            throw new Error("El saldo debe ser un número positivo");
        }
    }

    get titular() {
        return this._titular;
    }

    get cuenta() {
        return this._cuenta;
    }

    get saldo() {
        return this._saldo;
    }

                get nombrePila() {
                    const partes = this._titular.split(',');
                            if (partes[1]) {
                                        return partes[1].trim();
                            } else {
                                            return "";
                }
        }

            get apellidos() {
                        const partes = this._titular.split(',');
                                if (partes[0]) {
                                    return partes[0].trim();
                                } else {
                                    return "";
                }
        }

            get iban() {
                return this._cuenta.substring(0, 4);
            }


                toString() {
                    return `Titular: ${this._titular} | Cuenta: ${this._cuenta} | Saldo: ${this._saldo}€`;
                }

    ingresar(cantidad) {
        if (typeof cantidad !== 'number' || cantidad < 10) {
            throw new Error("La cantidad a ingresar debe ser al menos de 10€");
        }
        this._saldo += cantidad;
        return this._saldo;
    }

    extraer(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error("La cantidad a extraer debe ser positiva");
        }
        if (cantidad > this._saldo) {
            throw new Error("Saldo insuficiente para realizar la extracción");
        }
        this._saldo -= cantidad;
        return this._saldo;
    }

    transferir(cuentaDestino, cantidad) {
        if (!(cuentaDestino instanceof CuentaBancaria)) {
            throw new Error("El destino de la transferencia debe ser un objeto de tipo CuentaBancaria");
        }
        if (cantidad > this._saldo) {
            throw new Error("Saldo insuficiente para realizar la transferencia");
        }
        this.extraer(cantidad);
        cuentaDestino.ingresar(cantidad);
        return { origen: this._saldo, destino: cuentaDestino.saldo };
    }
}


