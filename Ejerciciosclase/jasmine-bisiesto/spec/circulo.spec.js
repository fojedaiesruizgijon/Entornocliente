



describe("Testeo de calcularCirculo()", () => {

    const datos = [
        { radio: 1.4, valorEsperado: { perimetro: 8.80, area: 6.16 } },
        { radio: 2.7, valorEsperado: { perimetro: 16.96, area: 22.90 } },
        { radio: 5.37, valorEsperado: { perimetro: 33.74, area: 90.59 } },
        { radio: 10.412, valorEsperado: { perimetro: 65.42, area: 340.58 } },
        { radio: 12.2334, valorEsperado: { perimetro: 76.86, area: 470.16 } },
    ];
  describe("Testeo de ejercicio 2", ()=> {
    it("Debería lanzar una excepción cuando se invoca sin argumento", () => {
        expect(() => { calcularCirculo() }).toThrowError();
    });

    it("Debería lanzar una excepción cuando se invoca con un argumento que no sea número", () => {
        expect(() => { calcularCirculo("hola") }).toThrowError();
    });

    it("Debería lanzar una excepción cuando se invoca con un número negativo", () => {
        expect(() => { calcularCirculo(-5) }).toThrowError();
    });


    it("Debería devolver un objeto", () => {
        let resultado = calcularCirculo(5);
        expect(typeof resultado).toBe("object");
    });

    it("El objeto devuelto debería contener la propiedad 'perimetro'", () => {
        let resultado = calcularCirculo(5);
        expect(resultado.perimetro).toBeDefined();
    });

    it("El objeto devuelto deberia contener la propiedad 'area'", () => {
        let resultado = calcularCirculo(5);
        expect(resultado.area).toBeDefined();
    });
});
     datos.forEach((item) => {
        it (`radio ${item.radio} ${item.valorEsperado}  .`, function () {
            // espero que.... sea igual a.....
            expect(calcularCirculo(item.radio)).toEqual(item.valorEsperado);
        });
    })
});