<?php
include 'db.php';


if (isset($_GET['id'])) {
    $id = $_GET['id'];

   
    $sql = "SELECT * FROM perros WHERE id='$id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $perro = $result->fetch_assoc();
    } else {
        echo "Perro no encontrado.";
        exit();
    }
} else {
    echo "ID no proporcionado.";
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Perro</title>
</head>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #2e8b57;
            text-align: center;
        }
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 2px solid #2e8b57;
            border-radius: 10px;
            background-color: #ffffff;
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        input, select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #2e8b57;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #3cb371;
        }
    </style>
<body>
    <h1>Editar Perro</h1>
    <form action="editar.php" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?php echo $perro['id']; ?>">
        
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="<?php echo $perro['nombre']; ?>" required><br>

        <label for="edad">Edad:</label>
        <input type="number" name="edad" value="<?php echo $perro['edad']; ?>" required><br>

        <label for="raza">Raza:</label>
        <input type="text" name="raza" value="<?php echo $perro['raza']; ?>" required><br>

        <label for="tamano">Tamaño:</label>
        <input type="text" name="tamano" value="<?php echo $perro['tamano']; ?>" required><br>

        <label for="entregado_a">Entregado a:</label>
        <input type="text" name="entregado_a" value="<?php echo $perro['entregado_a']; ?>" required><br>

        <label for="imagen">Imagen (opcional):</label>
        <input type="file" name="imagen"><br>

        <input type="submit" value="Actualizar">
    </form>
</body>
</html>
