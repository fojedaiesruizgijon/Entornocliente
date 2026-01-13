class Reserva {

    // Propiedades estáticas para lanzar los mensajes de error
    static MSG_ERROR_FECHA_ENTRADA_POSTERIOR_A_SALIDA = "Fecha de salida debe ser posterior a la de entrada";
    static MSG_ERROR_ESTANCIA_MINIMA_INFERIOR_UN_DIA = "Estancia mínima debe ser un día"

    // Propiedades estáticas para realizar cálculos del coste de la estancia
    static COSTE_DIA_DIARIO = 20;
    static COSTE_SABADO = 32;
    static COSTE_DOMINGO = 39;
    static MSG_UN_DIA = 24 * 60 * 60 * 1000; // Milisegundos de un día. Nos servirá para calcular el número de días entre dos fechas

    static DOMINGO = 0; // Propiedad estática que nos ayudará a realizar las comparaciones con lo devuelto por método getDay() de la clase Date
    static SABADO = 6; // Propiedad estática que nos ayudará a realizar las comparaciones con lo devuelto por método getDay() de la clase Date

    // Propiedades pseudo internas
    _nombre;
    _dni;
    _fechaEntrada;
    _fechaSalida;
    
    constructor(nombre, dni, fechaStrEntrada, fechaStrSalida) {
        this._nombre = nombre;
        this._dni = dni;
        // Guardamos las fechas de entrada y salida como objetos Date ya que nos permitirán realizar cálculos posteriormente
        const fechaObjEntrada = Reserva.fechastr2fecha(fechaStrEntrada);
        const fechaObjSalida = Reserva.fechastr2fecha(fechaStrSalida);
        this._fechaEntrada = fechaObjEntrada;
        this._fechaSalida = fechaObjSalida;
    }

    // Getter que devuelve el nombre de pila del cliente
    get nombrePila() {
        return this._nombre.split(";")[2].trim();
    }

    // Getter que devuelve el primer apellido del cliente
    get apellido1() {
        return this._nombre.split(";")[0].trim();
    }

    // Getter que devuelve el segundo apellido del cliente
    get apellido2() {
        return this._nombre.split(";")[1].trim();
    }


    get codigoCliente() {
        let nombrePila = this.nombrePila; // Usamos el getter nombrePila que hemos definido anteriormente
        let apellido1 = this.apellido1; // Usamos el getter apellido1 que hemos definido anteriormente
        let longitudDNI = this._dni.length; // La longitud del DNI nos servirá para extraer los 3 últimos dígitos del DNI
        let ultimosTresDigitosDNI = this._dni.substr(longitudDNI - 4, 3); // Extraemos los 3 últimos dígitos del DNI
        return nombrePila + apellido1 + ultimosTresDigitosDNI;
    }


    // Método estático auxiliar que convierte un dato string (p.e. "17/04/1973") a un objeto tipo Date
    static fechastr2fecha(fechaStr) {
        const dia = Number(fechaStr.split("/")[0]);
        const mes = Number(fechaStr.split("/")[1]);
        const año = Number(fechaStr.split("/")[2]);
        const fechaObj = new Date(año,mes-1,dia);
        return fechaObj;
    }

    // Función auxiliar a la que le pasamos dos fechas y nos devuelve el número de días transcurridos
    // El cálculo se basa en calcular el número de milisegundos transcurridos entre dos fechas y dividir por el número de milisegundos que contiene un día
    static numeroDiasFechas(fecha1, fecha2) {
        return Math.round((fecha2.getTime() - fecha1.getTime()) / Reserva.MSG_UN_DIA);
    }


    get numeroDiasEstancia() {
        return Reserva.numeroDiasFechas(this._fechaEntrada, this._fechaSalida);
    }



    modificarFechas(fechaEntrada, fechaSalida) {
        const objFechaEntrada = Reserva.fechastr2fecha(fechaEntrada);
        const objFechaSalida = Reserva.fechastr2fecha(fechaSalida);
        if (objFechaSalida.getTime() < objFechaEntrada.getTime()) throw new Error(Reserva.MSG_ERROR_FECHA_ENTRADA_POSTERIOR_A_SALIDA);
        if (Reserva.numeroDiasFechas(objFechaEntrada, objFechaSalida) < 1) throw new Error(Reserva.MSG_ERROR_ESTANCIA_MINIMA_INFERIOR_UN_DIA);
        this._fechaEntrada = objFechaEntrada;
        this._fechaSalida = objFechaSalida;
    }


    costeEstancia() {
        let numDias = this.numeroDiasEstancia;
        let dia;
        let costeAcumulado = 0;
        dia = new Date(this._fechaEntrada.getFullYear(), this._fechaEntrada.getMonth(), this._fechaEntrada.getDate());
        for (let i = 0; i < numDias; i++) {
            if (dia.getDay() == Reserva.SABADO) costeAcumulado += Reserva.COSTE_SABADO;
            else if (dia.getDay() == Reserva.DOMINGO) costeAcumulado += Reserva.COSTE_DOMINGO;
            else costeAcumulado += Reserva.COSTE_DIA_DIARIO;
            dia.setDate(dia.getDate() + 1);
        }
        return costeAcumulado;
    }

}