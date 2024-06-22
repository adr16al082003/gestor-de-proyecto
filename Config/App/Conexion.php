<?php
class Conexion{
    private $conect;
    public function __contruct(){
        $pdo="mysql:host=".host.";bdname=".bd.";.charset.";
        try{
            $this->conect = new PDO($pdo, user, pass);
            $this->conect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            echo "Error en la conexion".$e->getMessage();
        }
    }
    public function conect(){
        return $this->conect;
    }
    
}
?>