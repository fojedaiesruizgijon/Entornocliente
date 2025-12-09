function cambiarTamaño() {
    let numParrafo=Number(document.getElementById("input-numparrafo").value);
    let tamaño = document.getElementById("input-size").value;
    let parrafo = document.getElementsByTagName("p")[numParrafo-1];
    parrafo.style.fontSize = tamaño + "px";
}

function cambiarColor() {
    let numParrafo=Number(document.getElementById("input-numparrafo").value);
    let color = document.getElementById("input-color").value;
    let parrafo = document.getElementsByTagName("p")[numParrafo-1];
    parrafo.style.color = color;
}

function cambiarVisibilidad() {
    let numParrafo=Number(document.getElementById("input-numparrafo").value);
    let visibilidad = document.getElementById("input-visibility").value;
    let parrafo = document.getElementsByTagName("p")[numParrafo-1];
    parrafo.style.visibility = visibilidad
}

function cambiarDisplay(){
     let numParrafo=Number(document.getElementById("input-numparrafo").value);
    let display = document.getElementById("input-display").value;
    let parrafo = document.getElementsByTagName("p")[numParrafo-1];
    parrafo.style.display = display
}