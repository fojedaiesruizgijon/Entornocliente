describe("Testeo clase Reserva", function () {
  let reserva1;
  const costes = { diario: 20, sabado: 32, domingo: 39 };

  beforeEach(function () { // Se ejecuta una vez antes de llamar a cada especificación it
    reserva1 = new Reserva("García ;Ortiz ; Juan Antonio", "44958625A", "27/02/2020", "03/03/2020"); 
  });

   it("El getter codigoCliente debería devolver JGARCÍA625", function () {
    expect(reserva1.nombrePila).toEqual("Juan Antonio");
  });

  it("El getter apellido1 debería devolver García", function () {
    expect(reserva1.apellido1).toEqual("García");
  });

   it("El getter apellido2 debería devolver Ortiz", function () {
    expect(reserva1.apellido2).toEqual("Ortiz");
  });

  it("El getter numeroDiasEstancia debería devolver 5", function () {
    expect(reserva1.numeroDiasEstancia).toEqual(5);
  });

  // Jueves, Viernes, Sábado, Domingo, Lunes (3 diarios, 1 sábado, 1 domingo)
  let costeEsperado = 3 * costes.diario + 1 * costes.sabado + 1 * costes.domingo;
  it("El método costeEstancia() debería devolver " + costeEsperado, function () {
    expect(reserva1.costeEstancia()).toEqual(costeEsperado);
  });


  it("Los fechaEntrada y fechaSalida no se ven alteradas al llamar al método costeEstancia()", function () {
    let numDiasAntes, numDiasDespues;
    numeroDiasAntes = reserva1.numeroDiasEstancia;
    reserva1.costeEstancia();
    numDiasDespues = reserva1.numeroDiasEstancia;
    expect(numeroDiasAntes).toEqual(numDiasDespues);
  });



  it("El método modificarFechas funciona correctamente", function () {
    reserva1.modificarFechas("28/02/2020","01/03/2020");
    expect(reserva1.numeroDiasEstancia).toEqual(2);
  });


  it("El método modificarFechas() debería lanzar una excepción si fecha salida es anterior a la entrada", function () {
    expect(function () { reserva1.modificarFechas("01/03/2020", "28/02/2020"); }).toThrowError();
  });

  it("El método modificarFechas() debería lanzar una excepción si entre fecha de entrada y salida transcurre menos de un día", function () {
    expect(function () { reserva1.modificarFechas("28/02/2020", "28/02/2020"); }).toThrowError();
  });


});
