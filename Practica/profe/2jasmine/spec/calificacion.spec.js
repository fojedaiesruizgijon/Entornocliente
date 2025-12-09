describe('Testeo de la función verCalificacion(nota)', () => {

    // Comprobamos que se lance una excepción si falta el argumento de entrada
    it('Debería lanzar una excepción si falta el argumento', () => {
        expect(()=> {verCalificacion()}).toThrowError();
    });

    //Comprobamos que se lance una excepción si el argumento de entrada no es un número
    it('Debería lanzar una excepción si el argumento de entrada no es un número', () => {
        expect(()=> {verCalificacion("hola")}).toThrowError();
    });

    // Comprobamos que la función devuelva un string para un rango de notas entre -1.0 y 11.0 con saltos de 0.5
    it('Debería devolver un string para cualquier valor entre -1.0 y 11.0 con saltos de 0.5', () => {
    for(let i=-1; i<= 11; i+=0.5){
        expect(()=>{verCalificacion(i)}).toBeInstanceOf(String);
    }    
    });
    
    describe('Testeo unitario de caja negra', () => {
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


        datos.forEach((item)=>{
            it(`Para una nota de ${item.nota} la calificación esperada es "${item.valorEsperado}`, () => {
                expect(verCalificacion(item.nota)).toEqual(item.valorEsperado);
            });
        });

    });




});