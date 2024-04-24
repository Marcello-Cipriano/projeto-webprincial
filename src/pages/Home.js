import React, { useState } from 'react';
import './cadastro.css'; // Importe sua folha de estilo

const Home = () => {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <main id="container" className={modoEscuro ? 'dark' : ''}>
      <form id="login_form">
        <div id="form_header">
          <img src="imagens/Nosso Recife.png" alt="Logo" style={{ width: '150px', position: 'absolute', top: '10px', left: '10px' }} />
          <h1>Cadastro</h1>
          <i id="mode_icon" className={modoEscuro ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} onClick={alternarModoEscuro}></i>
        </div>

        <div id="social_media">
          <a href="#">
            <img src="imagens/facebook logo.png" alt="" />
          </a>
          <a href="#">
            <img src="imagens/google logo.png" alt="Logotipo do Google" />
          </a>
        </div>

        <div id="inputs">
          <div className="input-box">
            <label for="name">
              Nome
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input type="text" id="name" name="name" />
              </div>
            </label>
          </div>

          <div className="input-box">
            <label for="email">
              E-mail
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" id="email" name="email" />
              </div>
            </label>
          </div>

          <div className="input-box">
            <label for="password">
              Senha
              <div className="input-field">
                <i className="fa-solid fa-key"></i>
                <input type="password" id="password" name="password" />
              </div>
            </label>

            <div id="forgot_password">
              <a href="#">Esqueci a senha</a>
            </div>
          </div>
        </div>

        <button type="submit" id="login_button">
          Login
        </button>
      </form>
    </main>
  );
};

export default Home;

