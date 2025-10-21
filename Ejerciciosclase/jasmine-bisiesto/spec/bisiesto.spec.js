// Esto es para que forme parte del informe
describe("Testeo de la función esBisiesto()", function() {
    // Dentro de la funcion anonima, pondremos el codigo del testeo

    // Años que sí son bisiestos: 400, 1200, 1904
    // Años que no son bisiestos: 1905, 2015, 2019

    const datos = [
        {año: 400, valorEsperado: true},
        {año: 1200, valorEsperado: true},
        {año: 1904, valorEsperado: true},
        {año: 1905, valorEsperado: false},
        {año: 2015, valorEsperado: false},
        {año: 2019, valorEsperado: false},
    ];

    /* Estructura de ejemplo
    it ("400 debería ser un año bisiesto", function() {
        expect(esBisiesto(400)).toBeTrue();
    });
    it ("1905 debería ser un año bisiesto", function() {
        expect(esBisiesto(1905)).toBeFalse();
    });
    */

 //   datos.forEach((item) => {
      // it (`El año ${item.año} ${item.valorEsperado ? "sí" : "no"} debería ser bisiesto.`, function () {
            // espero que.... sea igual a.....
       //    expect(esBisiesto(item.año)).toEqual(item.valorEsperado);
        });
 //  });
    //comprobar que la funcion devuelve un bolean
   //it('la funcion deberia devolver un boleano....', () => {
    //expect(esBisiesto(25)).toBeInstanceOf(Boolean);
//});

it('la funcion deberia lanzar una expepxion cuando la invocamos sin argumento', () => {
   expect(() => { esBisiesto() }).toThrowError();



});