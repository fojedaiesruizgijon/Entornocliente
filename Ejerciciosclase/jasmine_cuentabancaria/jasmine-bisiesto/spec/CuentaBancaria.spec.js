describe('testeo de la clase bancaria', () => {
    
    let cuenta1,cuenta2;
    //no se deben crear las instancias fueRA DE un beforeach
         // cuenta1=new CuentaBancaria("Javier","ES82-38473666662334532233", 1000);
   // cuenta2=new CuentaBancaria("Rocío","ES64-36666623345322335443", 2000);
    beforeEach(() => {
         cuenta1=new CuentaBancaria("Javier","ES82-38473666662334532233", 1000);
    cuenta2=new CuentaBancaria("Rocío","ES64-36666623345322335443", 2000);
    });
    //teardpwo
    afterEach(() => {
        cuenta1=null;
        cuenta2=null;
    });
    
    it('El getter nombre de cuenta1 deberia devolver javier', () => {
        expect(cuenta1.titular).toEqual("JAVIER")

    });
    //EL METODO de extraer deberia lanzar un error si la cantidad es mayor al saldo
    it('el metodo extraer deberia lanzar error si la cantidad es mayor al saldo', () => {
        expect(()=>{cuenta1.extraer(1150)}).throwError();
        
    });
    it('el saldo en cuenta1 tras ingresar 70 euros deberia ser 1070', () => {
        cuenta1.ingresar(70);
        expect(cuenta1.saldo).toEqual(1070);

    });
    //transferir 50 euros de cuenta1 a cuenta 2
    it('tras realizar una transferencia de 50 euros  a cuenta2  en cuenta 1 deberia de haber 1020 y en cuenta2 2050', () => {
        cuenta1.transferir(cuenta2,50);
        expect(cuenta1.saldo).toEqual(950);
        expect(cuenta2.saldo).toEqual(2050);
    });
});