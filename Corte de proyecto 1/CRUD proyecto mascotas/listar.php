<?php
include 'db.php';

$sql = "SELECT * FROM perros";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Perros</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
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
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #2e8b57;
            color: white;
        }
        img {
            width: 100px;
            height: auto;
        }
        td a {
    color: #2e8b57;
    text-decoration: none;
    padding: 5px;
}

td a:hover {
    color: #1e6b3a;
}

    </style>
<body>
    <h1>Lista de Perros</h1>
    <table border="1">
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Raza</th>
        <th>Tamaño</th>
        <th>Imagen</th>
        <th>Entregado a</th>
        <th>Acciones</th> 
    </tr>
    <?php
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['nombre']}</td>
                    <td>{$row['edad']}</td>
                    <td>{$row['raza']}</td>
                    <td>{$row['tamano']}</td>
                    <td><img src='imagenes/{$row['imagen']}' width='100'></td>
                    <td>{$row['entregado_a']}</td>
                    <td>
                        <a href='editar_formulario.php?id={$row['id']}' title='Editar'><i class='fas fa-edit'></i></a> | 
                        <a href='eliminar.php?id={$row['id']}' onclick='return confirm(\"¿Estás seguro de que deseas eliminar este perro?\");' title='Eliminar'><i class='fas fa-trash-alt'></i></a>
                    </td>
                  </tr>";
        }
    } else {
        echo "<tr><td colspan='7'>No hay perros registrados</td></tr>";
    }
    ?>
</table>


</body>
</html>
