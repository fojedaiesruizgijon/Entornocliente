class Jarra {
  // Constructor
  constructor(capacidad, cantidad) {
    this._capacidad = capacidad;
    if (cantidad <= capacidad) {
      this._cantidad = cantidad;
    } else {
      this._cantidad = capacidad;
    }
  }

  // Getters
  get capacidad() {
    return this._capacidad;
  }

  get cantidad() {
    return this._cantidad;
  }

  // Setter
  set cantidad(valor) {
    if (valor < 0) {
      throw new Error("La cantidad debe ser un número positivo");
    } else if (valor > this._capacidad) {
      this._cantidad = this._capacidad;
    } else {
      this._cantidad = valor;
    }
  }

  // Método para llenar la jarra completamente
  llenar() {
    this._cantidad = this._capacidad;
  }

  // Método para vaciar la jarra
  vaciar() {
    this._cantidad = 0;
  }

  // Método para llenar la jarra desde otra jarra
  llenarDesde(otraJarra) {
    const espacioDisponible = this._capacidad - this._cantidad;
    let cantidadATransferir = 0;
    if (otraJarra.cantidad <= espacioDisponible) {
      cantidadATransferir = otraJarra.cantidad;
    } else {
      cantidadATransferir = espacioDisponible;
    }
    this._cantidad += cantidadATransferir;
    otraJarra.cantidad -= cantidadATransferir;
    return cantidadATransferir;
  }

  // Método de clase para comparar dos jarras
  static comparar(j1, j2) {
    if (j1.cantidad >= j2.cantidad) {
      return j1;
    } else {
      return j2;
    }
  }

  // Método de instancia para obtener jarras con más cantidad que esta
jarrasConMasCantidad() {
    const resultado = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].cantidad > this._cantidad) {
            resultado.push(arguments[i]);
        }
    }
    resultado.sort(function(a, b) {
        if (a.cantidad < b.cantidad) {
            return 1;
        }
        if (a.cantidad > b.cantidad) {
            return -1;
        }
        return 0;
    });
    return resultado;
}


  toString() {
    return `Jarra(capacidad: ${this._capacidad} litros, cantidad: ${this._cantidad} litros)`;
  }
}


function testJarras() {
  const jarra1 = new Jarra(10, 4);
  const jarra2 = new Jarra(15, 8);

  let jarraConMasCantidad = Jarra.comparar(jarra1, jarra2);
  console.log(`Jarra con más cantidad: ${jarraConMasCantidad}`); // jarra2

  
  jarra1.llenarDesde(jarra2);
  console.log(`cantidad jarra1: ${jarra1.cantidad} (Debería mostrar 10 litros)`); // 10
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 2 litros)`); // 2

  // Probamos llenar()
  jarra2.llenar();
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`); // 15

  // Probamos vaciar()
  jarra2.vaciar();
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 0 litros)`); // 0

  // Asignar valor superior a la capacidad
  jarra2.cantidad = 30;
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`); // 15


  try {
    jarra2.cantidad = -10;
  } catch (error) {
    console.log(`Se produjo el error: "${error.message}"`);
  }
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`); // 15
}


testJarras();
