<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $raza = $_POST['raza'];
    $tamano = $_POST['tamano'];
    $entregado_a = $_POST['entregado_a'];

    
    $sql = "UPDATE perros SET nombre='$nombre', edad='$edad', raza='$raza', tamano='$tamano', entregado_a='$entregado_a' WHERE id='$id'";

    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == UPLOAD_ERR_OK) {
        $imagen = $_FILES['imagen']['name'];
        $target = "imagenes/" . basename($imagen);

  
        if (move_uploaded_file($_FILES['imagen']['tmp_name'], $target)) {
            $sql = "UPDATE perros SET nombre='$nombre', edad='$edad', raza='$raza', tamano='$tamano', imagen='$imagen', entregado_a='$entregado_a' WHERE id='$id'";
        } else {
            echo "Error al subir la imagen.";
            exit();
        }
    }

    if ($conn->query($sql) === TRUE) {
        echo "Perro actualizado exitosamente";
    
        header("Location: listar.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}   
?>
