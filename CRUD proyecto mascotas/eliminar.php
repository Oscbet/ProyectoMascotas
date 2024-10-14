<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

 
    $sql = "DELETE FROM perros WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Perro eliminado exitosamente";
    } else {
        echo "Error: " . $conn->error;
    }
    header("Location: listar.php"); 
    exit();
} else {
    echo "ID no especificado.";
}
?>
