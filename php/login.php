<?php
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData,true);   
$method = $_SERVER['REQUEST_METHOD'];
require("connect.php");

$conexion= connect();
$response= array();

$user = $dataObject['user'];
$pass = $dataObject['pass'];

//   $user= "123";
//   $pass= "123";


$sql ="SELECT user, pass FROM usuarios WHERE user=:user and pass=:pass";
$query= $conexion-> prepare($sql);
$res=$query-> execute([
    "user"=>$user,
    "pass"=>$pass
]);

if($res)
{
    $response["status"]=1;

}else
{
    $response["status"]=0;

}

echo json_encode($response)

?>