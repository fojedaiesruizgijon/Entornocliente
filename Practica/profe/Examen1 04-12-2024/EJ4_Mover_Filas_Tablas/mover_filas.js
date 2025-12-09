// NO SE PUEDE CAMBIAR LA ESTRUCTURA DE LOS DATOS SUMINISTRADOS
let articulos = [
    {id: 1, nombre:"Monitor", caracteristicas: {precio:151.23, descuento: 10}},
    {id: 2, nombre:"Ratón", caracteristicas: {precio:5.45, descuento: 5}},
    {id: 3, nombre:"Cascos", caracteristicas: {precio:15.59, descuento:15}},
    {id: 4, nombre:"Escáner", caracteristicas: {precio:95.12, descuento: 20}},
]

for (let articulo of articulos) {
    const tbodyIzq = document.getElementsByTagName("tbody")[0];
    const tbodyDer = document.getElementsByTagName("tbody")[1];
    const id = articulo.id;
    const nombre = articulo.nombre;
    const precio = articulo.caracteristicas.precio;
    const descuento = articulo.caracteristicas.descuento;
    const elto = [nombre, precio];

    let fila = document.createElement("tr");
    tbodyIzq.appendChild(fila);

    elto.forEach(e => {
        let td = document.createElement("td");
        fila.appendChild(td);
        td.append(e);
    });
    
    let td = document.createElement("td");
    fila.appendChild(td);
    fila.id = "fila" + id;

    const botonIzq = document.createElement("button");     
    botonIzq.textContent = "<";
    botonIzq.addEventListener("click", () => {
        if (!tbodyIzq) {
            tbodyDer.append(fila);
        } else if (tbodyDer) {
            tbodyIzq.append(fila);
        }   
    });
    td.append(botonIzq);

    let botonDer = document.createElement("button");
    botonDer.textContent = ">";
    botonDer.addEventListener("click", () => {
        if (tbodyIzq) {
            tbodyDer.append(fila);
        } else if (!tbodyDer) {
            tbodyIzq.append(fila);
        }
    });
    td.append(botonDer);

    let botonDescuento = document.createElement("button");
    botonDescuento.textContent = "Dto.";
    botonDescuento.addEventListener("click", () => {
        alert("Dto. " + descuento + "%");
    });
    td.append(botonDescuento);
}