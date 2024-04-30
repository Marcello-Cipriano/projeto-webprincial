import React from 'react';
import './atracoes.css';
import { Link } from 'react-router-dom';


const App = () => {
  const toggle = () => {
    const dropdownList = document.querySelector('.profile-dropdown-list');
    dropdownList.classList.toggle('active');
  };

  return (
    <>
      <nav className="navbar">
        <img src={require('../images/Nosso Recife.png').default} className="navbar-logo" alt="logo" />
        
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
              <button><i className="fa-regular fa-user"></i> Editar Perfil</button>
            </li>
            <li className="profile-dropdown-list-item">
              <button><i className="fa-regular fa-envelope"></i> Caixa de entrada</button>
            </li>
            <li className="profile-dropdown-list-item">
              <button><i className="fa-solid fa-sliders"></i> Configurações</button>
            </li>
            <li className="profile-dropdown-list-item">
              <button><i className="fa-regular fa-circle-question"></i> Fale Conosco</button>
            </li>
            <hr />
            <li className="profile-dropdown-list-item">
              <button><i className="fa-solid fa-arrow-right-from-bracket"></i> <Link to="/">Log out </Link></button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <p>É o ponto zero onde a cidade de Recife foi fundada, no século 16 e, sem dúvidas, o grande cartão-postal da cidade.</p>
              </div>
            </div>
          </label>
          
          <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="card">
                <div className="row">
                    <div className="icon">2</div>
                    <div className="description">
                        <p>O parque tem como destaque a Coluna de Cristal, uma escultura de 32 metros de altura que simboliza o marco dos 500 anos do descobrimento do Brasil.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="card">
                <div className="row">
                    <div className="icon">3</div>
                    <div className="description">
                        <p>O museu ocupa um prédio histórico no bairro do Recife Antigo e conta com exposições interativas, oficinas, shows e um acervo de mais de 12 mil itens relacionados ao frevo.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c4" />
            <label htmlFor="c4" className="card">
                <div className="row">
                    <div className="icon">4</div>
                    <div className="description">
                        <p>É uma das mais antigas e charmosas de Recife, no bairro do Recife também, com casarões coloridos que datam do século XVII. Foi considerada a 3ª rua mais bonita do mundo pelo Architectural Digest.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c5" />
            <label htmlFor="c5" className="card">
                <div className="row">
                    <div className="icon">5</div>
                    <div className="description">
                        <p>Ele fica no antigo Armazém 10 do Porto do Recife e tem como inspiração a vida e a obra do cantor Luiz Gonzaga, que nasceu em Pernambuco.</p>
                    </div>
                </div>
            </label>

            <input type="radio" name="slide" id="c6" />
            <label htmlFor="c6" className="card">
                <div className="row">
                    <div className="icon">6</div>
                    <div className="description">
                        <p>Tem esse nome porque originalmente tinha cinco baluartes, mas hoje só restam quatro. Historicamente, a fortaleza tinha a função de defender Recife e funcionava como uma prisão.</p>
                    </div>
                </div>
            </label>
        </div>
      </div>
    </>
  );
}

export default App;
