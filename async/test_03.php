<?php
if($_POST){
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $result = $num1 + $num2;
    echo $result;
}