import React from 'react';
import './venhaconhecer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle, faCircleQuestion, faEnvelope, faSliders, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import nossoRecifeLogo from '../images/Nosso Recife.png';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const VenhaConhecer = () => {
  const toggle = () => {
    const dropdownList = document.querySelector('.profile-dropdown-list');
    dropdownList.classList.toggle('active');
  };

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
          <div onClick={toggle} className="profile-dropdown-btn">
            <div className="profile-img">
              <i className="fa-solid fa-circle"></i>
            </div>

            <span>João <i className="fa-solid fa-angle-down"></i></span>
          </div>

          <ul className="profile-dropdown-list">
            <li className="profile-dropdown-list-item">
              <a href="#"><i className="fa-regular fa-user"></i> Editar Perfil</a>
            </li>
            <li className="profile-dropdown-list-item">
              <a href="#"><i className="fa-regular fa-envelope"></i> Caixa de entrada</a>
            </li>
            <li className="profile-dropdown-list-item">
              <a href="#"><i className="fa-solid fa-sliders"></i> Configurações</a>
            </li>
            <li className="profile-dropdown-list-item">
              <a href="#"><i className="fa-regular fa-circle-question"></i> Fale Conosco</a>
            </li>
            <hr />
            <li className="profile-dropdown-list-item">
              <a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> <Link to="/">Log out </Link></a>
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
