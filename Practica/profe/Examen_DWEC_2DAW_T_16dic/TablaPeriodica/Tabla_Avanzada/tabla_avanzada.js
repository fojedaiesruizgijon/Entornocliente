
const ELEMENTOS = [
    { id: 1, abrev: "H", nombre: "Hidrógeno", masa: 1.0 },
    { id: 2, abrev: "He", nombre: "Helio", masa: 4.0 },
    { id: 3, abrev: "Li", nombre: "Litio", masa: 6.9 },
    { id: 4, abrev: "Be", nombre: "Berilio", masa: 9.0 },
    { id: 9, abrev: "F", nombre: "Flúor", masa: 19.0 },
    { id: 10, abrev: "Ne", nombre: "Neón", masa: 20.2 },
    { id: 11, abrev: "Na", nombre: "Sodio", masa: 23.0 },
    { id: 12, abrev: "Mg", nombre: "Magnesio", masa: 24.3 },
    { id: 17, abrev: "Cl", nombre: "Cloro", masa: 35.5 },
    { id: 18, abrev: "Ar", nombre: "Argón", masa: 39.9 },
    { id: 19, abrev: "K", nombre: "Potasio", masa: 39.1 },
    { id: 20, abrev: "Ca", nombre: "Calcio", masa: 40.1 },
    { id: 29, abrev: "Cu", nombre: "Cobre", masa: 63.5 },
    { id: 30, abrev: "Zn", nombre: "Zinc", masa: 65.4 },
    { id: 35, abrev: "Br", nombre: "Bromo", masa: 79.9 },
    { id: 36, abrev: "Kr", nombre: "Kriptón", masa: 83.8 },
    { id: 37, abrev: "Rb", nombre: "Rubidio", masa: 85.5 },
    { id: 38, abrev: "Sr", nombre: "Estroncio", masa: 87.6 },
    { id: 47, abrev: "Ag", nombre: "Plata", masa: 107.9 },
    { id: 48, abrev: "Cd", nombre: "Cadmio", masa: 112.4 },
    { id: 53, abrev: "I", nombre: "Yodo", masa: 126.9 },
    { id: 54, abrev: "Xe", nombre: "Xenón", masa: 131.3 }
];

// Colores por columna (6 columnas de elementos)
const COLORES_COLUMNA = [
    "#ffadad", // columna 1
    "#a0c4ff", // columna 2
    "#9bf6ff", // columna 3
    "#ffc6ff", // columna 4
    "#ffd6a5", // columna 5
    "#fdffb6"  // columna 6
];

// Matriz con los IDs de los elementos (null = casilla vacía)
const TABLA = [
    [1, null, null, null, null, 2],
    [3, 4, null, null, 9, 10],
    [11, 12, null, null, 17, 18],
    [19, 20, 29, 30, 35, 36],
    [37, 38, 47, 48, 53, 54]
];


