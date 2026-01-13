// Función auxiliar para redondear (FUERA del test)
function redondearDecimales(num, decimales) {
    return Math.round(num * Math.pow(10, decimales)) / Math.pow(10, decimales);
}

describe('testeo de la funcion testeo', () => {
    // Comprobamos que la funcion no devuelve nan cuando le pasamos un array disperso
    it('no deberia devolver un nan si le pasamos un array disperso', () => {
        expect(promedio([5, 3, , , 8])).not.toBeNaN();
    });

    const datos = [
        { entrada: [7.2, 4.3, 9.1], valoresperado: 6.87 } // Cambiado a 6.87
    ];
    
    datos.forEach((item) => {
        it(`para el array [${item.entrada.join(",")}]`, () => {
            // Usando la función de redondeo para comparar
            expect(redondearDecimales(promedio(item.entrada), 2)).toEqual(item.valoresperado);
        });
    });

    datos.forEach((item) => {
        it(`para el array [${item.entrada.join(",")}] con toBeCloseTo`, () => {
            expect(promedio(item.entrada)).toBeCloseTo(item.valoresperado, 1); // Precisión de 1 decimal
        });
    });
});