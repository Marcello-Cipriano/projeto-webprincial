import React, { useState } from 'react';
import './sobre.css';
import { Link } from 'react-router-dom';

const Sobre = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <div className="sobre">
      <nav className="navbar">
        <img src={require('../images/Nosso Recife.png').default} className="navbar-logo" alt="logo" />
        <ul className="navbar-list">
          <li><Link to="/VenhaConhecer">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/atracoes">Atrações</Link></li>
        </ul>

        <div className="profile-dropdown">
          <div className="profile-dropdown-btn" onClick={toggleDropdown}>
            <div className="profile-img">
              <i className="fa-solid fa-circle"></i>
            </div>

            <span>
              João
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>

          <ul className={`profile-dropdown-list ${isDropdownActive ? 'active' : ''}`}>
            <li className="profile-dropdown-list-item">
              <button>
                <i className="fa-regular fa-user"></i>
                Editar Perfil
              </button>
            </li>

            <li className="profile-dropdown-list-item">
              <button>
                <i className="fa-regular fa-envelope"></i>
                Caixa de entrada
              </button>
            </li>

            <li className="profile-dropdown-list-item">
              <button>
                <i className="fa-solid fa-sliders"></i>
                Configurações
              </button>
            </li>

            <li className="profile-dropdown-list-item">
              <button>
                <i className="fa-regular fa-circle-question"></i>
                Fale Conosco
              </button>
            </li>
            <hr />

            <li className="profile-dropdown-list-item">
              <button>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <Link to="/">Log out</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="parte-cima">
        <h2>Sobre Nós</h2>
        <p>Bem-vindo ao Nosso Recife, um portal dedicado a proporcionar uma visão completa da nossa amada cidade, funcionando como uma ferramenta de divulgação do destino Recife. Você encontrará informações turísticas detalhadas, sugestões de onde ficar, onde comer, como chegar e o que fazer em Recife. Além disso, oferecemos uma variedade de conteúdos, desde eventos locais e notícias da comunidade até perfis de personalidades locais e guias de viagem detalhados. Junte-se a nós nesta jornada enquanto exploramos, descobrimos e compartilhamos o melhor de Recife. Porque Recife não é apenas um lugar, é o nosso lar.</p>
      </div>

      <div className="parte-baixo">
        <h2>Integrantes</h2>
        <div className="card">
          <h3>Kaio Vitor Mariano da Silva</h3>
          <p>01635673</p>
        </div>
        <div className="card">
          <h3>Marcello Cipriano Ferreira da Silva</h3>
          <p>01582107</p>
        </div>
        <div className="card">
          <h3>Pedro Henrique Tenório Leal</h3>
          <p>01591056</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
