<?php
$json=file_get_contents('php://input');
$jsonObj= json_decode($json,true);
require("connect.php");

$result =connect();
$response=array();


//   $email="ronny@hola.com";
//   $user="ronny";
//   $pass="123";
$email= $jsonObj["pEmail"];
$user= $jsonObj["pUser"];
$pass= $jsonObj["pPass"];

$sql ="INSERT INTO usuarios (email, user, pass) VALUES (:email,:user,:pass)";
$query= $result-> prepare($sql);
$res=$query-> execute([
    "email"=>$email,
    "user"=>$user,
    "pass"=>$pass
]);

if($res)
{
    $response["status"]=1;
    // echo json_encode($query);
}else
{
    $response["status"]=0;
}

echo json_encode($response)

?>