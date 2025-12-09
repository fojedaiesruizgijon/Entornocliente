class CuentaBancaria {
  // Propiedades "pseudo-privadas" (convención con guion bajo)
  _titular;     // "Apellido1 Apellido2, Nombre(s)"
  _cuenta;      // "ES18-<20 dígitos>"
  _saldo;       // number

   // --- Constructor ---
  constructor(titular, cuenta, saldo = 100) {
    if (saldo < 0) throw new Error("Saldo debe ser mayor o igual a 0");
    this._titular = titular;
    this._cuenta = cuenta;
    this._saldo = saldo;
  }

  get titular() { return this._titular; }
  set titular(nuevoTitular) {
    if(nuevoTitular == "") throw new Error("El titular no puede ser una cadena vacía");
    this._titular = nuevoTitular;
  }

  get cuenta() { return this._cuenta; }
  set cuenta(nuevaCuenta) {
    if(nuevaCuenta.length != 25) throw new Error("El número de cuenta debe tener 25 caracteres");
    this._cuenta = nuevaCuenta;
  }

  get saldo() {return this._saldo;}

  // --- Otros getters pedidos ---
  get iban() {
    // Primeros 4 caracteres del número de cuenta (p.ej. "ES18" de "ES18-...")
    return this._cuenta.slice(0, 4);
  }

  get nombrePila() {
    // Todo lo que va tras la coma (p.ej. "María José")
    return this._titular.split(",")[1].trim();
  }

  get apellidos() {
    // Parte de apellidos
    const apellidos = this._titular.split(",")[0].trim();
    return apellidos;
  }


  // --- Operativa ---
  ingresar(cantidad) {
   if (cantidad < 10)  throw new Error(`La cantidad a ingresar debe ser mayor de 10€`);
    this._saldo += cantidad;
    return this._saldo;
  }

  extraer(cantidad) {
    if (cantidad > this._saldo) throw new Error("Fondos insuficientes para la extracción.");
    this._saldo -= cantidad;
    return this._saldo;
  }

  transferir(destino, cantidad) {
    if (!(destino instanceof CuentaBancaria)) throw new Error("La cuenta de destino no es válida.");
    if(cantidad > this._saldo) throw new Error("No hay saldo suficiente para transferir esa cantidad");
    this.extraer(cantidad);
    destino.ingresar(cantidad);
    return { origen: this._saldo, destino: destino._saldo };
  }


  toString() {
    return `${this._titular} — ${this._cuenta} — Saldo: ${this._saldo.toFixed(2)}€`;
  }


}