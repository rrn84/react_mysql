<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header("Content-Type: text/html; charset=utf-8");
    $method = $_SERVER['REQUEST_METHOD'];
    $Received_JSON = file_get_contents('php://input'); 
    $obj = json_decode($Received_JSON,true);
    sleep(1);

    $user_email = $obj['email'];
    $user_password = $obj['password'];
	
	if($obj['email']!=""){	
	
	$result= $mysqli->query("SELECT * FROM usuarios WHERE email='$user_email' AND password='$user_password'");
	
		if($result->num_rows==0){
			echo json_encode('Datos incorrectos');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('Trata otra vez');
	}

?>
