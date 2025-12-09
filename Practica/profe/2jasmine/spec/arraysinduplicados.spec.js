describe('Testeo de la función arraySinDuplicados()', () => {

    // Comprobamos que la función lanza una excepción si se invoca sin el argumento
    it('Debería lanzar una excepción al invocarse sin argumento', () => {
        expect(()=>{arraySinDuplicados()}).toThrowError();
    });

    // Comprobamos que la función lanza un error si el argumento no es un array
    it('Debería lanzar una excepción si le pasamos un argumenot que no sea un array', () => {
        expect(()=>{arraySinDuplicados(8)}).toThrowError();
    });

    // Comprobamos que la función lanza un error si el array de entrada contiene eltos que no sean números
    it('Debería lanzar una excepción si el array contiene elementos que no sean números', () => {
        expect(()=>{arraySinDuplicados([4,true, 1])}).toThrowError();
    });

    describe('Pruebas unitarias de caja negra', () => {
        const datos = [
            {arrayEntrada: [2, 3, 2, 3, -1], valorEsperado:[-1, 2, 3]},
            {arrayEntrada: [5, 5, -2, 1, -3, 1, -3], valorEsperado:[-3, -2, 1, 5]},
            {arrayEntrada: [0, 12 , -2, 0, -2, 1, 1], valorEsperado:[-2, 0, 1, 12]},
        ];

        datos.forEach(element => {
            it(`Para el array [${element.arrayEntrada.join(",")}] el valor devuelto esperado es [${element.valorEsperado.join(",")}]`, () => {
                expect(arraySinDuplicados(element.arrayEntrada)).toEqual(element.valorEsperado);
            });
        });
        
    });

    
});