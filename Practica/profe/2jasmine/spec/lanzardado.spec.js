describe('Testeo de función lanzarDado()', () => {
    // Nº de veces que repetiremos las pruebas
    const NUMERO_LANZAMIENTOS = 1000;
    const NUMERO_LANZAMIENTOS_LEY_GRANDES_NUMEROS = 100000;

    //Comprobamos que la función devuelve un número
    it(`Tras ${NUMERO_LANZAMIENTOS} lanzamientos siempre debería devolver un número`, () => {
        for (let i = 0; i < NUMERO_LANZAMIENTOS; i++) {
            expect(lanzarDado()).toBeInstanceOf(Number);
        }
    });

    //El número devuelto siempre debería ser mayor o igual que 1
    it(`Tras ${NUMERO_LANZAMIENTOS} lanzamientos siempre debería devolver un número mayor o igual que 1`, () => {
        for (let i = 0; i < NUMERO_LANZAMIENTOS; i++) {
            expect(lanzarDado()).toBeGreaterThanOrEqual(1);
        }
    });

    //El número devuelto siempre debería ser menor o igual que 6
    it(`Tras ${NUMERO_LANZAMIENTOS} lanzamientos siempre debería devolver un número menor o igual que 6`, () => {
        for (let i = 0; i < NUMERO_LANZAMIENTOS; i++) {
            expect(lanzarDado()).toBeLessThanOrEqual(6);
        }
    });


    //Debería devolver todos los valores (del 1 al 6) cuando el nº de lanzamientos del dado es elevado
    describe(`Tras ${NUMERO_LANZAMIENTOS} lanzamientos debería haber devuelto todos los nº del 1 al 6`, () => {
        let arrayRecuento = [0, 0, 0, 0, 0, 0]; // En este array llevaremos el recuento del nº veces que aparece cada valor devuelto por el dado
        for (let i = 0; i < NUMERO_LANZAMIENTOS; i++) {
            let valor = lanzarDado();
            // Usamos el valor devuelvo como índice del arrayRecuento
            arrayRecuento[valor - 1]++;
        }
        // Ahora comprobamos que cada elemento del array sea mayor que 0 (eso implica que han salido todas las caras del dado)
        for (let i = 0; i < arrayRecuento.length; i++) {
            it(`Nº veces aparece cara del dado ${i + 1}=> ${arrayRecuento[i]} debería ser mayor que 0`, () => {
                expect(arrayRecuento[i]).toBeGreaterThan(0);
            });
        }

    });

    //La probabilidad con la que ha salido cada cara del dado debería estar próxima a 1/6
    describe(`Tras ${NUMERO_LANZAMIENTOS_LEY_GRANDES_NUMEROS} lanzamientos la probabilidad con la que ha salido cada cara debería ser cercana a 1/6 (16.67%)`, () => {
        let arrayRecuento = [0, 0, 0, 0, 0, 0]; // En este array llevaremos el recuento del nº veces que aparece cada valor devuelto por el dado
        for (let i = 0; i < NUMERO_LANZAMIENTOS_LEY_GRANDES_NUMEROS; i++) {
            let valor = lanzarDado();
            // Usamos el valor devuelvo como índice del arrayRecuento
            arrayRecuento[valor - 1]++;
        }
        // Ahora comprobamos que cada cara del dado haya aparecido con una probabilidad de 1/6 +-10%
        for (let i = 0; i < arrayRecuento.length; i++) {
            it(`Probababilida de con la que ha salido la cara ${i + 1} del dado => ${arrayRecuento[i] / NUMERO_LANZAMIENTOS_LEY_GRANDES_NUMEROS * 100}% debería ser cercana a 1/6 (16.67%)`, () => {
                expect(arrayRecuento[i] / NUMERO_LANZAMIENTOS_LEY_GRANDES_NUMEROS * 100).toBeGreaterThan(1 / 6 * 100 * 0.9);
                expect(arrayRecuento[i] / NUMERO_LANZAMIENTOS_LEY_GRANDES_NUMEROS * 100).toBeLessThan(1 / 6 * 100 * 1.1);
            });
        }

    });



});


