import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingBg">
      <h1 className="landingTitle">Game of Thrones App</h1>

      <div className="landingBtnContainer">
        <Link to="/personajes">
          <button className="landingBtn">Personajes</button>
        </Link>

        <button className="landingBtnCasas">Casas</button>
      </div>
      <h3>
        En esta aplicación podrás adentrarte al oscuro mundo de Game of Thrones,
        podrás encontrar información interesante sobre los personajes de la
        serie, así como las respectivas casas de cada uno de ellos, esperamos
        que la disfrutes
      </h3>
    </div>
  );
};

export default LandingPage;
