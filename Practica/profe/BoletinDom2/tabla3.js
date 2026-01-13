        	let paises = [
			{ nombre: 'Francia', capital: 'París', datos: { gobierno: 'República', habitantes: 67407241, idioma: 'francés' }
            , imagen: 'img/france.png' },
			{ nombre: 'Alemania', capital: 'Berlín', datos: { gobierno: 'República federal', habitantes: 83149300, idioma: 'alemán' },
             imagen: 'img/germany.png' },
			{ nombre: 'Italy', capital: 'Roma', datos: { gobierno: 'República parlamentaria', habitantes: 60257566, idioma: 'italiano' }, imagen: 'img/italy.png' },
			{ nombre: 'Portugal', capital: 'Lisboa', datos: { gobierno: 'República unitaria', habitantes: 10295909, idioma: 'portugués' }, imagen: 'img/portugal.png' },
			{ nombre: 'España', capital: 'Madrid', datos: { gobierno: 'Monarquía parlamentaria', habitantes: 47450795, idioma: 'español' }, imagen: 'img/spain.png' },
		];
        
        let codigoFila = "";  

            
            codigoFila += "<th>" + "n" + "</th>";
            codigoFila += "<th>" + "Pais" + "</th>";
             codigoFila += "<th>" + "Capital" + "</th>";
             codigoFila += "<th>" + "Habitantes" + "</th>";
            codigoFila += "<th>" + "Bandera" + "</th>";
             codigoFila += "<th>" + "acciones" + "</th>";
            const fila = document.createElement('tr');
            fila.innerHTML = codigoFila;
            document.querySelector('thead').appendChild(fila);
            let cont=0
      
              paises.forEach(element => {
                       let  codigoFila2=" ";
                        const fila2 = document.createElement('tr');
                        cont++
                        codigoFila2 +="<td>"+cont+"</td>"
                        codigoFila2+="<td>"+element.nombre+"</td>"
                        codigoFila2+="<td>"+element.capital+"</td>"
                        codigoFila2+="<td>"+element.datos.habitantes+"</td>"
                        codigoFila2+="<td><img src='"+element.imagen+"'></td>";
                        codigoFila2+="<td><input type='button' onclick='idioma(this);' value='idioma'>"
                        codigoFila2+="<input type='button' onclick='borrar(this);' value='borrar'>"
                        codigoFila2+="<input type='button' onclick='arriba(this);' value='arriba'>"
                        codigoFila2+="<input type='button' onclick='abajo(this);' value='abajo'></td>";
              
                    fila2.innerHTML=codigoFila2;
                    document.querySelector('tbody').appendChild(fila2);
});
	function arriba(boton){
        var filaActual=boton.parentElement.parentElement;
            var filaanterior=filaActual.previousElementSibling; 
        filaActual.parentElement.insertBefore(filaActual, filaanterior); 

}
function abajo(boton) {
       var filaActual=boton.parentElement.parentElement;
    var filaposterior=filaActual.nextElementSibling;
 
      filaActual.parentElement.insertBefore(filaposterior ,filaActual); 
}
function borrar(boton){
     var filaActual=boton.parentElement.parentElement; 
     document.querySelector('tbody').removeChild(filaActual);
}
function idioma(boton){
     var filaActual=boton.parentElement.parentElement;
     var pais= filaActual.querySelectorAll('td')[1].textContent;
     let idioma1="";
     paises.forEach(element => {
        if (element.nombre==pais) {
        idioma1 = element.datos.idioma;
        }
     });
     alert("habitantes de "+pais+" hablan  "+idioma1);
    }