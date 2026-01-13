let dias = [
    { id: 1, nombre: 'L' },
    { id: 2, nombre: 'M' },
    { id: 3, nombre: 'X' },
    { id: 4, nombre: 'J' },
    { id: 5, nombre: 'V' }
];
let asignaturas = [
    { id: 0, nombre: '-', horas: 0, color: 'gray' },
    { id: 1, nombre: 'DWEC', horas: 6, color: 'red' },
    { id: 2, nombre: 'DWES', horas: 8, color: 'cyan' },
    { id: 3, nombre: 'HLC', horas: 3, color: 'yellow' },
    { id: 4, nombre: 'EIE', horas: 4, color: 'blue' },
    { id: 5, nombre: 'DIW', horas: 6, color: 'magenta' },
    { id: 6, nombre: 'DAW', horas: 3, color: 'brown' }
];
let profesores = [
    { id: 0, nombre: '-', correo: '-' },
    { id: 1, nombre: 'Javier', correo: 'jsoldado@iesruizgijon.com' },
    { id: 2, nombre: 'Rubén', correo: 'fortiz@iesruizgijon.com' },
    { id: 3, nombre: 'Francisco', correo: 'fjmatias@iesruizgijon.com' },
    { id: 4, nombre: 'Rosa', correo: 'rcortes@iesruizgijon.com' },
    { id: 5, nombre: 'David', correo: 'dlinde@iesruizgijon.com' },
    { id: 6, nombre: 'Eloy', correo: 'eadiaz@iesruizgijon.com' },
    { id: 7, nombre: 'Rafael', correo: 'ralonso@iesruizgijon.com' }
];
let tramos = [
    { id: 1, hora: '8:00-9:00', descripcion: '1ª Hora' },
    { id: 2, hora: '9:00-10:00', descripcion: '2ª Hora' },
    { id: 3, hora: '10:00-11:00', descripcion: '3ª Hora' },
    { id: 4, hora: '11:00-12:00', descripcion: '4ª Hora' },
    { id: 5, hora: '12:00-12:30', descripcion: 'RECREO' },
    { id: 6, hora: '12:30-13:30', descripcion: '5ª Hora' },
    { id: 7, hora: '13:30-14:30', descripcion: '6ª Horas' }
];
let horario = [
    {
        idTramo: 1, asignaturas: [
            { idDia: 1, idAsignatura: 4, idProfesor: 6 },
            { idDia: 2, idAsignatura: 3, idProfesor: 5 },
            { idDia: 3, idAsignatura: 6, idProfesor: 4 },
            { idDia: 4, idAsignatura: 1, idProfesor: 7 },
            { idDia: 5, idAsignatura: 6, idProfesor: 4 }
        ]
    },
    {
        idTramo: 2, asignaturas: [
            { idDia: 1, idAsignatura: 5, idProfesor: 3 },
            { idDia: 2, idAsignatura: 1, idProfesor: 1 },
            { idDia: 3, idAsignatura: 2, idProfesor: 2 },
            { idDia: 4, idAsignatura: 1, idProfesor: 7 },
            { idDia: 5, idAsignatura: 6, idProfesor: 4 },
        ]
    },
    {
        idTramo: 3, asignaturas: [
            { idDia: 1, idAsignatura: 4, idProfesor: 6 },
            { idDia: 2, idAsignatura: 1, idProfesor: 1 },
            { idDia: 3, idAsignatura: 2, idProfesor: 2 },
            { idDia: 4, idAsignatura: 2, idProfesor: 2 },
            { idDia: 5, idAsignatura: 1, idProfesor: 1 },
        ]
    },
    {
        idTramo: 4, asignaturas: [
            { idDia: 1, idAsignatura: 2, idProfesor: 2 },
            { idDia: 2, idAsignatura: 2, idProfesor: 2 },
            { idDia: 3, idAsignatura: 2, idProfesor: 2 },
            { idDia: 4, idAsignatura: 5, idProfesor: 3 },
            { idDia: 5, idAsignatura: 1, idProfesor: 1 },
        ]
    },
    {
        idTramo: 5, asignaturas: [
            { idDia: 1, idAsignatura: 0, idProfesor: 0 },
            { idDia: 2, idAsignatura: 0, idProfesor: 0 },
            { idDia: 3, idAsignatura: 0, idProfesor: 0 },
            { idDia: 4, idAsignatura: 0, idProfesor: 0 },
            { idDia: 5, idAsignatura: 0, idProfesor: 0 },
        ]
    },
    {
        idTramo: 6, asignaturas: [
            { idDia: 1, idAsignatura: 2, idProfesor: 2 },
            { idDia: 2, idAsignatura: 4, idProfesor: 6 },
            { idDia: 3, idAsignatura: 5, idProfesor: 3 },
            { idDia: 4, idAsignatura: 5, idProfesor: 3 },
            { idDia: 5, idAsignatura: 3, idProfesor: 5 },
        ]
    },
    {
        idTramo: 7, asignaturas: [
            { idDia: 1, idAsignatura: 2, idProfesor: 2 },
            { idDia: 2, idAsignatura: 4, idProfesor: 6 },
            { idDia: 3, idAsignatura: 5, idProfesor: 3 },
            { idDia: 4, idAsignatura: 5, idProfesor: 3 },
            { idDia: 5, idAsignatura: 3, idProfesor: 5 }
        ]
    }
];

addEventListener('load', iniciar);

function iniciar() {
    document.querySelector("#inputCrearHorario").addEventListener('click', crearHorario);
}

function crearHorario(){
    let dias1 = "";  
  
    dias1 += "<th>Horas</th>";
    for(let i = 0; i < dias.length; i++) {
        dias1 += "<th>" + dias[i].nombre + "</th>";
    }
    
    const fila = document.createElement('tr');
    fila.innerHTML = dias1;
    document.querySelector('thead').appendChild(fila);

    for(let i = 0; i < horario.length; i++) {
        let tramo = horario[i];
        let pa = "";
        const fila2 = document.createElement('tr');
 
        let horaTramo = "";
        let descripcionTramo = "";
        for(let j = 0; j < tramos.length; j++) {
            if(tramos[j].id === tramo.idTramo) {
                horaTramo = tramos[j].hora;
                descripcionTramo = tramos[j].descripcion;
            
            }
        }
        pa += "<td>" + horaTramo + "<br>" + descripcionTramo + "</td>";
        
       
        for(let k = 0; k < dias.length; k++) {
            let dia = dias[k];
            let asignaturaEncontrada = null;
            
  
            for(let m = 0; m < tramo.asignaturas.length; m++) {
                if(tramo.asignaturas[m].idDia === dia.id) {
                    asignaturaEncontrada = tramo.asignaturas[m];
                    
                }
            }
            
            if(asignaturaEncontrada && asignaturaEncontrada.idAsignatura !== 0) {
        
                let nombreAsignatura = "";
                let colorAsignatura = "";
                for(let n = 0; n < asignaturas.length; n++) {
                    if(asignaturas[n].id === asignaturaEncontrada.idAsignatura) {
                        nombreAsignatura = asignaturas[n].nombre;
                        colorAsignatura = asignaturas[n].color;
                     
                    }
                }
          
                let nombreProfesor = "";
                for(let p = 0; p < profesores.length; p++) {
                    if(profesores[p].id === asignaturaEncontrada.idProfesor) {
                        nombreProfesor = profesores[p].nombre;
                
                    }
                }
                
                pa += "<td style='background-color: " + colorAsignatura + "'>" + 
                      nombreAsignatura + "<br>" + nombreProfesor + "</td>";
            } else {
                pa += "<td style='background-color: gray'>-</td>";
            }
        }
        
        fila2.innerHTML = pa;
        document.querySelector('tbody').appendChild(fila2);
    }
}