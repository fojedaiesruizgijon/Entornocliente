describe("Validación de expr. regular para dirección IP",function(){

    let direccionesIPsValidas=["192.168.0.1","0.10.219.255","255.255.255.255","0.0.0.0","1.20.50.60"];
    let direccionesIPsNoValidas=["08.168.0.1","256.10.219.255","255.551.255.255","0.0.0", "0", "192.168.2.1."];

    function comprueba(ipstr,esperado){
        it(`IP ${ipstr} ${(esperado?"sí":"no")} debería ser válida`, function(){
            expect(validaDireccionIP(ipstr)).toEqual(esperado);
        })
    }

    // Testeo de las IPs válidas
    direccionesIPsValidas.forEach((item) =>  comprueba(item,true));

    // Testeo de las IPs no válidas
    direccionesIPsNoValidas.forEach((item) => comprueba(item,false));
    
});