<?php
    function connect(){
        $host="localhost";
        $user="root";
        $pass="";
        $db="db";
        try{
            $result = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
            $result->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch (PDOExeption $e){
                throw new \Exception ("ERROR: ", $e->getMessage());
            }
            return $result;
    }
?>