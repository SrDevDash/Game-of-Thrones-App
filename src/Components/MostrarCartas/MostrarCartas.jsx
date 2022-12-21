import React from "react";
import Carta from "../Carta/Carta";
import "./mostrar-carta.css";
import { Link } from "react-router-dom";

const MostrarCartas = () => {
  return (
    <div className="mostrarCartasBg">
      <div className="contenedor-cartas">
        <Carta />
        <Carta />
        <Carta />
        <Carta />
        <Carta />
        <Carta />
        <Carta />
        <Carta />
      </div>
      <Link to="/">
        <button className="btnVolver">Volver</button>
      </Link>
    </div>
  );
};

export default MostrarCartas;
