class Persona{
    _nombre
    _edad
    _altura
    constructor(nombre,edad,altura){
        this._nombre=nombre;
        this._edad=edad;
        this._altura=altura;
        
    }
   
        get nombre() {
                return this._nombre.toUpperCase();
        }


        set nombre (nuevoNombre){
            if (!nuevoNombre.trim()) {
            throw new Error("el nombre no debe de tener espacios al principio y al final");
        }
            this._nombre=nuevoNombre.trim();
        }

        get edad(){
            return this._edad;
        }

        set edad(nuevaEdad){
            if (nuevaEdad<0) {
            throw new Error("la edad no puede ser un numero negativo");
        
        }

    }
            get altura(){

            return this._altura;
        }

        set altura(nuevaAltura){
            if (nuevaAltura<0) {
            throw new Error("la edad no puede ser un numero negativo");
        
            }
        }
        toString() {
            return `${this._nombre} (${this._edad} años, ${this._altura} m)`;
        }
        static cmpNombre(p1, p2) {
            return p1._nombre.localeCompare(p2._nombre);
 
        }

                        
        static cmpEdad(p1, p2) {
            return p1._edad - p2._edad; // orden ascendente
                     }

                 static cmpAltura(p1, p2) {
                    return p1._altura - p2._altura; // orden ascendente
             }
            
 }
    

