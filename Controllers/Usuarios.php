<?php
class Usuarios extends Controller{
    public function __construct(){
        session_start();
        parent::__construct();
    }
    public function index(){
        $this->views->getViews($this, "index");
    }
    public function validar(){
        if(empty($_POST['usuario']) || empty($_POST['clave'])){
            $msg= "los campos estan vacio";
        }else{
            $usuario = $_POST['usuario'];
            $clave = $_POST['clave'];
            $data = $this->model->getUsuario($usuario, $clave); 
            if($data){
                $_SESSION['id_usuario'] = $data['id'];
                $_SESSION['usuario'] = $data['usuario'];
                $_SESSION['nombre'] = $data['nombre'];
                $msg = "ok";
            }else{
                $msg = "usuario o clave incorrecta";
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
}
?>