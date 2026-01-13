<?php
if (isset($_POST['enviar'])) {

    $nombre = $_POST['minombre'];  
    $sexo   = $_POST['misexo'];    
    $altura = $_POST['mialtura'];  
    $fecha  = $_POST['mifecha'];   
    $semana = $_POST['misemana'];  
    $cigarrillos = $_POST['micigarrillos'];
    
    // Corrección: crear variable fumador
    $fumador = isset($_POST['mifumador']) ? "Sí" : "No";

    // Corrección: bien escrito
    $observaciones = $_POST['miobservaciones'];

    echo "Nombre: $nombre<br>";
    echo "Sexo: $sexo<br>";
    echo "Altura: $altura<br>";
    echo "Fecha nacimiento: $fecha<br>";
    echo "Semana preferente: $semana<br>";
    echo "Fumador: $fumador<br>";

    if ($fumador === "Sí") {
        echo "Cigarrillos: $cigarrillos<br>";
    }

    echo "Observaciones: $observaciones<br>";
}
?>

