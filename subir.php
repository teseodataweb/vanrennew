<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $cargo = $_POST['cargo'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "vanrenconsultancy@gmail.com"; 
    $asunto = "Nuevo mensaje desde el formulario de contacto";

    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Empresa: $empresa\n";
    $cuerpo .= "Cargo: $cargo\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        header("Location: contact.html?exito=1");
        exit();
    } else {
        header("Location: contact.html?exito=0");
        exit();
    }
}
?>
