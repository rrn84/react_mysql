<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];

$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "db";

$conexion = mysqli_connect($servidor,$usuario,$password,$bd);   
?>