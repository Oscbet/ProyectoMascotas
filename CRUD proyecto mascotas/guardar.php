<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $raza = $_POST['raza'];
    $tamano = $_POST['tamano'];
    $entregado_a = $_POST['entregado_a'];

  
    $imagen = $_FILES['imagen']['name'];
    $target = "imagenes/" . basename($imagen);
    move_uploaded_file($_FILES['imagen']['tmp_name'], $target);

  
    $sql = "INSERT INTO perros (nombre, edad, raza, tamano, imagen, entregado_a) 
            VALUES ('$nombre', '$edad', '$raza', '$tamano', '$imagen', '$entregado_a')";

    if ($conn->query($sql) === TRUE) {
        echo "Perro agregado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
