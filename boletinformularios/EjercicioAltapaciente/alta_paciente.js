 
 /*<form action="">
        ¿Confirma los términos y condiciones?
        <input type="checkbox" id="checkbox1">
        <input type="submit" id="botonConfirmar" value="Confirmar" disabled>
    </form>*/
  
        
    
 document.getElementById('mifumador').addEventListener('change', cambiarEstado);

            function cambiarEstado() {
            let check = document.getElementById('mifumador').checked;
            let boton = document.getElementById('micigarrillos');

   if (check) {
                boton.disabled =false;  
            } else {
                boton.disabled =true;  
            }
        }
    