describe('Testeo primer lunes y último domingo', () => {
    const datos = [
        {entrada:{año: 1942, mes:3}, primerLunes:2, ultimoDomingo:29},
        {entrada:{año: 1946, mes:12}, primerLunes:2, ultimoDomingo:29},
        {entrada:{año: 1973, mes:4}, primerLunes:2, ultimoDomingo:29},
        {entrada:{año: 1975, mes:2}, primerLunes:3, ultimoDomingo:23},
        {entrada:{año: 1996, mes:11}, primerLunes:4, ultimoDomingo:24},
    ];

    describe('La función debería devolver un objeto', () => {
        expect(typeof primerLunesUltimoDomingo(1111, 1)).toBe('object');
    });

    describe('Comprobar primer lunes', () => {
        datos.forEach(
            (dato) => {
                it("Para año " + dato.entrada.año + " y mes " + dato.entrada.mes + ", el primer lunes debería ser " + dato.primerLunes + " y el último domingo " + dato.ultimoDomingo, () => {
                    const primerLunes = primerLunesUltimoDomingo(dato.entrada.año, dato.entrada.mes).primerLunes;
                    const ultimoDomingo = primerLunesUltimoDomingo(dato.entrada.año, dato.entrada.mes).ultimoDomingo;

                    expect(primerLunes).toBe(dato.primerLunes);
                    expect(ultimoDomingo).toBe(dato.ultimoDomingo);
                });
            }
        );
    });

    describe('Comprobamos que lanza un error para valores incorrectos en los parámetros de entrada', () => {
        it('Para un mes 15 debería lanzar un error', () => {
            expect(primerLunesUltimoDomingo(2024, 15)).toThrowError('Mes incorrecto');
        });
        
    });
});
