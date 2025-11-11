<?php
    require_once("Coloreador.php");
    require_once("FiguraGeometrcia");

        class Cercle{
            use Coloreador;
            use FiguraGeometrica;

            public function __constructor(?String $color){
                $this -> color = $color;
            }

            public function calculaArea() : float{
                return pi() * pow($this->radi, 2);
            }

            public function aplicaColor() : string{
                
            }

        }



?>