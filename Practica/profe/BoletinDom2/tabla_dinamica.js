// Escribe aquí tu código
function insertarFila(){
      var texto=document.getElementById('txtCaja').value;
           var codigoFila="<td>" +  texto + "</td>";
    codigoFila += "<td><input type='button' onclick='copiarEncima(this);' value='Copiar encima'>";
	codigoFila += "<input type='button' onclick='borrar(this);' value='Borrar'>";
    codigoFila += "<input type='button' onclick='actualizar(this);' value='actualizar'>";
    codigoFila += "<input type='button' onclick='arriba(this);' value='arriba'>";
    codigoFila += "<input type='button' onclick='abajo(this);' value='abajo'></td>";
      var fila=document.createElement('tr');
        fila.innerHTML=codigoFila;
        document.querySelector('tbody').appendChild(fila);
      
}
function copiarEncima(boton){
  var filaActual=boton.parentElement.parentElement;  
    var filaACopiar=boton.parentElement.parentElement.cloneNode(true);
       filaACopiar.querySelector('td').textContent += "(copia)";
   document.querySelector('tbody').insertBefore(filaACopiar,filaActual); 

}
function borrar(boton){
     var filaActual=boton.parentElement.parentElement; 
     document.querySelector('tbody').removeChild(filaActual);
}
function abajo(boton) {
       var filaActual=boton.parentElement.parentElement;
    var filaposterior=filaActual.nextElementSibling;
 
      filaActual.parentElement.insertBefore(filaposterior ,filaActual); 
}
function arriba(boton){
        var filaActual=boton.parentElement.parentElement;
            var filaanterior=filaActual.previousElementSibling; 
        filaActual.parentElement.insertBefore(filaActual, filaanterior); 

}
function actualizar(boton){
              var dato =prompt("introduce el dato");
              var filaActual=boton.parentElement.parentElement;
            filaActual.querySelector('td').textContent = dato;
                
}
function intercambiarFilas(){
        var texto1=document.getElementById('input-fila1').value;
        var texto2=document.getElementById('input-fila2').value;
        var n1  =  document.querySelectorAll("tr")[texto1];
        var n2  =   document.querySelectorAll("tr")[texto2];
        
        
}