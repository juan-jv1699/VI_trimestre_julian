<?php
if($_POST){
    $name = $_POST['name'];
    $date = $_POST['date'];

    function obtener_edad_segun_fecha($fecha_nacimiento){
        $nacimiento = new DateTime($fecha_nacimiento);
        $ahora = new DateTime(date("Y-m-d"));
        $diferencia = $ahora->diff($nacimiento);
        return $diferencia->format("%y");
    }

    $edad = obtener_edad_segun_fecha($date);
    echo "Su nombre es: ".$name."<br>"."y tiene: ".$edad." años";
}