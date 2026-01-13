const MEDICOS= [
    {id:1, nombre: "Juan Cardi"},
    {id:2, nombre: "María Trauma"},
    {id:3, nombre: "Laura Cardi G."},
    {id:4, nombre: "David Derma G."},
    {id:5, nombre: "Carmen Trauma G."},
];

// Array en diasDisponibles con formato JS (0->Domingo, 1->Lunes, ..., 6->Sábado)
const ESPECIALIDADES= [
   {id: 1, nombre: "Cardiología", medicos:[1,3], diasDisponibles:[2,4]},
   {id: 2, nombre: "Dermatología", medicos:[4], diasDisponibles:[1]},
   {id: 3, nombre: "Traumatología", medicos:[2,5], diasDisponibles:[3]},
   {id: 4, nombre: "Guardia", medicos:[3,4,5], diasDisponibles:[5]},
];
function iniciar() {
    obtenerReferenciaControles();
    poblarSegurosMedicos();
    asignaValidacionesHTML5();
    asignarEventos();
    document.querySelector('#enviar').addEventListener('click', validaFormulario);
}
addEventListener('load', iniciar);


