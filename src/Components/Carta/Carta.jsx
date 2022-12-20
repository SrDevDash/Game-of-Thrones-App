import React from "react";
import "./carta.css";
import personaje from "../../img/personaje.png";

const Carta = () => {
  return (
    <div className="carta-contenedor">
      <div className="carta">
        <img src={personaje} />
        <h3>Nombre</h3>
        <p>Descripción 1: aqui va la descripción y esas cosas lorems impus</p>
      </div>
    </div>
  );
};

export default Carta;
