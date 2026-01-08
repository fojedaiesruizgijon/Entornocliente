class Pelicula{
    static GENERO_HISTORIA=0;
    static GENERO_SCFI=1;
    static GENERO_COMEDIA=2;

    constructor(id,titulo,genero,director,duracion)
    {
        this._id=id;
        this._titulo=titulo;
        this._genero=genero;
        this._director=director;
        this._duracion=duracion;
    }
    getid(){
        return this.id;

    }
    gettitulo(){
        return this._titulo;

    }
    getgenero(){
        return this.genero;

    }
    getdirector(){
        return this._director;

    }
    getduracion(){
        return this._duracion;
    }
}
class Proyeccion {
    constructor(pelicula,fechaStr,horaStr){
        this._pelicula=pelicula;
        this._fechaStr=fechaStr;
        this._horaStr=horaStr;


    }
    gettitulo(){
        return 
    }
    getfechastr(){
        return this._fechaStr;

    }
    gethora(){
        return this._horaStr;
    }
    toString(){
        return  this._fechaStr+" "+this._horaStr+" =>"+gettitulo();
    }
}
class Sala {
    constructor(idsala,) {
        this._idsala=idsala;
           this._proyecciones = [];

    }
    
    añadirProyeccion(...proyeccion) {
        this._proyecciones.push(...proyeccion);
    }
     toString(){
        return  this._fechaStr+" "+this._horaStr+" =>";
    }
    getProyeccionesGenero(... genero){
            pelicula
    }
    
}


