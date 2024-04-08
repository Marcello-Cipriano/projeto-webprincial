import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./cadastro.css";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se os campos estão preenchidos
    if (!email || !nome || !senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Validar se o email é válido (utilizando uma expressão regular simples)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    
    setError("");
    alert("Cadastro realizado com sucesso!");
    navigate("/conhecer");
  };

  return (
    <div className="container">
      <div className="box-cadastro">
        <h1>Cadastro</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type="submit">Enviar</button>
        </form>
        <p>
          <Link to="/">Voltar para a Página Inicial</Link>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
