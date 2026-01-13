class Factura {
    constructor(codigo, fecha, cliente) {
        this._codigo = codigo;
        this._fecha = fecha;
        this._cliente = cliente;
        this._articulos = [];
    }

    get nombreCliente() {
        return this._cliente.nombre;
    }

    get letraDNICliente() {
        return this._cliente.dni.slice(8, 9);
    }

    añadirArticulo(...articulo) {
        this._articulos.push(...articulo);
    }

    totalFactura() {
        let total = 0;

        this._articulos.forEach((articulo) => {
            total += articulo.cantidad * articulo.precio;
        });

        return Number(total);
    }

    buscarArticulos(str) {
        let articulosEncontrados = [];

        this._articulos.forEach((articulo) => {
            str = str.toLowerCase();
            let desc = articulo.descripcion.toLowerCase();

            if (desc.includes(str)) {
                articulosEncontrados.push(articulo.codigo);
            }
        });

        return articulosEncontrados;
    }
}