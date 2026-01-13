let SEGUROS_MEDICOS = [
    { value: 1, texto: 'Adeslas' },
    { value: 2, texto: 'Asisa' },
    { value: 3, texto: 'Caser Salud' },
    { value: 4, texto: 'DKV' },
    { value: 5, texto: 'Mapfre' },
    { value: 6, texto: 'Sanitas' }
];

// DNI (ocho dígitos, separador guión opcional y una letra válida en minúsculas o mayúsculas)
let patronDNI = /^\d{8}[trwagmyfpdxbnjzsqvhlcke]*$/i;

// Horario 
let HORARIO_HOSPITAL_LUNES_A_MIERCOLES = "L-X: 10:00 a 14:15, J: 18:30 a 20:00";
let patronHorarioHospitalLunesAMiercoles = /^(1[0-3]:[0-5]\d)|(14:((0\d)|1[0-5]))$/;
let HORARIO_HOSPITAL_JUEVES = "18:30 a 20:00";
let patronHorarioHospitalJueves = /^((18:[3-5]\d)|(19:[0-5]\d)|(20:00))$/;

let inputNombre;
let inputApellidos;
let inputDNI;
let inputSeguroMedico;
let inputMedicoFamilia;
let inputMedicoEspecialista;
let inputEspecialidad;
let inputFechaCita;
let inputHoraCita;


function iniciar() {
    obtenerReferenciaControles();
    poblarSegurosMedicos();
    asignaValidacionesHTML5();
    asignarEventos();
    document.querySelector('#enviar').addEventListener('click', validaFormulario);
}

function obtenerReferenciaControles() {
    inputNombre = document.querySelector("#inputNombre");
    inputApellidos = document.querySelector("#inputApellidos");
    inputDNI = document.querySelector("#inputDNI");
    inputSeguroMedico = document.querySelector("#inputSeguroMedico");
    inputMedicoFamilia = document.querySelector("#inputMedicoFamilia");
    inputMedicoEspecialista = document.querySelector("#inputMedicoEspecialista");
    inputEspecialidad = document.querySelector("#inputEspecialidad");
    inputFechaCita = document.querySelector("#inputFechaCita");
    inputHoraCita = document.querySelector("#inputHoraCita");
}


// Asigna validaciones HTML5 desde JS (para que no esté en el código suministrado al alumno)
function asignaValidacionesHTML5() {
    inputNombre.required = true;
    inputApellidos.required = true;
    inputDNI.required = true;
    inputSeguroMedico.required = true;
    inputFechaCita.required = true;
    inputHoraCita.required = true;
}

function asignarEventos() {
    inputMedicoFamilia.addEventListener('change', cambioRadioButtonMedico);
    inputMedicoEspecialista.addEventListener('change', cambioRadioButtonMedico);
}

function cambioRadioButtonMedico() {
    if (inputMedicoFamilia.checked) {
        inputEspecialidad.selectedIndex = 0;
        inputEspecialidad.disabled = true;
        inputEspecialidad.required = false;
    }
    else {
        inputEspecialidad.disabled = false;
        inputEspecialidad.required = true;
    }
}

function poblarSegurosMedicos() {
    for (let i = 0; i < SEGUROS_MEDICOS.length; i++) {
        inputSeguroMedico.insertAdjacentHTML('beforeend', `<option value="${SEGUROS_MEDICOS[i].value}">${SEGUROS_MEDICOS[i].texto}</option>`);
    }
    // inputSeguroMedico.disabled = true;
}

function calculaLetraDNI(numeroDNI) {
    const letras = "trwagmyfpdxbnjzsqvhlcke";
    return letras.charAt(numeroDNI % 23);
}

function checkFormatoDNIValido(dnistr) {
    return patronDNI.test(dnistr);
}

function checkDNIValido(dnistr) {
    const numeroDNI = Number(dnistr.trim().substr(0, 8));
    const letraDNI = dnistr.trim().substr(dnistr.trim().length - 1, 1);
    return letraDNI.toLowerCase() == calculaLetraDNI(numeroDNI).toLowerCase();

}

function checkLunesAJueves(fecha) {
    return (fecha.getDay() >= 1 && fecha.getDay() <= 4);
}

function checkDentroHorarioHospitalLunesAMiercoles(horastr) {
    return patronHorarioHospitalLunesAMiercoles.test(horastr);
}

function checkDentroHorarioHospitalJueves(horastr) {
    return patronHorarioHospitalJueves.test(horastr);
}

function validaFormulario() {
    //Validación del DNI
    inputDNI.setCustomValidity("");
    let dniPaciente = inputDNI.value;
    if (inputDNI != "") {
        if (!checkFormatoDNIValido(dniPaciente)) { inputDNI.setCustomValidity("DNI no tiene un formato válido"); }
        else if (!checkDNIValido(dniPaciente)) { inputDNI.setCustomValidity("Letra del DNI no válida"); }
        else inputDNI.setCustomValidity("");
    } else {
        inputDNI.setCustomValidity("");
    }



    // Validación de la fecha de la cita(debe ser de lunes a jueves)
    inputFechaCita.setCustomValidity("");
    let fechastr = inputFechaCita.value;
    let fechaCita = new Date(fechastr);
    fechaCita.setHours(0);
    fechaCita.setMinutes(0);
    fechaCita.setSeconds(0);
    let hoy = new Date();
    hoy.setHours(0);
    hoy.setMinutes(0);
    hoy.setSeconds(0);
    if (fechastr != "" && fechaCita.getTime() <= hoy.getTime()) inputFechaCita.setCustomValidity('Debe ser una fecha futura');
    else if (fechastr != "" && !checkLunesAJueves(fechaCita)) inputFechaCita.setCustomValidity("La fecha de la cita sólo puede ser de lunes a jueves");


    // Validación de la hora
    inputHoraCita.setCustomValidity("");
    let horastr = inputHoraCita.value;
    if (horastr != "") {
        if (fechaCita.getDay() >= 1 && fechaCita.getDay() <= 3) {
            if (!checkDentroHorarioHospitalLunesAMiercoles(horastr)) inputHoraCita.setCustomValidity(`De lunes a miércoles debe estar dentro del horario ${HORARIO_HOSPITAL_LUNES_A_MIERCOLES}`);
            else inputHoraCita.setCustomValidity("");
        }
        else if (fechaCita.getDay() == 4) {
            if (!checkDentroHorarioHospitalJueves(horastr)) inputHoraCita.setCustomValidity(`Para los jueves debe estar dentro del horario ${HORARIO_HOSPITAL_JUEVES}`);
            else inputHoraCita.setCustomValidity("");
        }
        else {
            inputHoraCita.setCustomValidity("Horario no válido");
        }
    } else {
        inputHoraCita.setCustomValidity("");
    }


}

addEventListener('load', iniciar);
