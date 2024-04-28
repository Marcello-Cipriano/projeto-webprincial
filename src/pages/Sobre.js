import React, { useState } from 'react';
import './sobre.css'; 
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const Sobre = () => {
  const navigate = useNavigate(); 
  const toggle = () => {
    const profileDropdownList = document.querySelector(".profile-dropdown-list");
    const btn = document.querySelector(".profile-dropdown-btn");
    const classList = profileDropdownList.classList;
    classList.toggle("active");
  };
  return (
    <div className="sobre">
      <nav className="navbar">
      <img src={require('../images/Nosso Recife.png')} className="navbar-logo" alt="logo" />
      <ul className="navbar-list">
          <li><Link to="/VenhaConhecer">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/atracoes">Atrações</Link></li>
        </ul>

        <div className="profile-dropdown">
          <div className="profile-dropdown-btn" onClick={() => toggle()}>
            <div className="profile-img">
              <i className="fa-solid fa-circle"></i>
            </div>

            <span>
              João
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>

          <ul className="profile-dropdown-list">
            <li className="profile-dropdown-list-item">
              <a href="#">
                <i className="fa-regular fa-user"></i>
                Editar Perfil
              </a>
            </li>

            <li className="profile-dropdown-list-item">
              <a href="#">
                <i className="fa-regular fa-envelope"></i>
                Caixa de entrada
              </a>
            </li>

            <li className="profile-dropdown-list-item">
              <a href="#">
                <i className="fa-solid fa-sliders"></i>
                Configurações
              </a>
            </li>

            <li className="profile-dropdown-list-item">
              <a href="#">
                <i className="fa-regular fa-circle-question"></i>
                Fale Conosco
              </a>
            </li>
            <hr />

            <li className="profile-dropdown-list-item">
              <a href="#">
              <a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> <Link to="/">Log out </Link></a>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="parte-cima">
        <h1> </h1>
        <h2>Sobre Nós</h2>
        <p>Bem-vindo ao Nosso Recife, um portal dedicado a proporcionar uma visão completa da nossa amada cidade, funcionando como uma ferramenta de divulgação do destino Recife. Você encontrará informações turísticas detalhadas, sugestões de onde ficar, onde comer, como chegar e o que fazer em Recife. Além disso, oferecemos uma variedade de conteúdos, desde eventos locais e notícias da comunidade até perfis de personalidades locais e guias de viagem detalhados. Junte-se a nós nesta jornada enquanto exploramos, descobrimos e compartilhamos o melhor de Recife. Porque Recife não é apenas um lugar, é o nosso lar.</p>
      </div>

      <div className="parte-baixo">
        <h1>Integrantes</h1>
        <div className="card">
          <h2>Kaio Vitor Mariano da Silva</h2>
          <p>01635673</p>
        </div>
        <div className="card">
          <h2>Marcello Cipriano Ferreira da Silva</h2>
          <p>01582107</p>
        </div>
        <div className="card">
          <h2>Pedro Henrique Tenório Leal</h2>
          <p>01591056</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
