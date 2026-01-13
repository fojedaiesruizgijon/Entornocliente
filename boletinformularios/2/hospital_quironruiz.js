let SEGUROS_MEDICOS = [
    { value: 1, texto: 'Adeslas' },
    { value: 2, texto: 'Asisa' },
    { value: 3, texto: 'Caser Salud' },
    { value: 4, texto: 'DKV' },
    { value: 5, texto: 'Mapfre' },
    { value: 6, texto: 'Sanitas' }
];


         for (let index = 0; index < SEGUROS_MEDICOS.length; index++) {
            const element = SEGUROS_MEDICOS[index].value;
            const elementtext=SEGUROS_MEDICOS[index].texto;
            var fila=document.createElement('option');
            var codigoFila=element;
               codigoFila+=elementtext;
            fila.innerHTML=codigoFila;
            document.querySelector('#inputSeguroMedico').appendChild(fila);

         }
        
                    

document.getElementById('inputMedicoEspecialista').addEventListener('change', cambiarEstado);


            function cambiarEstado() {
         
            let check = document.getElementById('inputMedicoEspecialista').checked;
            let boton = document.getElementById('inputEspecialidad');

   if (check) {
                boton.disabled =false;  
            } else {
                boton.disabled =true;  
            }
        }




