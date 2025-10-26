describe("Testeo de boletín de ejercicios", ()=>{ // Indica una suite (conjunto de pruebas) que vamos a realizar

const datos = [
            { nota: -1.5, valorEsperado: "VALOR INCORRECTO" },
            { nota: 0, valorEsperado: "INSUFICIENTE" },
            { nota: 1, valorEsperado: "INSUFICIENTE" },
            { nota: 4.5, valorEsperado: "INSUFICIENTE" },
            { nota: 4.9, valorEsperado: "INSUFICIENTE" },
            { nota: 5, valorEsperado: "SUFICIENTE" },
            { nota: 5.1, valorEsperado: "SUFICIENTE" },
            { nota: 5.9, valorEsperado: "SUFICIENTE" },
            { nota: 6, valorEsperado: "BIEN" },
            { nota: 6.9, valorEsperado: "BIEN" },
            { nota: 7, valorEsperado: "NOTABLE" },
            { nota: 7.9, valorEsperado: "NOTABLE" },
            { nota: 8, valorEsperado: "NOTABLE" },
            { nota: 8.9, valorEsperado: "NOTABLE" },
            { nota: 9, valorEsperado: "SOBRESALIENTE" },
            { nota: 9.9, valorEsperado: "SOBRESALIENTE" },
            { nota: 10, valorEsperado: "SOBRESALIENTE" },
            { nota: 11, valorEsperado: "VALOR INCORRECTO" }
        ];



    describe("Testeo de ejercicio 1", ()=> { // Indica el conjunto de pruebas que vamos a realizar para el ejercicio 1
            it('La función debería lanzar una excepción cuando la invocamos sin argumento.', () => {
        // En el caso de toThrowError, hay que meter la función a probar en una función anónima.
        expect( () => { verCalificacion() }).toThrowError();
    });
                it('La función debería lanzar una expecion si lanzamos un string.', () => {
        // En el caso de toThrowError, hay que meter la función a probar en una función anónima.
        expect( () => { verCalificacion("hola") }).toThrowError();
    });
      it("Deberoa devolver un string para cualquier valor entre -1 y 11 con saltos de 0.5", () => {
            for (let n = -1; n <= 11; n += 0.5) {
                expect(typeof verCalificacion(n)).toBe("string");
            }
        });



     datos.forEach((item) => {
        it (`la nota ${item.nota} ${item.valorEsperado}  .`, function () {
            // espero que.... sea igual a.....
            expect(verCalificacion(item.nota)).toEqual(item.valorEsperado);
        });
    })
    })
    
});