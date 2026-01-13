describe('Testeo de la función circulo()', () => {

    // Observación: en los valores esperados, el perímetro y el área están redondeados a dos decimales
    const datos = [
        { radio: 1.4, valorEsperado: { perimetro: 8.80, area: 6.16 } },
        { radio: 2.7, valorEsperado: { perimetro: 16.96, area: 22.90 } },
        { radio: 5.37, valorEsperado: { perimetro: 33.74, area: 90.59 } },
        { radio: 10.412, valorEsperado: { perimetro: 65.42, area: 340.58 } },
        { radio: 12.2334, valorEsperado: { perimetro: 76.86, area: 470.16 } },
    ];

    // Comprobamos que se lance la excepción si invocamos a la función sin ningún argumento
    it(`Debería generar una excepción si no le pasamos el argumento radio`, () => {
        expect(() => { calcularCirculo() }).toThrowError();
    });

    // Comprobamos que se lance la excepción si invocamos a la función con un argumento que no sea un número
    it(`Debería generar una excepción si le pasamos un argumento que no sea un número`, () => {
        expect(() => { calcularCirculo("hola") }).toThrowError();
    });

    // Comprobamos que se lance la excepción si invocamos a la función con un número negativo
    it(`Debería generar una excepción si le pasamos un argumento que sea un número negativo`, () => {
        expect(() => { calcularCirculo(-3.2) }).toThrowError();
    });

    // La función debería devolver un objeto
    it('Debería devolver un objeto', () => {
        expect(calcularCirculo(5.1)).toBeInstanceOf(Object);
    });

    // El objeto devuelto por la función debería contener la propiedad perimetro
    it('El objeto devuelto debería contener la propiedad perimetro', () => {
        expect(calcularCirculo(2.5).hasOwnProperty("perimetro")).toBeTrue();
    });

    // El objeto devuelto por la función debería contener la propiedad area
    it('El objeto devuelto debería contener la propiedad area', () => {
        expect(calcularCirculo(2.5).hasOwnProperty("area")).toBeTrue();
    });


    // Pruebas unitarias de caja negra para el perímetro
    describe('Testeo de pruebas unitarias del perímetro', () => {
        datos.forEach((item) => {
            it(`Para un radio de ${item.radio} perimetro debería ser ${item.valorEsperado.perimetro}`, () => {
                expect(calcularCirculo(item.radio).perimetro).toBeCloseTo(item.valorEsperado.perimetro, 2);
            });
        });
    });

    // Pruebas unitarias de caja negra para el área
    describe('Testeo de pruebas unitarias del área', () => {
        datos.forEach((item) => {
            it(`Para un radio de ${item.radio} area debería ser ${item.valorEsperado.area}`, () => {
                expect(calcularCirculo(item.radio).area).toBeCloseTo(item.valorEsperado.area, 2);
            });
        });
    });





    



});