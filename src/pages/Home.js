import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './cadastro.css';
import nossoRecifeLogo from '../images/Nosso Recife.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o email é válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    
    navigate("/conhecer"); 
  };

  return (
    <main id="container">
      <form id="login_form" onSubmit={handleSubmit}>
        <div id="form_header">
          <img
            src={nossoRecifeLogo}
            className="navbar-logo"
            alt="Logo do Nosso Recife"
            style={{ width: 150, position: 'absolute', top: 10, left: 10 }}
          />
          <h1>Cadastro</h1>
        </div>

        <div id="inputs">
          {error && <p className="error">{error}</p>}
          <div className="input-box">
            <label htmlFor="name">Nome</label>
            <div className="input-field">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <div className="input-field">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div id="forgot_password">
              <a href="#">Esqueci a senha</a>
            </div>
          </div>
        </div>

        <button type="submit" id="login_button">Login</button>
      </form>
    </main>
  );
};

export default Home;
