<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header("Content-Type: text/html; charset=utf-8");
    $method = $_SERVER['REQUEST_METHOD'];
	$JSONData = file_get_contents("php://input");
    $dataObject = json_decode($JSONData);     
    sleep(1);
    
    require ('connection.php');	

    $user_name = utf8_decode( $dataObject-> name) ;
    $user_email = utf8_decode( $dataObject-> email) ;
    $user_password = utf8_decode( $dataObject-> password) ;
    

    $CheckSQL = "SELECT * FROM usuarios WHERE email='$user_email'";        
    $check = mysqli_fetch_array(mysqli_query($conexion,$CheckSQL));
    
    if(isset($check))
    {
        $Duplicate_email = 'El correo ya existe.';
        $Duplicate_email_Json = json_encode($Duplicate_email);
        echo $Duplicate_email_Json ; 
    }
    else
    {
        $Sql_Query = "INSERT INTO usuarios (name,email,password) VALUES ('$user_name','$user_email','$user_password')";
        if(mysqli_query($conexion,$Sql_Query))
        {
            $MSG = 'Usuario registrado' ;
            $json = json_encode($MSG);
            echo $json ;
        }
        else
        {
            echo 'Trate otra vez';
        }
    }
    mysqli_close($conexion);
?>