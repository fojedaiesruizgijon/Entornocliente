<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<h1>Se ha registrado correctamente.</h1>
		<strong>Nombre: </strong><?php echo $_POST['minombre'] ?><br>
		<strong>Sexo: </strong><?php echo $_POST['misexo'] ?><br>
		<strong>Altura: </strong><?php echo $_POST['mialtura'] ?><br>
		<strong>Fecha nac: </strong><?php echo $_POST['mifecha'] ?><br>
		<strong>Semana: </strong>
		<?php if (isset($_POST['misemana'])): ?>
			<?php echo $_POST['misemana'] ?>
		<?php else: ?>
			--
		<?php endif ?>
		<br>
		<strong>Fumador: </strong>
		<?php if (!isset($_POST['mifumador'])): ?>
			No
		<?php else: ?>
			Si<br>
			<strong>Cigarrillos:</strong>
			<?php switch ($_POST['micigarrillos'])
			{
				case "1": echo "De 1 a 5 cigarrillos"; break;
				case "2": echo "De 6 a 10 cigarrillos";break;
				case "3":echo "Más de 10 cigarrillos"; break;
			}
			?>
			
		<?php endif ?>
		<br>
		<strong>Observaciones: </strong>
			<?php echo $_POST['miobservaciones'] ?>
		<br>
	</body>
</html>