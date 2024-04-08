import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="titulo-home">Página Inicial</h1>
      <ul className="lista-links">
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/sobre">Sobre Nós</Link></li>
        <li><Link to="/conhecer">Venha Conhecer</Link></li>
      </ul>
    </div>
  );
};

export default Home;
