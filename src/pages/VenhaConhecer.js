import React from 'react';
import './venhaconhecer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle, faCircleQuestion, faEnvelope, faSliders, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import nossoRecifeLogo from '../images/Nosso Recife.png';

const VenhaConhecer = () => {
  return (
    <>
      <nav className="navbar">
        <img src={nossoRecifeLogo} className="navbar-logo" alt="Logo do Nosso Recife" />
        <ul className="navbar-list">
          <li><Link to="/VenhaConhecer">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/atracoes">Atrações</Link></li>
        </ul>

        <div className="profile-dropdown">
          <div className="profile-dropdown-btn">
            <div className="profile-img">
              <FontAwesomeIcon icon={faCircle} />
            </div>
            <span>João <FontAwesomeIcon icon={faAngleDown} /></span>
          </div>

          <ul className="profile-dropdown-list">
            <li className="profile-dropdown-list-item">
              <button><FontAwesomeIcon icon={faUser} /> Editar Perfil</button>
            </li>
            <li className="profile-dropdown-list-item">
              <button><FontAwesomeIcon icon={faEnvelope} /> Caixa de entrada</button>
            </li>
            <li className="profile-dropdown-list-item">
              <button><FontAwesomeIcon icon={faSliders} /> Configurações</button>
            </li>
            <li className="profile-dropdown-list-item">
              <button><FontAwesomeIcon icon={faCircleQuestion} /> Fale Conosco</button>
            </li>
            <hr />
            <li className="profile-dropdown-list-item">
              <button><FontAwesomeIcon icon={faArrowRightFromBracket} /> <Link to="/">Log out</Link></button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="banner">
        <div className="texto">
          <h1 className="titulo">Explore Recife conosco:</h1>
          <h2 className="sub_titulo">turismo, cultura e lazer em um só lugar!</h2>
          <div className="botoes">
            <button className="n-overlay" >Sobre Nós</button>
            <button className="overlay">Atrações</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenhaConhecer;
