function iniciar() {
    document.getElementById('mifumador').addEventListener('change', cambioChkFumador);
    document.getElementById('enviar').addEventListener('click', validaFormulario);

    //rellenaCampos();
}

function calculaEdad(fechaNacimiento) {
    let hoy = new Date();
    var annios = hoy.getYear() - fechaNacimiento.getYear();
    if (hoy.getMonth() < fechaNacimiento.getMonth()) return annios - 1;
    else if (hoy.getMonth() > fechaNacimiento.getMonth()) return annios;
    else {
        if (hoy.getDate() >= fechaNacimiento.getDate()) return annios;
        else return annios - 1;
    }
}

// Usado en debug
function rellenaCampos() {
    document.getElementById('minombre').value = "Carlos";
    document.getElementById('mialtura').value = "176";
    document.getElementById('misexo_h').checked = true;
    document.getElementById('mifecha').value = "1981-01-17";
    document.querySelector("input[name='misemana'").value = "2021-W34";
}

function cambioChkFumador(ev) {
    //alert("Cambio en fumador!" + ev.target.checked);
    document.getElementById("micigarrillos").disabled = !ev.target.checked;
}

function validaFormulario() {
    // Comprobamos si es menor de edad
    let fechaNacStr = document.getElementById('mifecha').value.trim();
    if (fechaNacStr != "") {
        let fechaNac = new Date(fechaNacStr);
        let edad = calculaEdad(fechaNac);
        if (edad >= 18) document.getElementById('mifecha').setCustomValidity("");
        else document.getElementById('mifecha').setCustomValidity("Debe ser mayor de edad");
    }
    // Si está marcada la casilla de fumador el usuario debe seleccionar el número de cigarrillos
    if (document.getElementById("mifumador").checked) {
        if (document.getElementById('micigarrillos').selectedIndex == 0) {
            document.getElementById("micigarrillos").setCustomValidity('Debe indicar el número de cigarrillos');
        } else {
            document.getElementById("micigarrillos").setCustomValidity('');
        }
    }

}

addEventListener('load', iniciar);
